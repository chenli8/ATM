/**
 * Created by Yinxiong on 15/9/16.
 */

define(['core', 'underscore', 'BMap'], function(core, _){

    return function(elem, options){
        if( !elem ){
            return ;
        }
        options = _.extend({
            center: '北京',
            level: 14,
            enableContinuousZoom: true,
            enableScrollWheelZoom: true,
            ScaleControl: {
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT
            },
            NavigationControl: {
                anchor: BMAP_ANCHOR_TOP_RIGHT
            }
        }, options);

        var map = new BMap.Map(elem.jquery ? elem[0] : elem);

        //添加比例尺
        options.ScaleControl && map.addControl(new BMap.ScaleControl(options.ScaleControl));

        //添加平移缩放控件
        options.NavigationControl && map.addControl(new BMap.NavigationControl(options.NavigationControl));

        //启用滚轮缩放
        options.enableScrollWheelZoom && map.enableScrollWheelZoom();

        //启用连续缩放
        options.enableContinuousZoom && map.enableContinuousZoom();

        return map;
    };
});