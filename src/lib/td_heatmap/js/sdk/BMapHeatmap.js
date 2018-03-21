define(['BMap', 'heatmap'], function(BMap, h337){

    /*==============================以下部分为专为百度地图打造的覆盖物===================================================*/
    /**
     * @fileoverview 百度地图的热力图功能,对外开放。
     * 主要基于http://www.patrick-wied.at/static/heatmapjs/index.html 修改而得

     * 主入口类是<a href="symbols/BMapLib.Heatmap.html">Heatmap</a>，
     * 基于Baidu Map API 2.0。
     *
     * @author Baidu Map Api Group
     * @version 1.0
     */

    /**
     * @namespace BMap的所有library类均放在BMapLib命名空间下
     */
    var BMapLib = window.BMapLib = BMapLib || {};

    /**
     * 热力图的覆盖物
     * @class 热力图的覆盖物
     * 实例化该类后，使用map.addOverlay即可以添加热力图
     *
     * @constructor
     * @param {Json Object} opts 可选的输入参数，非必填项。可输入选项包括：<br />
     * {"<b>radius</b>" : {String} 热力图的半径,
     * <br />"<b>visible</b>" : {Number} 热力图是否显示,
     * <br />"<b>gradient</b>" : {JSON} 热力图的渐变区间,
     * <br />"<b>opacity</b>" : {Number} 热力的透明度,
     *
     * @example <b>参考示例：</b><br />
     * var map = new BMap.Map("container");<br />map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);<br />var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":10, "visible":true, "opacity":70});<br />heatmapOverlay.setDataSet(data);//data是热力图的详细数据
     */

    /**
     * @exports HeatmapOverlay as BMapLib.HeatmapOverlay
     */

    var HeatmapOverlay  = BMapLib.HeatmapOverlay =  function(opts) {
        this.conf = opts;
        this.conf.visible = opts.visible === undefined ? true : opts.visible;
        this.heatmap = null;
        this.latlngs = [];
        this.bounds = null;
    };

    HeatmapOverlay.prototype = new BMap.Overlay();

    HeatmapOverlay.prototype.initialize = function(map) {

        this._map = map;
        var el = document.createElement("div");
        el.style.position = "absolute";
        el.style.top = 0;
        el.style.left = 0;
        el.style.border = 0;
        el.style.width = this._map.getSize().width + "px";
        el.style.height = this._map.getSize().height + "px";

        this.conf.element = el;
        //for origin heatmap.js
        this.conf.container = this.conf.element;


        if(!isSupportCanvas()){//判断是否支持Canvas.
            return el;
        }
        map.getPanes().mapPane.appendChild(el);
        this.conf.valueField = this.conf.valueField || "count";
        this.heatmap = h337.create(this.conf);

        var that  = this;
        map.addEventListener('resize', function(e){
            var size = e.size;
            el.style.width = size.width + "px";
            el.style.height = size.height + "px";
            that.heatmap._renderer.setDimensions(size.width, size.height);
            that.draw();
        });

        this._div = el;
        return el;
    };

    HeatmapOverlay.prototype.draw = function() {
        if(!isSupportCanvas()){//判断是否支持Canvas.
            return ;
        }
        var currentBounds = this._map.getBounds();

        if (currentBounds.equals(this.bounds)) {
            return;
        }
        this.bounds = currentBounds;

        var ne = this._map.pointToOverlayPixel(currentBounds.getNorthEast()),
            sw = this._map.pointToOverlayPixel(currentBounds.getSouthWest()),
            topY = ne.y,
            leftX = sw.x,
            h = sw.y - ne.y,
            w = ne.x - sw.x;

        this.conf.element.style.left = leftX + 'px';
        this.conf.element.style.top = topY + 'px';
        this.conf.element.style.width = w + 'px';
        this.conf.element.style.height = h + 'px';
        //this.heatmap.store.get("heatmap").resize();

        if (this.latlngs.length > 0) {
            this.heatmap.removeData();

            var len = this.latlngs.length;
            d = {
                max: this.heatmap._store.getData().max,
                data: []
            };

            while (len--) {
                var latlng = this.latlngs[len].latlng;

                if (!currentBounds.containsPoint(latlng)) {
                    continue;
                }

                var divPixel = this._map.pointToOverlayPixel(latlng),
                    leftX = this._map.pointToOverlayPixel(currentBounds.getSouthWest()).x,
                    topY = this._map.pointToOverlayPixel(currentBounds.getNorthEast()).y,
                    screenPixel = new BMap.Pixel(divPixel.x - leftX, divPixel.y - topY);
                var roundedPoint = this.pixelTransform(screenPixel);
                d.data.push({
                    x: roundedPoint.x,
                    y: roundedPoint.y,
                    count: this.latlngs[len].c
                });
            }

            if (this.conf.radiusChangeByZoom) {
                this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom());
            }
            this.heatmap.setData(d);
        }
    }


    //内部使用的坐标转化
    HeatmapOverlay.prototype.pixelTransform = function(p) {
        var w = this.heatmap.width,
            h = this.heatmap.height;

        while (p.x < 0) {
            p.x += w;
        }

        while (p.x > w) {
            p.x -= w;
        }

        while (p.y < 0) {
            p.y += h;
        }

        while (p.y > h) {
            p.y -= h;
        }

        p.x = (p.x >> 0);
        p.y = (p.y >> 0);

        return p;
    };

    /**
     * 设置热力图展现的详细数据, 实现之后,即可以立刻展现
     * @param {Json Object } data
     * {"<b>max</b>" : {Number} 权重的最大值,
     * <br />"<b>data</b>" : {Array} 坐标详细数据,格式如下 <br/>
     * {"lng":116.421969,"lat":39.913527,"count":3}, 其中<br/>
     * lng lat分别为经纬度, count权重值
     */
    HeatmapOverlay.prototype.setDataSet = function(data) {
        this.data = data;
        if(!isSupportCanvas()){//判断是否支持Canvas.
            return ;
        }
        var currentBounds = this._map.getBounds();
        var mapdata = {
            max: data.max,
            data: []
        };
        var d = data.data,
            dlen = d.length;


        this.latlngs = [];
        this.heatmap.removeData();

        if (this.conf.radiusChangeByZoom) {
            this.heatmap._store._cfgRadius = this.conf.radiusChangeByZoom(this._map.getZoom());
        }

        while (dlen--) {
            var latlng = new BMap.Point(d[dlen].lng, d[dlen].lat);
            this.latlngs.push({
                latlng: latlng,
                c: d[dlen].count
            });

            if (!currentBounds.containsPoint(latlng)) {
                continue;
            }

            var divPixel = this._map.pointToOverlayPixel(latlng),
                leftX = this._map.pointToOverlayPixel(currentBounds.getSouthWest()).x,
                topY = this._map.pointToOverlayPixel(currentBounds.getNorthEast()).y,
                screenPixel = new BMap.Pixel(divPixel.x - leftX, divPixel.y - topY);
            var point = this.pixelTransform(screenPixel);

            mapdata.data.push({
                x: point.x,
                y: point.y,
                count: d[dlen].count
            });
        }
        this.heatmap.setData(mapdata);
    };

    /**
     * 添加热力图的详细坐标点
     * @param {Number} lng 经度坐标
     * @param {Number} lat 纬度坐标
     * @param {Number} count 权重
     */
    HeatmapOverlay.prototype.addDataPoint = function(lng, lat, count) {

        if(!isSupportCanvas()){
            return ;
        }
        if(this.data && this.data.data){
            this.data.data.push({
                lng:lng,
                lat:lat,
                count:count
            });
        }

        var latlng = new BMap.Point(lng, lat),
            point = this.pixelTransform(this._map.pointToOverlayPixel(latlng));

        this.heatmap.store.addDataPoint(point.x, point.y, count);
        this.latlngs.push({
            latlng: latlng,
            c: count
        });
    };

    /**
     * 更改热力图的展现或者关闭
     */

    HeatmapOverlay.prototype.toggle = function() {
        if(!isSupportCanvas()){//判断是否支持Canvas.
            return ;
        }
        if (this.conf.visible === true) {
            this.conf.visible = false;
        } else {
            this.conf.visible = true;
        }
        if (this.conf.visible) {
            this.conf.element.style.display = "block";
        } else {
            this.conf.element.style.display = "none";
        }
    };
    /**
     * 设置热力图展现的配置
     * @param {Json Object} options 可选的输入参数，非必填项。可输入选项包括：<br />
     * {"<b>radius</b>" : {String} 热力图的半径,
     * <br />"<b>visible</b>" : {Number} 热力图是否显示,
     * <br />"<b>gradient</b>" : {JSON} 热力图的渐变区间,
     * <br />"<b>opacity</b>" : {Number} 热力的透明度,}
     */
    HeatmapOverlay.prototype.setOptions = function(options){
        if(!isSupportCanvas()){//判断是否支持Canvas.
            return ;
        }
        for(var key in options){
            if(key == "radius"){
                this.heatmap._store._cfgRadius = options[key];
            }
            if( key == 'opacity'){
                options[key] = options[key] / 100;
            }
        }
        this.heatmap.configure(options);
        if(this.data){
            this.setDataSet(this.data);//重新渲染
        }
    };


    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

    return HeatmapOverlay
});