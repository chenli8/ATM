/**
 * Created by Yinxiong on 2015/9/20.
 */
define([
'core',
'jquery',
'ui/RectangleSelect',
'ui/tips',
'ui/Flyout',
'backbone',
'underscore',
'handlebars',
'bluebird',
'FileSaver',
'sdk/BMapWrap',
//'sdk/BMapHeatmap',
'sdk/Mapv',
'canvasToBlob'
],
function( core, $, RectangleSelect, tips, Flyout, Backbone, _, Handlebar, Promise, saveAs, BMapWrap, HeatmapOverlay){
    
    function isSupportCanvas() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

    var store = {};

    function getKey(project, stay, filter, divider){
        divider = divider || '/';
        var key_reg = new RegExp('^'+divider+'*(.*[^'+divider+'])'+divider+'*$', 'g');
        return [ stay, filter].join(divider).replace(key_reg, '$1');
    }

    var CanvasView = Backbone.View.extend({
        MAX_SIZE: 16000,
        initialize: function(w, h){
            if( this.el.tagName == 'DIV' ){
                this.el = document.createElement('canvas');
            }
            this.ctx = this.el.getContext('2d');
            if( w && h ){
                this.setSize(w, h);
            }
        },
        //Maximum height/width: 32,767 pixels
        //Maximum area: 268,435,456 pixels (e.g., 16,384 x 16,384)
        setSize: function(w, h){
            this.el.width = Math.min(w, this.MAX_SIZE);
            this.el.height = Math.min(h, this.MAX_SIZE);
            return this;
        },
        render: function( container ){
            $(container || document.body).append(this.el)
        },
        clear: function(){
            this.ctx.clearRect(0, 0, this.el.width, this.el.height);
            return this;
        }
    });

    var loader = function(){
        var Loader = Backbone.View.extend({
            el: '.loading',
            initialize: function(){
                this.$text = this.$el.find('p');
            },
            show: function(){
                this.$el.show();
                core.delay(function(){
                    this.$el.addClass('show');
                }.bind(this));
                return this;
            },
            _hide: function(){
                this.$el.hide().removeClass('hide visible')
            },
            hide: function(){
                //以防错过transition事件
                var t = core.delay(function(){
                     this._hide();
                }.bind(this), 500);

                core.transitionEnd(this.$el.addClass('hide'), function(){
                    this._hide();
                    clearTimeout(t);
                }.bind(this));

                return this;
            },
            setText: function(html){
                this.$text.html(html || '载入中..');
                return this;
            }
        });
        return new Loader;
    }();

    var App = Backbone.View.extend({
        LNG_PER_PIXEL: 0.0000359314,
        LAT_PER_PIXEL: 0.0000327217,
        RATIO: 1e10,
        defaultMax: 100,
        defaultLevel: 14,
        SELECTION_MIN_SIZE: 800,
        SELECTION_MAX_SIZE: 1e4,
        MAX_BMAP_SIZE: 1024,
        bMap: null,
        config: null,
        _getDataXhr: null,
        _lastActive: null,
        _isHeapMapShow: false,
        _isStartCapture: false,
        _heatMapOpacity: 80,
        heatmap_overlay: null,
        layer:null,
        el: 'body',
        _currentFullName: '',
        getView: function(){
            this.$page_title         = this.$el.find('#PageTitle');
            this.$map_container      = this.$el.find('#MapContainer');
            this.$map_wrap           = this.$el.find('.map-wrap');
            this.$device_count       = this.$el.find('#DeviceCount');
            this.$point_count        = this.$el.find('#PointCount');
            this.$projects_nav       = this.$el.find('#Projects');
            this.$btn_show_heatmap   = this.$el.find('.show-heatmap-btn');
            this.$btn_capture        = this.$el.find('.capture-btn');
            this.$btn_download       = this.$el.find('.download-btn');
            this.$snap_shot          = this.$el.find('.snap-shot');
            this.$options            = this.$el.find('.options');
            this.$info               = this.$el.find('.main .info');
            this.$help               = this.$options.find('.help');

            this.$max_input          = this.$el.find('.max-input');
            this.$opacity_input      = this.$el.find('.opacity-input');
            this.$radius_input       = this.$el.find('.radius-input');
            this.$download_snapshot  = this.$el.find('.download-snapshot');
            this.$download_input     = this.$download_snapshot.find('input');
            this.$download_confirm   = this.$download_snapshot.find('button');

            this.heatmap_canvas      = null;
            this.tpl_projects        = Handlebar.compile($('#template-projects').html());
            this.tpl_help            = $('#template-help').html();
        },
        events: {
            'click .show-heatmap-btn'           : 'toggleShowHeatmap',
            'click .capture-btn'                : 'capture',
            'click .download-btn'               : 'captureCurrentScreen',
            'click .projects a'                 : 'openNav',
            'click .move-map-btn'               : 'moveMap',
            'click .max-submit-btn'             : 'setMaxValue',
            'click .radius-submit-btn'          : 'setRadiusValue',
            'click .opacity-submit-btn'         : 'setOpacityValue',
            'keyup .max-input'                  : 'setMaxValue',
            'keyup .radius-input'               : 'setRadiusValue',
            'keyup .opacity-input'              : 'setOpacityValue',
            'keyup .download-snapshot input'    : 'setCaptureName',
            'click .download-snapshot .close'   : '_closeDownloadSnap',
            'click .download-snapshot .cancel'  : '_closeDownloadSnap',
            'click .download-snapshot .save'    : '_saveCapture'
        },
        test: function(){
            //var bounds = this.bMap.getBounds();
            //var ne = this.bMap.pointToOverlayPixel(bounds.getNorthEast());
            //var sw = this.bMap.pointToOverlayPixel(bounds.getSouthWest());

            this.heatmap_overlay.setOptions({
                gradient: { 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1.0: "rgb(255,0,0)" },
                radius: 10
            });
        },
        initialize: function( config ){
            var self = this;

            this.getView();

            this.config = config;

            this.bMap = BMapWrap(this.$map_container);

            this.$page_title.text(config.name);

            var mapConfig = this.config.map || this.config.projects[0].map;
            if( typeof mapConfig.center == 'object'){
                mapConfig.center = new BMap.Point(mapConfig.center.lng, mapConfig.center.lat);
            }
            mapConfig && this.bMap.centerAndZoom(mapConfig.center, mapConfig.level);

            this.rectangleSelect = new RectangleSelect(this.$map_container, {
                onClose: function(){
                    self._changeCaptureBtnText();
                },
                onMove: function(){
                    self._updateSize();
                },
                onStop: function(){
                    this.setZoomMin(self.bMap.getZoom());
                    this._isError && tips(this.$selection, '宽高需要在800~10000像素之间', {
                        classStyle: 'error',
                        stayTime: 2000
                    });
                },
                onConfirm: function( pixels, zoom ){
                    self._readyToCapture(pixels, zoom);
                }
            });

            this.bMap.addEventListener('zoomend', function(){
                if( self.rectangleSelect.hasSelection() ){
                    self._updateSize();
                    self.rectangleSelect.setZoomMin(this.getZoom());
                    self.rectangleSelect._isError ? self.rectangleSelect._hideConfirm() : self.rectangleSelect._showConfirm();
                }
            });

            var help_flyout = new Flyout(this.tpl_help);

            this.$help.on('click', function(){
                help_flyout.show(this, 'bottom', 'right');
            });

            if( !('showCount' in this.config) || !!this.config.showCount !== false ){
                this.$info.removeClass('hidden');
            }
            //截屏缩略图
            this.snapshot_canvas = new CanvasView(12000, 12000);
            this.snapshot_canvas.render( this.$snap_shot );

            //截屏下载图
            this.download_canvas = new CanvasView(500, 400);
            this.download_canvas.render(this.$download_snapshot.find('.canvas'));

            this.shadow_canvas   = new CanvasView();
            this.shadow_canvas.render(document.body);
            this.shadow_canvas.el.className = 'hidden';

            this.renderProjectNav();

            this.config.projects.length == 1 && this.$projects_nav.find('li:first > a:first').trigger('click');

            loader.hide();
            $('#MapContainer').append('<div class=" anchorBL" style="height: 32px; position: absolute; z-index: 30;display:block; bottom: 0px; right: auto; top: auto; left: 1px;"><img style="border:none;height:32px" src="http://www.talkingdata.com/images/logo-zh_cn.png"></div>')
        },
        capture: function(){
            if( this.rectangleSelect.isShow() ){
                this.rectangleSelect.hide();
            } else {
                this.rectangleSelect.show();
            }
            this._changeCaptureBtnText();
        },
        captureCurrentScreen: function(){
            var self = this;
            var size = this.bMap.getSize();
            var canvas = this.download_canvas;
            var shadow = this.shadow_canvas;
            var bMap = this.bMap;
            var opacity = this._heatMapOpacity;

            //小于1024可直接保存
            if( size.width <= this.MAX_BMAP_SIZE && size.height <= this.MAX_BMAP_SIZE ){
                canvas.clear().setSize(size.width, size.height);
                return this._getCurrentBMapImage().then(function(img){
                    canvas.ctx.drawImage(img, 0, 0);
                    canvas.ctx.globalAlpha = opacity/100;
                    canvas.ctx.drawImage(self.heatmap_canvas.el, 0, 0);
                    canvas.ctx.globalAlpha = 1;
                    canvas.el.toBlob(function(blob){
                        saveAs(blob, 'heatmap.png');
                    },'image/png');
                });
            } else {
                shadow.clear().setSize(size.width, size.height);
                canvas.clear().setSize(size.width, size.height);
                shadow.ctx.drawImage(self.heatmap_canvas.el, 0, 0);

                var x_count = Math.floor(size.width / 800);
                var y_count = Math.floor(size.height / 500);
                var x_index = 0;
                var y_index = 0;
                var isXEdge = x_count == 0;
                var isYEdge = y_count == 0;
                var pan_options = {
                    noAnimation: false
                };

                this._fixedMapWrap(true);

                function check(){
                    if( x_index < x_count ) {
                        isXEdge = false;
                        x_index++;
                    } else {
                        isXEdge = true;
                        x_index = 0;
                        if( y_index < y_count ) {
                            y_index++;
                            isYEdge = false;
                        } else {
                            isYEdge = true;
                        }
                    }
                }

                function moveMap(isFirst){
                    return new Promise(function(resolve){

                        if(isFirst){
                            //必须重新获取起始点才准确
                            resolve(false);
                            return;
                        }

                        check();

                        if( isXEdge && isYEdge ){
                            resolve(true);
                            return;
                        }
                        if( !isXEdge ){
                            bMap.panBy(-800, 0, pan_options);
                        } else {
                            bMap.panBy(x_count*800, -500, pan_options);
                        }

                        core.delay(function(){
                            resolve(false);
                        }, 500);
                    })
                }

                function draw(){
                    return self._getCurrentBMapImage().then(function(img){
                        canvas.ctx.drawImage(img, x_index*800, y_index*500);
                    })
                }

                function next(isFirst){
                    return moveMap(isFirst).then(function(isEnd){
                        if( !isEnd ){
                            return draw().then(function(){
                                return next();
                            })
                        }
                    })
                }

                loader.setText('请稍等..').show();

                core.delay(function(){
                    next(true).then(function(){
                        self._fixedMapWrap(false);
                        bMap.panBy(x_count*800, y_count*500, pan_options);
                        loader.hide();
                        canvas.ctx.globalAlpha = opacity/100;
                        canvas.ctx.drawImage(shadow.el, 0, 0);
                        canvas.ctx.globalAlpha = 1;
                        canvas.el.toBlob(function(blob){
                            saveAs(blob, 'heatmap.png');
                        }, 'image/png');
                    });
                }, 100)
            }
        },
        _updateSize: function(){
            var rectangle = this.rectangleSelect;
            var pixels = rectangle.getPixels();
            var points = this._pixelsToPoints(pixels);

            var select_to_size = this._getCurrentLngLatPixel(points);
            var w = select_to_size.width;
            var h = select_to_size.height;
            var text = '';

            if( w >= this.SELECTION_MIN_SIZE && h >= this.SELECTION_MIN_SIZE &&
                w <= this.SELECTION_MAX_SIZE && h <= this.SELECTION_MAX_SIZE
            ){
                rectangle.errorSize(false);
            } else {
                rectangle.errorSize(true);
            }

            rectangle.updateSize(select_to_size, text);
        },
        _pixelsToPoints: function(pixels){
            var points = {};

            for(var i in pixels){
                points[i] = this.bMap.pixelToPoint(new BMap.Pixel(pixels[i].x, pixels[i].y))
            }

            return points;
        },
        _getCurrentLngLatPixel: function(points, isRealTime ){

            var o = this.RATIO;

            var bounds = this.bMap.getBounds();
            var sw = bounds.getSouthWest();
            var ne = bounds.getNorthEast();
            var size = this.bMap.getSize();

            var deltaLng = Math.abs(sw.lng*o - ne.lng*o)/o;
            var deltaLat = Math.abs(sw.lat*o - ne.lat*o)/o;
            var ratioX = deltaLng/size.width;
            var ratioY = deltaLat/size.height;

            var deltaX = Math.abs(points[1].lng - points[2].lng);
            var deltaY = Math.abs(points[1].lat - points[3].lat);

            //偏差略大，优先使用实时计算
            var width = Math.ceil(deltaX / (isRealTime ? ratioX : this.LNG_PER_PIXEL));
            var height = Math.ceil(deltaY / (isRealTime ? ratioY : this.LAT_PER_PIXEL));

            return {
                width: width,
                height: height
            }
        },
        _showSnapShot: function( show ){
            this.$snap_shot.toggleClass('open', show);
        },
        _fixedMapWrap: function( fixed ){
            this.$map_wrap.toggleClass('fixed', fixed)
        },
        _changeCaptureBtnText: function(){
            if( !this.rectangleSelect.isShow() ){
                this.$btn_capture.text('画区截图');
            } else {
                this.$btn_capture.text('放弃截图');
            }
        },
        _readyToCapture: function( pixels, zoom ){
            var self = this;

            var points = this._pixelsToPoints(pixels);

            this.snapshot_canvas.clear();

            var current_center = this.bMap.getCenter();
            var current_zoom = this.bMap.getZoom();

            this._fixedMapWrap(true);

            loader.setText('正在截取热点地图，请耐心等待并保持窗口可见').show();

            this._showSnapShot(true);
            this._changeCaptureBtnText();

            var size_pre_map = {
                width: 800,
                height: 500
            };

            self._startCapture(points, zoom, size_pre_map).then(function( map_size ){
                self._fixedMapWrap(false);
                self.bMap.centerAndZoom(current_center, current_zoom);
                loader.setText('正在进行裁剪..');
                return self._cutSnap(map_size.width, map_size.height)
            }).then(function(){
                loader.hide();
            }).catch(function(e){
                console.error(e);
                self._showSnapShot(false);
            })
        },
        _startCapture: function(points, zoom, size){
            var self = this;
            //缓存西北角
            this.bMap.setZoom(zoom);
            this.bMap.panTo(points[1]);

            var pan_options = {
                noAnimation: true
            };

            return new Promise(function(resolveFinal){
                var x_index         = 0;
                var y_index         = 0;
                var x_count         = 0;
                var y_count         = 0;
                var isXEdge         = false;
                var isYEdge         = false;
                var last_center     = null;
                var start_center    = null;

                self._isStartCapture = true;

                function draw(x, y){
                    //获取当前地图截图
                    var dx = x*size.width;
                    var dy = y*size.height;
                    last_center = self.bMap.getCenter();
                    return self._getBMapImage(last_center, size, zoom, false).then(function(img){
                        self.snapshot_canvas.ctx.drawImage(img, dx, dy, size.width, size.height);
                    }).then(function(){
                        //获取当前热点图覆盖在地图上
                        //TODO 解决热点图边界问题
                        self._combineWithHeatmap(dx, dy);
                    });
                }

                function checkXY(){

                    if( (x_count > 0 && x_index < x_count) || last_center.lng < points[2].lng ){
                        x_index++;
                        isXEdge = false;
                    } else {
                        isXEdge = true;
                        if( x_count == 0 ){
                            x_count = x_index;
                        }
                        x_index = 0;

                        if( last_center.lat < points[4].lat ){
                            if( y_count == 0 ){
                                y_count = y_index;
                            }
                            isYEdge = true;
                        } else {
                            y_index++;
                            isYEdge = false;
                        }
                    }
                }

                function moveMap( isFirst ){

                    return new Promise(function(resolve){

                        if( isFirst ){
                            //必须重新获取起始点才准确
                            start_center = self.bMap.getCenter();
                            resolve(false);
                            return;
                        }

                        checkXY();

                        if( isXEdge && isYEdge ){
                            self._isStartCapture = false;
                            resolve({
                                width: (x_count+1) * size.width,
                                height: (y_count+1) * size.height
                            });
                        } else {
                            if( !isXEdge ){
                                self.bMap.panBy(-size.width, 0, pan_options);
                            } else if( isXEdge ) {
                                self.bMap.setCenter(start_center);
                                self.bMap.panBy(0, -size.height * y_index, pan_options);
                            }

                            core.delay(function(){
                                resolve(false);
                            }, 100);
                        }
                    });
                }

                function next(isFirst){
                    return moveMap(isFirst).then(function( isEnd ){
                        if( !isEnd ){
                            return draw(x_index, y_index).then(function(){
                                return next();
                            })
                        } else {
                            resolveFinal(isEnd);
                        }
                    });
                }

                //修改地图尺寸后立即获取当前静态图会有误差，延迟获取可以解决问题
                core.delay(function(){
                    next(true);
                }, 300)
            });
        },
        _cutSnap: function(x, y){
            var self = this;
            return new Promise(function(resolve){
                var isVertical = y > x;
                var min = Math.min(x, y);
                var max = Math.max(x, y);
                var ratio = min / max;
                var s1 = 500;
                var s2 = 500 * ratio;

                self.download_canvas.clear().setSize(x, y);
                self.download_canvas.ctx.drawImage(self.snapshot_canvas.el, 0, 0);
                self.download_canvas.el.style.width = !isVertical ? s1 : s2 +'px';
                self.download_canvas.el.style.height = isVertical ? s1 : s2 +'px';

                self.$download_input.val(self._currentFullName);
                self.$download_snapshot.addClass('show');
                resolve();
            });
        },
        _getBMapImage: function(center, size, zoom, isRetina){
            return new Promise(function(resolve, reject){
                var api = 'http://api.map.baidu.com/staticimage';
                //var api = 'staticimage.php';

                var url = [
                    api,'?center=',center.lng,',',center.lat,
                    '&width=',size.width,'&height='+size.height,'&zoom=',zoom,
                    '&copyright=1&dpiType=',(isRetina ? 'ph' : 'pl')
                ].join('');

                core.loadImage(url, function(isError){
                    if( !isError ){
                        resolve(this);
                    } else {
                        reject()
                    }
                });
            });
        },
        _getCurrentBMapImage: function(isRetina){
            return this._getBMapImage(this.bMap.getCenter(), this.bMap.getSize(), this.bMap.getZoom(), isRetina);
        },
        _combineWithHeatmap: function(x, y){
            var canvas = this.snapshot_canvas;
            if( !this.heatmap_canvas.el ){
                return Promise.reject('heatmap overlay has not created');
            }
            try{
                canvas.ctx.globalAlpha = this._heatMapOpacity/100;
                canvas.ctx.drawImage(this.heatmap_canvas.el, x || 0, y || 0);
                canvas.ctx.globalAlpha = 1;
                return Promise.resolve();
            }catch(e){
                return Promise.reject(e);
            }
        },
        _closeDownloadSnap: function(){
            this.download_canvas.clear();
            this.snapshot_canvas.clear();
            this._showSnapShot(false);
            this.$download_snapshot.removeClass('show');
        },
        _saveCapture: function(){
            var self = this;
            var value = this.$download_input.val().trim() || this._currentFullName || 'heatmap';
            this.download_canvas.el.toBlob(function(blob){
                saveAs(blob, value+'.png');
                self._closeDownloadSnap();
            }, 'image/png');
        },
        _saveCanvas: function(){

        },
        openNav: function(e){
            var speed = 200;
            var self = this;

            var $anchor = $(e.target);
            var $item = $anchor.parent();
            var $parent_ul = $item.parent();
            var $filter_ul = $anchor.next();

            var last_open = $parent_ul.data('lastOpen');
            var last_active = $parent_ul.data('lastActive') || this._lastActive;
            var sub_last_open = $filter_ul.data('lastOpen');
            var values = [];
            var text = [];

            if( $item.hasClass('has-filter') ){

                if( !$item.hasClass('active') ){
                    // css3 optimize
                    // $ul.css('max-height', $ul[0].scrollHeight);
                    $filter_ul.stop().slideDown(speed);
                    $item.addClass('active');
                    if( last_open ){
                        last_open.li.removeClass('active');
                        last_open.ul.stop().slideUp(speed);
                    }

                    $parent_ul.data('lastOpen', {
                        li: $item,
                        ul: $filter_ul
                    });
                } else{
                    if( last_active ){
                        last_active.removeClass('active');
                        last_active = null;
                    }
                    if( sub_last_open ){
                        sub_last_open.li.removeClass('active');
                        sub_last_open.ul.stop().slideUp(speed);
                        $filter_ul.data('lastOpen', null);
                    }

                    $filter_ul.stop().slideUp(speed);
                    $item.removeClass('active');
                    $parent_ul.data('lastOpen', null);
                }
            } else {
                if( last_active ){
                    last_active.removeClass('active');
                }

                $anchor.parents('li').each(function(){
                    values.unshift(this.dataset['value']);
                    text.unshift(this.dataset['text']);
                });

                $item.addClass('active');
                $parent_ul.data('lastActive',$item);
                this._lastActive = $item;

                this.openHeapMap.apply(this, values);

                self._currentFullName = text.join('-');
            }
        },
        _getFilter: function( key, ctx ){
            if( typeof key == 'string' ){
                return _.find(ctx, function(d){
                    return d.value == key;
                });
            } else if( typeof key == 'number' ){
                return ctx[key];
            }
        },
        //[...filter:string]
        getConfig: function(){
            var filters = [].slice.call(arguments);
            var ctx = this.config.projects;
            var self = this;
            _.each(filters, function(value, i){
                if( i == 0 && value ){
                    ctx = ctx[value];
                } else {
                    ctx = self._getFilter(value, i == 0 ? ctx : ctx.filter );
                }
            });
            return ctx || null;
        },
        renderProjectNav: function(){
            var html = this.tpl_projects(this.config);
            this.$projects_nav.html(html).removeClass('hide');
        },
        getData: function(project, stay, filter){
            var key = getKey(project, stay, filter, this.config.divider);
            var url = this.config.dataUrl + '/' + key;
            return $.ajax({
                url: url,
                dataType: "json",
                crossDomain: true
            });
        },
        toggleShowHeatmap: function( forceShow ){

            if( this._isHeapMapShow && forceShow === true ){
                return;
            }

            this._isHeapMapShow = !this._isHeapMapShow;

            this.$options.toggleClass('disabled', !this._isHeapMapShow);
            //this.heatmap_overlay.toggle();
            this.$btn_capture.toggleClass('disabled', !this._isHeapMapShow);
            this.$btn_show_heatmap.text( (this._isHeapMapShow ? '隐藏' : '显示') + '热力图');
            this.$btn_download.toggleClass('disabled', !this._isHeapMapShow);
            !this._isHeapMapShow && this.rectangleSelect.hide();
            //this.heatmap_overlay[this._isHeapMapShow ? 'show' : 'hide']();
            if(this._isHeapMapShow){
                this.heatmap_canvas.el.style.display = 'block';
            }else{
                this.heatmap_canvas.el.style.display = 'none';
            }
        },
        openHeapMap: function(project, stay, filter){

            var self = this;
            var args = arguments;

            var key = getKey(project, stay, filter);

            if( this._getDataXhr && this._getDataXhr.state() == 'pending' ){
                return Promise.reject();
            }

            this.rectangleSelect.hide();

            if( key in store && !store[key].isError ){
                this.createHeaMap(store[key]);
                return Promise.resolve();
            } else {
                loader.setText('数据加载中..').show();
                var t = core.delay(function(){
                    loader.setText('数据量很大，请耐心等待..');
                }, 10 * 1000);

                this._getDataXhr = this.getData(project, stay, filter).then(function( data ){
                    if(!$.isEmptyObject(data)) {
                        /*layer.msg("热力图数据加载失败...", {
                            icon: 1,
                            time: 3000 //3秒关闭（如果不配置，默认是3秒）
                        });*/
                        var centerCity = data.centerPoint;
                        var totalPoints = data.totalPoints;
                        var totalDevies = data.totalDevices;
                        // var encodeParser = new LocationInfoEncodeUtil();
                        // var points = encodeParser.decodeLine(data.encodeLocations); // decode location info.
                        data.dataArray = data.locations;
                        var config = self.getConfig.apply(self, args);
                        if( !('showCount' in self.config) || !!self.config.showCount !== false ){
                            self.$info.removeClass('hidden');
                            if( typeof self.config.showCount == 'function'){
                                data.deviceCount = self.config.showCount(totalDevies);
                                data.pointCount  = self.config.showCount(totalPoints);
                            }
                        } else {
                            self.$info.addClass('hidden');
                        }
                        store[key] = data;
                        store[key].config = config;
                        self._currentKey = key;
                        self.createHeaMap(store[key]);
                    }
                    clearTimeout(t);
                    loader.hide();
                });
                return this._getDataXhr;
            }
        },
        createHeaMap: function( data ){

            //if( !this.heatmap_overlay ){
            //    this.heatmap_overlay = new BMapLib.HeatmapOverlay({
            //        radius: this.config.radius || 30,
            //        gradient: { 0.25: "rgb(0,0,255)", 0.55: "rgb(0,255,0)", 0.85: "yellow", 1.0: "rgb(255,0,0)"}
            //    });
            //}
            //
            //var point = data.config && data.config.map ? data.config.map.center:
            //            data.centerPoint ? new BMap.Point(data.centerPoint.lng, data.centerPoint.lat):
            //            this.config.map.center;
            //
            //var level = data.config.map ? data.config.map.level : this.config.map.level || this.defaultLevel;
            //
            //var max = data.config.max || data.max || this.config.max || this.defaultMax;
            //
            //this.$max_input.val(max);
            //
            //this.$device_count.text(data.deviceCount);
            //this.$point_count.text(data.pointCount);
            //
            //this.bMap.centerAndZoom(point, level);
            //this.bMap.addOverlay(this.heatmap_overlay);
            //
            //
            //this.heatmap_overlay.setDataSet({
            //    data: data.dataArray,
            //    max: max
            //});
            //
            //if( !this.heatmap_canvas ){
            //    this.heatmap_canvas = new CanvasView({
            //        el: $('.heatmap-canvas')
            //    });
            //    this.$btn_show_heatmap.removeClass('disabled');
            //    this.setOpacityValue();
            //}
            // var point = data.config && data.config.map ? data.config.map.center:
                // data.centerPoint ? new BMap.Point(data.centerPoint.lng, data.centerPoint.lat):
                    // this.config.map.center;
            var point = data.centerPoint ? data.centerPoint : data.config.map.center;
            var level = data.config.map ? data.config.map.level : this.config.map.level || this.defaultLevel;

            var max = data.config.max || data.max || this.config.max || this.defaultMax;
            if( !this.heatmap_overlay ){
                this.heatmap_overlay = new  Mapv({
                    drawTypeControl: true,
                    map: this.bMap  // 百度地图的map实例
                });
                this.layer = new Mapv.Layer({
                    zIndex: 1,
                    mapv: this.heatmap_overlay,
                    dataType: 'point',
                    coordType: 'bd09mc',
                    data: data.dataArray,
                    drawType: 'heatmap',
                    drawOptions: { // 绘制参数
                        blur: true, // 是否有模糊效果
                        unit: 'px', // 单位,px:像素(默认),m:米
                        max: max, // 设置显示的权重最大值
                        type: 'circle', // 点形状,可选circle:圆形(默认),rect:矩形
                        size: this.config.radius || 20, // 半径大小
                        maxOpacity: 1,
                        gradient: { // 显示的颜色渐变范围
                            '0': 'blue',
                            '0.25': 'cyan',
                            '0.55': 'lime',
                            '0.85': 'yellow',
                            '1.0': 'red'
                        }
                    }
                });
            }

            this.$max_input.val(max);
            this.$device_count.text(data.deviceCount);
            this.$point_count.text(data.pointCount);

            this.bMap.centerAndZoom(point, level);
            this.layer.setData(data.dataArray);
            this.layer.data_changed(data.dataArray);
            if( !this.heatmap_canvas ){
                this.heatmap_canvas = new CanvasView({
                    el: $('.heatmap-canvas')
                });
                this.$btn_show_heatmap.removeClass('disabled');
                this.setOpacityValue();
            }
            this.toggleShowHeatmap(true);
        },
        setCaptureName: function(e){
            if(e && e.type =='keyup' && e.which !=13 ){
                return;
            }
            this._saveCapture();
        },
        setMaxValue: function(e){
            if(e && e.type == 'keyup' && e.which != 13){
                return;
            }
            var value = this.$max_input.val().trim();
            if( value && /\d+/.test(value) && value > 0 ){
                //this.heatmap_overlay.heatmap.setDataMax(value);
                this.layer.set('drawOptions',{ // 绘制参数
                    blur: true, // 是否有模糊效果
                    unit: 'px', // 单位,px:像素(默认),m:米
                    max: value, // 设置显示的权重最大值
                    type: 'circle', // 点形状,可选circle:圆形(默认),rect:矩形
                    size: this.$radius_input.val().trim(), // 半径大小
                    maxOpacity: 1,
                    gradient: { // 显示的颜色渐变范围
                        '0': 'blue',
                        '0.25': 'cyan',
                        '0.55': 'lime',
                        '0.85': 'yellow',
                        '1.0': 'red'
                    }
                });
            } else {
                tips(this.$max_input, '请输入大于0的数字', 'error');
            }
        },
        setRadiusValue: function(e){
            if(e && e.type == 'keyup' && e.which != 13){
                return;
            }
            var value = this.$radius_input.val().trim();
            if( value && /\d+/.test(value) && value > 0 ){
                //this.heatmap_overlay.setOptions({
                //    radius: value
                //})
                this.layer.set('drawOptions',{ // 绘制参数
                    blur: true, // 是否有模糊效果
                    unit: 'px', // 单位,px:像素(默认),m:米
                    max: this.$max_input.val().trim(), // 设置显示的权重最大值
                    type: 'circle', // 点形状,可选circle:圆形(默认),rect:矩形
                    size: value, // 半径大小
                    maxOpacity: 1,
                    gradient: { // 显示的颜色渐变范围
                        '0': 'blue',
                        '0.25': 'cyan',
                        '0.55': 'lime',
                        '0.85': 'yellow',
                        '1.0': 'red'
                    }
                });
            } else {
                tips(this.$radius_input, '请输入大于0的数字', 'error');
            }
        },
        setOpacityValue: function(e){
            if(e && e.type == 'keyup' && e.which != 13){
                return;
            }
            var value = this.$opacity_input.val().trim();
            if( value && /\d+/.test(value) && value > 0 && value <=100 ){
                this.heatmap_canvas.$el.css({
                    opacity: value/100
                });
            } else {
                tips(this.$opacity_input, '只能输入1到100之间的数字', 'error');
            }
        }
    });
    
    /**
     * LocationInfoEncodeUtil Using to encode or decode LocationInfo
     * LocationInfo contains three meta data : latitude,longtitude,count . 
     */
    function LocationInfoEncodeUtil(){
        // Encode a signed number in the encode format.
        this.encodeSignedNumber = function(num){
              var sgn_num = num << 1;
              if (num < 0) {
                sgn_num = ~(sgn_num);
              }
              return(this.encodeNumber(sgn_num));
        };
        
        // Encode an unsigned number in the encode format.
        this.encodeNumber = function(num){
              var encodeString = "";
              while (num >= 0x20) {
                encodeString += (String.fromCharCode((0x20 | (num & 0x1f)) + 63));
                num >>= 5;
              }
              encodeString += (String.fromCharCode(num + 63));
              return encodeString;
        }; 
        
        // Create the encoded bounds.
        this.createEncodings = function(points){
              var i = 0;
              var plat = 0;
              var plng = 0;
              var pcount = 0;
              var encoded_points = "";
             
              for(i = 0; i < points.length; ++i) {
                var point = points[i];
                var lat = point.latitude;
                var lng = point.longitude;
                var count = point.count;
             
                var late5 = Math.floor(lat * 1e5);
                var lnge5 = Math.floor(lng * 1e5);
                var dlat = late5 - plat;
                var dlng = lnge5 - plng;
                var dcount = count - pcount;
                plat = late5;
                plng = lnge5;
                pcount = count;
                encoded_points += this.encodeSignedNumber(dlng) + this.encodeSignedNumber(dlat) + this.encodeSignedNumber(dcount);
              } 
              return encoded_points;    
       };
       
       // Decode an encoded string into a list of VE lng/lat/count.
       this.decodeLine = function(encoded) {
            var len = encoded.length;
            var index = 0;
            var array = [];
            var lat = 0;
            var lng = 0;
            var count = 0;
            try
            {
                while (index < len) {
                    var lngData = this.rebuildData(encoded,index); //longtitude
                    lng += lngData.result;
                    index = lngData.index;
                    var latData = this.rebuildData(encoded,index); //latitude
                    lat += latData.result;
                    index = latData.index;
                    var countData = this.rebuildData(encoded,index); //count
                    count += countData.result;
                    index = countData.index;
                    array.push({"lng":(lng * 1e-5),"lat":(lat * 1e-5),"count":count});
                }
            } catch(ex)
            {
                //error in encoding.
                console.log(ex);
            }
            return array;
       };
       
       this.rebuildData = function(encodeStr,index) {
            var b;
            var shift = 0;
            var result = 0;
            do {
                  b = encodeStr.charCodeAt(index++) - 63;
                  result |= (b & 0x1f) << shift;
                  shift += 5;
            } while (b >= 0x20);
            var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            return {"index":index,"result":dlat};
       };
    }
   
    var projectTypes = [
            {
                id:0,
                name:'全部人群'
            },{
                id:1,
                name:'周末生活轨迹:休息'
            },{
                id:2,
                name:'周末生活轨迹:休闲消费'
            },{
                id:3,
                name:'周末生活轨迹:夜生活'
            },{
                id:4,
                name:'周末消费地：10点->16点'
            },{
                id:5,
                name:'工作日轨迹:休息'
            },{
                id:6,
                name:'工作日轨迹:上班前'
            },{
                id:7,
                name:'工作日轨迹:上午'
            },{
                id:8,
                name:'工作日轨迹:午餐'
            },{
                id:9,
                name:'工作日轨迹:下午'
            },{
                id:10,
                name:'工作日轨迹:晚餐'
            },{
                id:11,
                name:'工作日轨迹:饭后'
            },{
                id:12,
                name:'居住地:22点->6点'
            },{
                id:13,
                name:'工作地:10点->16点'
            }];
        
      function buildProjects(force_map){
          var projects = [];
          for(index in projectTypes) {
             projects.push({
                        value: projectTypes[index].id,
                        map: force_map,
                        text: projectTypes[index].name,
                        max: 10
                    }); 
          }
         return projects;
     };
     
     return function(params) {
             var force_map = {
                    center: '北京市',
                    level: 12
                };
             var projects = buildProjects(force_map);
             var PROJECT_CONFIG = {
                name: params.project,
                id:   params.projectId,
                map: force_map,
                showCount: function( c ){
                    return c;
                },
                projects: [{
                    text: params.project,
                    value:0,
                    filter: projects
                  }]
                };
            window.PROJECT_CONFIG = PROJECT_CONFIG;
            var config = window['PROJECT_CONFIG'];
            config.dataUrl = (config.dataUrl || (params.url+params.projectId));
            return config && new App(config);
    };
});
