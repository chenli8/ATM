
<template>
    <div style="height:480px;" class="clearfix">
      <div style="float:left;width:80%;height:100%;">
        <div class="map" style="width:100%; height:100%;" :id="id"></div>
      </div>
      <div style="float:right; width:170px;">
        <div class="form-wrapper">
            <Button-group vertical>
              <i-button type="primary" @click="drawArea">新建围栏</i-button>
              <!-- <i-button type="primary" @click="showAreas">显示所有围栏</i-button> -->
              <i-button type="primary" @click="clearAll(drawingManager.overlays)">清除所有围栏</i-button>
              <i-button type="primary" @click="updatePoi">上传所有围栏</i-button>
            </Button-group>
        </div>
        <div class="areas">
          <ul class="clearfix">
            <li class="fl" v-for="item in drawingManager.overlays">
                <i-button type="primary" @click="delArea($index)" icon="close-round">选区{{$index + 1}}</i-button>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
// import {Radio} from 'iview';
// import {dateInfo} from '../../vuex/business-util';
// import datePicker from './datePicker.vue';
import {
       appAaa,
       appPutLocation,
       appPoiFilter,
       appOutPoiFilter,
       appPutPoiFilter,
       ghettoAaa
    } from '../../vuex/actions';

export default {
   vuex: {
        getters: {
          
        },
        actions:{
           appAaa,
           appPutLocation,
           appPoiFilter,
           appOutPoiFilter,
           appPutPoiFilter,
           ghettoAaa
        }
    },
    props: {
        visible: {
            type: Boolean,
            default:false,
        },
        syncshow:{
          type:Number
        },
        id:{
          type:String,
          default:''
        }
        // update: {
        //     type: Function,
        //     default:function(){},
        // },
        // disabled:{
        //     type:Boolean,
        //     default:false
        // },
        // model:{
        //     type:Number,
        // }
    },
    data () {
        return {
            map:null,
            drawingManager:{
                DRAWINGMODELTYPES:'',
                obj:null,
                polygon:'',
                overlays:[],
            },
            styleOptions:{
                strokeColor:"red",    //边线颜色。
                fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
                strokeWeight: 3,       //边线的宽度，以像素为单位。
                strokeOpacity: 0.8,    //边线透明度，取值范围0 - 1。
                fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
                strokeStyle: 'solid' //边线的样式，solid或dashed。
            },
            newArea:[],
            strArr:[],
            allPoi:'',
            path:window.upLoadPath,
            modal:false
        }
    },
   components: {
       
    },
    ready () {
      
    },
    watch:{
      'visible':function(val,oldVal){
        if(val){
          var self=this;
          setTimeout(function(){self.initBDMap()},600);
        }
      },
      path:function(val,oldVal){
        if(val){
          window.upLoadPath = this.path;
        }
      }
    },
    methods: {
      /**
       * 初始化百度地图
       * 实现一个单例
       **/
      initBDMap(){
          var self =this;
          if(this.map){
            this.map.centerAndZoom('中国',5);
            return;
          }
          const point = new BMap.Point(105.403119, 38.028658),size = new BMap.Size(10, 20);
          this.map=new BMap.Map(this.id,{enableMapClick:false});
          this.map.centerAndZoom('中国', 5);
          //开启鼠标滚轮缩放
          self.map.enableScrollWheelZoom(true);
          this.map.addEventListener('load',function(obj){
            self.map.addControl(new BMap.CityListControl({
              anchor: BMAP_ANCHOR_TOP_LEFT,
              offset: size,
            }));
            //this.initDraw();
          });

      },
      /**
       * [初始化绘制工具]
       */
      initDraw(){
          //实例化鼠标绘制工具
          const drawingManager = new BMapLib.DrawingManager(this.map, {
              isOpen: false, //是否开启绘制模式
              enableDrawingTool: false, //是否显示工具栏
              drawingToolOptions: {
                  anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
                  offset: new BMap.Size(5, 5), //偏离值
              },
              polygonOptions: this.styleOptions, //多边形的样式
          });
          //添加鼠标绘制工具监听事件，用于获取绘制结果
          drawingManager.addEventListener('overlaycomplete',(e)=> {
              const polygon = e.overlay;
              let polygonArea = this.getArea(polygon);
              // 围栏面积不能超过180平方km
              if(polygonArea <= 180){
                  this.drawingManager.overlays.push(polygon);
                  this.drawingManager.polygon = polygon;
                  polygon.enableEditing();
                  this.pointsToStr(polygon);
                  polygon.addEventListener('lineupdate', function (e) {
                    this.pointsToStr(this);
                  });
                  this.drawingManager.obj.close();
              }else{
                this.open(true);
                this.clearAll(this.drawingManager.overlays);
              }
          });
          this.drawingManager.obj = drawingManager;
      },
      // 地图上选区画折线图
      drawArea(){
          //this.map.clearOverlays();
          this.initDraw();
          this.drawingManager.obj.open();  
          this.drawingManager.obj.setDrawingMode(BMAP_DRAWING_POLYGON);
      },
      // 清除围栏
      clearAll(overlays){
        this.map.clearOverlays();
        this.drawingManager.overlays = [];
        this.allPoi = '';
        this.strArr = [];
      },
      // 解析经纬度
      pointsToStr(polygon){
        const points = polygon.getPath();
        let p = [];
        for (var i = 0, len = points.length; i < len; i++) {
          p.push(points[i].lng + ',' + points[i].lat +';');
        }
        //首尾一致才闭合
        p.push(points[0].lng + ',' + points[0].lat);
        var poi = '';
            poi += p.join('');
            this.strArr.push(poi);

      },
      // 显示所有围栏
      showAreas(){
        /*this.drawingManager.overlays.forEach((obj,index)=>{
          obj.show();
        });*/
      },
      sendModalState(){
        this.$emit('sendfalse',this.modal);
      },
      // 上传围栏
      updatePoi(){
        this.allPoi += this.strArr.join(':');
        let url = process.env.NODE_ENV.apiPath+'fileTransferManager/uploadFence';
        if(this.allPoi === ''){
            this.$Notice.warning({
                title: '请选择围栏',
            });
            return false;
        }else{
            this.$http.post(url,{
                basePath:this.path,
                points:this.allPoi
            },{
                emulateJSON: true
            }).then(res =>{ 
                if(!res.body.resultCode){
                    this.$Notice.success({
                        title: '上传围栏成功',
                    });
                    window.allPath = res.body.resultValue;
                    let index = res.body.resultValue.indexOf("/upload");
                        this.path = res.body.resultValue.slice(0,index);
                        this.map.clearOverlays();
                        this.drawingManager.overlays = [];
                        this.allPoi = '';
                        this.strArr = [];
                        //通知父级组件关闭弹层
                        this.sendModalState();
                        if(this.syncshow==1){
                           this.appAaa(window.allPath)
                        }else if(this.syncshow==2){
                           this.appPutLocation(window.allPath)
                        }else if(this.syncshow==3){
                           this.appPoiFilter(window.allPath)
                        }else if(this.syncshow==4){
                           this.appOutPoiFilter(window.allPath)
                        }else if(this.syncshow==5){
                           this.appPutPoiFilter(window.allPath)
                        }else if(this.syncshow==6){
                           this.ghettoAaa(window.allPath)
                        }
                }else{
                    this.$Notice.warning({
                        title:'上传失败，请检查围栏'
                    });
                }
            },function(err){
                console.log(err);
            });
        }
      },
      getArea(polygon){
          //检查类型
        var EARTHRADIUS = 6370996.81; 
        if(!(polygon instanceof BMap.Polygon) &&
            !(polygon instanceof Array)){
            return 0;
        }
        var pts;
        if(polygon instanceof BMap.Polygon){
            pts = polygon.getPath();
        }else{
            pts = polygon;    
        }
        
        if(pts.length < 3){//小于3个顶点，不能构建面
            return 0;
        }
        
        var totalArea = 0;//初始化总面积
        var LowX = 0.0;
        var LowY = 0.0;
        var MiddleX = 0.0;
        var MiddleY = 0.0;
        var HighX = 0.0;
        var HighY = 0.0;
        var AM = 0.0;
        var BM = 0.0;
        var CM = 0.0;
        var AL = 0.0;
        var BL = 0.0;
        var CL = 0.0;
        var AH = 0.0;
        var BH = 0.0;
        var CH = 0.0;
        var CoefficientL = 0.0;
        var CoefficientH = 0.0;
        var ALtangent = 0.0;
        var BLtangent = 0.0;
        var CLtangent = 0.0;
        var AHtangent = 0.0;
        var BHtangent = 0.0;
        var CHtangent = 0.0;
        var ANormalLine = 0.0;
        var BNormalLine = 0.0;
        var CNormalLine = 0.0;
        var OrientationValue = 0.0;
        var AngleCos = 0.0;
        var Sum1 = 0.0;
        var Sum2 = 0.0;
        var Count2 = 0;
        var Count1 = 0;
        var Sum = 0.0;
        var Radius = EARTHRADIUS; //6378137.0,WGS84椭球半径 
        var Count = pts.length;        
        for (var i = 0; i < Count; i++) {
            if (i == 0) {
                LowX = pts[Count - 1].lng * Math.PI / 180;
                LowY = pts[Count - 1].lat * Math.PI / 180;
                MiddleX = pts[0].lng * Math.PI / 180;
                MiddleY = pts[0].lat * Math.PI / 180;
                HighX = pts[1].lng * Math.PI / 180;
                HighY = pts[1].lat * Math.PI / 180;
            }
            else if (i == Count - 1) {
                LowX = pts[Count - 2].lng * Math.PI / 180;
                LowY = pts[Count - 2].lat * Math.PI / 180;
                MiddleX = pts[Count - 1].lng * Math.PI / 180;
                MiddleY = pts[Count - 1].lat * Math.PI / 180;
                HighX = pts[0].lng * Math.PI / 180;
                HighY = pts[0].lat * Math.PI / 180;
            }
            else {
                LowX = pts[i - 1].lng * Math.PI / 180;
                LowY = pts[i - 1].lat * Math.PI / 180;
                MiddleX = pts[i].lng * Math.PI / 180;
                MiddleY = pts[i].lat * Math.PI / 180;
                HighX = pts[i + 1].lng * Math.PI / 180;
                HighY = pts[i + 1].lat * Math.PI / 180;
            }
            AM = Math.cos(MiddleY) * Math.cos(MiddleX);
            BM = Math.cos(MiddleY) * Math.sin(MiddleX);
            CM = Math.sin(MiddleY);
            AL = Math.cos(LowY) * Math.cos(LowX);
            BL = Math.cos(LowY) * Math.sin(LowX);
            CL = Math.sin(LowY);
            AH = Math.cos(HighY) * Math.cos(HighX);
            BH = Math.cos(HighY) * Math.sin(HighX);
            CH = Math.sin(HighY);
            CoefficientL = (AM * AM + BM * BM + CM * CM) / (AM * AL + BM * BL + CM * CL);
            CoefficientH = (AM * AM + BM * BM + CM * CM) / (AM * AH + BM * BH + CM * CH);
            ALtangent = CoefficientL * AL - AM;
            BLtangent = CoefficientL * BL - BM;
            CLtangent = CoefficientL * CL - CM;
            AHtangent = CoefficientH * AH - AM;
            BHtangent = CoefficientH * BH - BM;
            CHtangent = CoefficientH * CH - CM;
            AngleCos = (AHtangent * ALtangent + BHtangent * BLtangent + CHtangent * CLtangent) / (Math.sqrt(AHtangent * AHtangent + BHtangent * BHtangent + CHtangent * CHtangent) * Math.sqrt(ALtangent * ALtangent + BLtangent * BLtangent + CLtangent * CLtangent));
            AngleCos = Math.acos(AngleCos);            
            ANormalLine = BHtangent * CLtangent - CHtangent * BLtangent;
            BNormalLine = 0 - (AHtangent * CLtangent - CHtangent * ALtangent);
            CNormalLine = AHtangent * BLtangent - BHtangent * ALtangent;
            if (AM != 0)
                OrientationValue = ANormalLine / AM;
            else if (BM != 0)
                OrientationValue = BNormalLine / BM;
            else
                OrientationValue = CNormalLine / CM;
            if (OrientationValue > 0) {
                Sum1 += AngleCos;
                Count1++;
            }
            else {
                Sum2 += AngleCos;
                Count2++;
            }
        }        
        var tempSum1, tempSum2;
        tempSum1 = Sum1 + (2 * Math.PI * Count2 - Sum2);
        tempSum2 = (2 * Math.PI * Count1 - Sum1) + Sum2;
        if (Sum1 > Sum2) {
            if ((tempSum1 - (Count - 2) * Math.PI) < 1)
                Sum = tempSum1;
            else
                Sum = tempSum2;
        }
        else {
            if ((tempSum2 - (Count - 2) * Math.PI) < 1)
                Sum = tempSum2;
            else
                Sum = tempSum1;
        }
        totalArea = (Sum - (Count - 2) * Math.PI) * Radius * Radius;

        return Math.floor(totalArea/1000000); //返回总面积
      },
      // 面积过大的提醒
      open (nodesc) {
          this.$Notice.open({
              title: '面积过大请重选(最大选区面积180平方公里)',
          });
      },
      //点击标签删除选区
      delArea(index){
        let areas = this.drawingManager.overlays;
            this.map.removeOverlay(areas[index]);
            areas.splice(index,1);
            this.strArr.splice(index,1);
      }
    },
}
</script>
<style>
  .areas{
    width:100%;
  }
  .areas li{
    margin-right:3px;
    margin-bottom:3px;
  }
  .areas .ivu-icon{
    font-size:15px;
    color:red;
  }
</style>