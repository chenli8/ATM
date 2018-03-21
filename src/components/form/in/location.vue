<template>
    <div class="choice-box">
       <!--  选择小时段 -->
      <td-date-picker :model="selectedDateType.id" :change="updateLocationFormDateType" :update="updateLocationFormDate" :type="datatime"></td-date-picker>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{timeLabel}} {{APP_0111}}</span>
        </p>
        <multiselect
          :options="timeList"
          key="id"
          label="name"
          :searchable="false"
          placeholder=""
          :multiple="true"
          :show-labels="false"
          :close-on-select="false"
          @select="addLocationFormTime"
          @remove="deleteLocationFormTime"
          >
        </multiselect>
      </div>
     <!--  选择城市 -->
     <div class="form-wrapper">
       <p class="head-wrapper">
           <span class="title-wrapper">{{cityLabel}} (必选项)</span>
       </p>
       <multiselect
           :options="filterAreaList"
           key="code"
           label="name"
           :placeholder="'模糊检索城市'"
           :multiple="true"
           :show-labels="false"
           :close-on-select="false"
           :selected="selectedFilterAreaList"
           @search-change="upadateLocationChange"
           @select="addLocationFormAreaItem"
           @remove="deleteLocationFormAreaItem"
           v-show="true">
           <span slot="noResult">暂无匹配项</span>
       </multiselect>
     </div>
     <!--  位置类型 -->
      <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{locationTypeLabel}}  <a><Icon type="help-circled"></Icon><rd-tooltip>{{APP_0112}}</rd-tooltip></a></span>
            </p>
            <Radio-group :model="selectedLocationType.id" >
                <Radio :value="item.id" @change="_updateLocationFormLocationType(item)" v-for="item in locationTypeList">{{item.name}}</Radio>
            </Radio-group>
      </div>
      <!-- 上传围栏| 上传中心点+半径 -->
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{selectedLocationType.name}} {{APP_0098}}</span>
        </p>
        <div class="form-item-wrapper" v-show="selectedLocationType.id!==3">
            <label>{{coordinaryTypeLabel}}</label>
            <Radio-group :model="selectedCoordinaryType.id">
              <Radio :value="item.id"   @change="updateLocationFormCoordinaryType(item)"  v-for="item in coordinaryTypeList">{{item.name}}</Radio>
             </Radio-group>
        </div>
        <div class="form-item-wrapper" v-show="selectedLocationType.id!==3">
         <div class="btn" id="btn" >
           <rd-upload 
                v-ref:rdupload
                v-bind:accept="APP_0099"
                @add="addFileAction" 
                @remove="removeFileAction">
            </rd-upload>
            <i-button type="ghost" @click='viewBound' v-bind:disabled="flug" v-if='selectedLocationType.id==2'>查看围栏</i-button>
         </div>
        </div>
        <!-- 选择围栏-->
        <div class="form-item-wrapper btn" v-show="selectedLocationType.id===3">
            <i-button type="ghost" @click="modal1 = true">{{locationTypeList[2].name}}</i-button>
            <i-button type="ghost" @click="clickFenceUpload" v-if="fenceUpload">下载围栏</i-button>
            
        </div>
      </div>
      <!-- 遮罩层 -->
      <Modal
        :visible.sync="modal1"
        title="选择围栏"
        width=1000
        >
        <area :visible="modal1" :id="'aaa'" :syncshow='1' @sendfalse="getModalState"></area>
    </Modal>
      <!-- 查看围栏 -->
    <Modal
        :visible.sync="show"
        title="查看围栏"
        width=1000
        >
        <div style="height:480px;" class="clearfix">
            <div style="float:left;width:100%;height:100%;">
                <div class="map" style="width:100%; height:100%;" id="map"></div>
            </div>
        </div>
    </Modal>
    </div>
</template>
<script>

import {rdUpload , rdTooltip} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import Area from '../../../lib/area/area.vue';
import {updateLocationFormDateType,
        updateLocationFormDate,
        updateLocationFormLocationType,
        updateLocationFormCoordinaryType,
        addLocationFormTime,
        deleteLocationFormTime,
        addLocationFormFile,
        deleteLocationFormFile,
        upadateLocationChange,
        addLocationFormAreaItem,
        deleteLocationFormAreaItem
    } from '../../../vuex/actions';
import {APP_0098,APP_0099,APP_0111,APP_0112,APP_0101} from '../../../vuex/app-messages';

export default {
    data () {
        return {
            APP_0098,
            APP_0099,
            APP_0111,
            modal1:false,
            APP_0112,
            delFile:null,
            datatime:[1,3],
            show:false,
            map:null,
            flug:true,
            data:null
        }
    },
    ready(){
        this.delFile=this.$refs.rdupload.delFile;
        this.$refs.rdupload.delFile=this.delFileFn;
    },
    components: {
        Multiselect,
        rdUpload,
        tdDatePicker,
        Area,
        rdTooltip,
    },
    vuex: {
        getters: {
            selectedDateType:({locationForm})=>locationForm.selectedDateType,
            selectedLocationType:({locationForm})=>locationForm.selectedLocationType,
            timeLabel:({locationForm})=>locationForm.timeLabel,
            timeList:({locationForm})=>locationForm.timeList,
            coordinaryTypeLabel:({locationForm})=>locationForm.coordinaryTypeLabel,
            coordinaryTypeList:({locationForm})=>locationForm.coordinaryTypeList,
            selectedCoordinaryType:({locationForm})=>locationForm.selectedCoordinaryType,
            locationTypeLabel:({locationForm})=>locationForm.locationTypeLabel,
            locationTypeList:({locationForm})=>locationForm.locationTypeList,
            fileLabel:({locationForm})=>locationForm.fileLabel,
            fenceUpload:({locationForm})=>locationForm.fenceUpload,   
            cityLabel:({locationForm})=>locationForm.cityLabel,
            filterAreaList:({locationForm})=>locationForm.filterAreaList,
            selectedFilterAreaList:({locationForm})=>locationForm.selectedFilterAreaList,
        },
        actions:{
            updateLocationFormDateType,
            updateLocationFormDate,
            updateLocationFormLocationType,
            updateLocationFormCoordinaryType,
            addLocationFormTime,
            deleteLocationFormTime,
            addLocationFormFile,
            deleteLocationFormFile,
            upadateLocationChange,
            addLocationFormAreaItem,
            deleteLocationFormAreaItem
        }
    },
    methods:{
        viewBound(){
                let index=this.selectedLocationType.id;
                let list = this.$refs.rdupload.fileList;
                let newFile = this.$refs.rdupload.fileList[0];
                const self=this;
                this.addLocationFormFile(newFile,(msg)=>{
                    if(list.length>1){
                        list.shift();
                    }
                    if(msg.text==APP_0101){
                       this.show=true;
                       this.initBDMap();
                    }else{
                        this.$Notice[msg.type]({title: msg.text})
                    }
                },index);
        },
         initBDMap(){
            var self =this;
            var dataList=this.data.map(item=>{
                let items= item.split(',');
                item = new BMap.Point(items[0],items[1]); 
                return item;
            })
          if(this.map){
            this.map.centerAndZoom('中国',5);
            return;
          }
          const point = new BMap.Point(105.403119, 38.028658),size = new BMap.Size(10, 20);
          this.map=new BMap.Map('map',{enableMapClick:false});
          this.map.centerAndZoom('中国', 5);
          //开启鼠标滚轮缩放
          self.map.enableScrollWheelZoom(true);
          this.map.addEventListener('load',function(obj){
            self.map.addControl(new BMap.CityListControl({
              anchor: BMAP_ANCHOR_TOP_LEFT,
              offset: size,
            }));
          });
         var polygon = new BMap.Polygon(dataList, {strokeColor:"blue", strokeWeight:8, strokeOpacity:1});  //创
        this.map.addOverlay(polygon); 
      }, 
        _updateLocationFormLocationType(item){
            this.$refs.rdupload.fileList=[];
            this.updateLocationFormLocationType(item);
        },
        addFileAction (newFile, list) {
                let index=this.selectedLocationType.id
                const self=this;
                this.addLocationFormFile(newFile,(msg)=>{
                    if(list.length>1){
                        list.shift();
                    }
                    if(msg.html){
                      var dataList = msg.html.split(';');
                          this.data = dataList;
                    }
                    this.flug=false;
                    this.$Notice[msg.type]({title: msg.text});
                        
                },index);
         },
        removeFileAction (item) {
            this.flug=true;
            this.$refs.rdupload.$file.value='';
            this.deleteLocationFormFile(item.file.name)
        },
        delFileFn(item){
                if(!this.sk){
                    this.$Modal.confirm({
                        title: '删除上传文件',
                        content: '<p>您确认要删除上传的文件？</p>',
                        onOk: () => {
                             this.delFile.call(this.$refs.rdupload,item);
                        }
                     });
                }
        },
        getModalState(bSign){
            this.modal1 = bSign;
        },
        clickFenceUpload(){
               let url=process.env.NODE_ENV.apiPath+"fileTransferManager/downloadFile";
                Vue.http.get(url,{
                    params:{
                          filePath:window.allPath
                    }
                }).then((response)=>{
                    var el = document.createElement("a");
                    document.body.appendChild(el);
                    el.href = response.url; 
                    el.click();
                    document.body.removeChild(el);
                },(response)=>{
                    console.log('请求失败')
                })
        }
    }
}
</script>
