/**
 * Created by Yinxiong on 15/9/21.
 */

define(['core', 'jquery', 'bluebird', 'ui/tips', 'underscore'], function(core, $, Promise, tips, _){

    //TODO canvas
    var RectangleSelect = core.Class.extend({
        _dragging: false,
        _dragPoint: { x: 0, y: 0 },
        _selecting: false,
        _isShow: false,
        _isError: true,
        _containerOffset: { x: 0, y: 0, width: 0, height: 0 },
        _confirmBox: { width: 0, height: 0 },
        _sizeBox: { width: 0, height: 0 },
        startPoint: null,
        _points: {
            1: { x : 0, y : 0 },
            2: { x : 0, y : 0 }
        },
        ZOOM_MAX: 19,
        zoom_min: 1,
        pixels: {},
        init: function(container, options){
            var self = this;

            if( !container ){
                throw 'container must be set';
                return;
            }
            this.$container     = $(container);
            this.$overlay       = $(RectangleSelect.template);
            this.$selection     = this.$overlay.find('.rectangle-select-handle');
            this.$confirm       = this.$overlay.find('.rectangle-select-confirm');
            this.$hope_max      = this.$overlay.find('.hope-max');
            this.$confirm_btn   = this.$confirm.find('button');
            this.$size          = this.$overlay.find('.rectangle-select-size');
            this.selection = this.$selection[0];
            this.options = $.extend({
                classStyle: '',
                onClose: $.noop,
                onStart: $.noop,
                onStop: $.noop,
                onShow: $.noop,
                onMove: $.noop,
                cursorOffset: 3,
                onConfirm: $.noop
            }, options);

            if( this.$container.css('position') == 'static' ){
                this.$container.css({
                    position: 'relative'
                });
            }

            this.$container.append(this.$overlay);

            this.$overlay.on('dblclick', function(e){
                if(e.target == self.$overlay[0]){
                    self.hide();
                }
            }).on('mousedown.rectangleSelect',function(e){
                if( !self._selecting && e.target == self.$overlay[0] ){
                    self._selecting = true;
                    self._dragging = false;
                    self.reset();
                    self._hideConfirm();
                    self._getContainerOffset();
                    self.startPoint = {
                        x: e.offsetX,
                        y: e.offsetY
                    };
                    self._points[1] = {
                        x: e.clientX - self._containerOffset.x,
                        y: e.clientY - self._containerOffset.y
                    };
                    self.$selection.css('opacity', 1);
                    self.options.onStart.call(self)
                }
            }).on('mousemove.rectangleSelect', function(e){
                if( self._selecting && !self._dragging ){
                    self._points[2] = {
                        x: e.clientX - self._containerOffset.x,
                        y: e.clientY - self._containerOffset.y
                    };
                    self.move();
                    self._getCurrentPoints();
                    self.options.onMove.call(self, self.pixels);
                }
            }).on('mouseup.rectangleSelect', function(e){
                if( self._selecting ){
                    if( self.startPoint && self.startPoint.x == e.offsetX && self.startPoint.y == e.offsetY ){
                        self._selecting = false;
                        self.$size.hide();
                        self.reset();
                    } else {
                        self._stopSelect();
                        self._showConfirm();
                    }
                }
            });

            //TODO 检测大小区别
            //core.xresize(function(){
            //    self._isShow && self.points[4] && self._fixSelection();
            //});

            this.$hope_max.click(function(){
                tips(this, '地图将会缩放到此级别进行截图', {
                    classStyle: 'tips',
                    stayTime: 2000
                })
            }).on('keyup', function(e){
                if( e.which == 13 ){
                    self._confirm();
                }
            });

            this.$confirm.find('button').click(function(e){
                self._confirm();
            });

            this.$selection.on('dblclick.rectangleSelect', function(e){
                self._confirm();
            }).on('mousedown.rectangleSelect', function(e){
                self._dragging = true;
                self._dragPoint = {
                    x: e.offsetX,
                    y: e.offsetY
                };
                self._getContainerOffset();
                e.stopPropagation();
            }).on('mousemove.rectangleSelect', function(e){
                if( self._dragging ){
                    var left = e.clientX - self._dragPoint.x - self._containerOffset.x;
                    var top = e.clientY - self._dragPoint.y - self._containerOffset.y;
                    left = left < 0 ? 0 : (left+self._points.width) >=self._containerOffset.width ? self._containerOffset.width-self._points.width : left;
                    top = top < 0 ? 0 : (top+self._points.height) >=self._containerOffset.height ? self._containerOffset.height-self._points.height : top;
                    self.$selection.css({
                        left: left,
                        top: top
                    });
                    self._moveSize(left, top);
                    self._hideConfirm();
                    e.stopPropagation();
                }
            }).on('mouseup.rectangleSelect', function(e){
                self._getCurrentPoints();
                if( self._selecting ){
                    self._stopSelect();
                    self._showConfirm();
                    return;
                }
                if( self._dragging ){
                    self._showConfirm();
                }
                self._dragging = false;
                e.stopPropagation();
            }).on('mouseout.rectangleSelect', function(e){
                if( self._dragging ){
                    self._dragging = false;
                }
            })
        },
        errorSize: function( isError ){
            if( isError && this.$selection.is(':visible') && !this.$selection.hasClass('error')){
                this.$selection.addClass('error');
                this._isError = true;
            } else if( !isError && this.$selection.is(':visible') && this.$selection.hasClass('error') ){
                this.$selection.removeClass('error');
                this._isError = false;
            }
        },
        setZoomMin: function(min){
            this.zoom_min = Math.min(min+2, 19);
            this.$hope_max.val( this.zoom_min );
        },
        _checkZoom: function(){
            var value = this.$hope_max.val().trim();
            if( value && /\d+/.test(value) && value >= this.zoom_min && value <= this.ZOOM_MAX ){
                return true;
            } else {
                tips(this.$hope_max, '请输入'+this.zoom_min+'~19的数字', 'error');
            }
            return false;
        },
        _confirm: function(){

            if( this._isError ){
                console.log('error');
                return;
            }

            var value = this.$hope_max.val().trim();

            if( this._checkZoom() ){
                var r = this.options.onConfirm.call(this, this.pixels, parseInt(value));
                if( !r ){
                    this.hide()
                }
            }
        },
        _showConfirm: function(){

            if( this._isError ){
                return;
            }

            if( this._confirmBox.width == 0 ){
                this._confirmBox = {
                    width: this.$confirm.outerWidth(),
                    height: this.$confirm.outerHeight()
                };
            }

            this.$confirm.css({
                left: this.pixels[4].x - this._confirmBox.width,
                top: this.pixels[4].y
            }).show();

            this.$hope_max.focus();

        },
        _hideConfirm: function(){
            this.$confirm.hide();
        },
        _stopSelect: function(){
            this._selecting = false;
            this._getCurrentPoints();
            this.options.onStop.call(this, this.pixels);
        },
        _fixSelection: function(){
            this._getContainerOffset();

            if( this._containerOffset.width < this.pixels[2].x ){
                this.$selection.css({
                    width: this._containerOffset.width - this.pixels[1].x
                })
            }
            if( this._containerOffset.height < this.pixels[3].y ){
                this.$selection.css({
                    height: this._containerOffset.height - this.pixels[1].y
                })
            }

            this._showConfirm();
            this._getContainerOffset();
        },
        updateSize: function( size, text ){
            this.$size[0].textContent = ( size.width +' x ' + size.height +'像素 ') + text
        },
        move: function(){
            var p3 = {
                x: Math.min(this._points[1].x, this._points[2].x),
                y: Math.min(this._points[1].y, this._points[2].y)
            };

            var p4 = {
                x: Math.max(this._points[1].x, this._points[2].x),
                y: Math.max(this._points[1].y, this._points[2].y)
            };

            var w = p4.x - p3.x - this.options.cursorOffset;
            var h = p4.y - p3.y - this.options.cursorOffset;

            this._points.width = w;
            this._points.height = h;

            this.$selection.css({
                left: p3.x - this.options.cursorOffset,
                top: p3.y - this.options.cursorOffset,
                width: w,
                height: h
            });

            this._moveSize(p3.x, p3.y);
        },
        _moveSize: function(left, top){
            this.$size.css({
                left: left,
                top: top
            }).show();
        },
        show: function(){
            this._isShow = true;
            this.$overlay.show();
        },
        hide: function(){
            if( this._isShow ){
                this._isShow = false;
                this.$overlay.hide();
                this.options.onClose.call(this);
                this.reset();
            }
            return this;
        },
        reset: function(){
            this.$selection.css({
                opacity: 0,
                left: 0,
                top: 0,
                width: 0,
                height: 0
            });
            this._hideConfirm();
            this.$size.hide().text('');
            this.pixels = {};
            this._points = {};
            return this;
        },
        isShow: function(){
            return this._isShow;
        },
        hasSelection: function(){
            return this.isShow() && '4' in this.pixels;
        },
        getPixels: function(){
            return this.pixels;
        },
        _getContainerOffset: function(){
            var offset = this.$container.offset();
            this._containerOffset = {
                x: offset.left,
                y: offset.top,
                width: this.$container.width(),
                height: this.$container.height()
            }
        },
        _getCurrentPoints: function(){
            var left = parseFloat(this.$selection.css('left'));
            var top = parseFloat(this.$selection.css('top'));
            var w = this.$selection.outerWidth();
            var h = this.$selection.outerHeight();

            this.pixels = {
                width: w,
                height: h,
                1: {
                    x: left,
                    y: top
                },
                2: {
                    x: left + w,
                    y: top
                },
                3: {
                    x: left,
                    y: top + h
                },
                4: {
                    x: left + w,
                    y: top + h
                }
            };
        }
    }, {
        template: [
            '<div class="rectangle-select-overlay">',
                '<div class="rectangle-select-size"></div>',
                '<div class="rectangle-select-handle"></div>',
                '<div class="rectangle-select-confirm">',
                    '<label>地图缩放到:</label>',
                    '<input type="text" class="hope-max" />',
                    '<button>截屏</button>',
                '</div>',
            '</div>'
        ].join('')
    });

    return RectangleSelect
});