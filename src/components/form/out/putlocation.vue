<template>
    <div class="choice-box">
      <td-date-picker :model="selectedDateType.id" :change="updatePutLocationFormDateType" :update="updatePutLocationFormDate" :type="datatime"></td-date-picker>
       <!--  选择小时段 -->
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
          @select="addPutLocationFormTime"
          @remove="deletePutLocationFormTime"
          >
        </multiselect>
      </div>
       <!--  选择城市 -->
         <div class="form-wrapper">
           <p class="head-wrapper">
               <span class="title-wrapper">{{cityLabel}} (必选项--输入'全国'默认选择全部城市)</span>
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
               @search-change="upadatePutLocationChange"
               @select="addPutLocationFormAreaItem"
               @remove="deletePutLocationFormAreaItem"
               v-show="true">
               <span slot="noResult">暂无匹配项</span>
           </multiselect>
         </div>
      <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{locationTypeLabel}}   <a><Icon type="help-circled"></Icon><rd-tooltip>{{APP_0112}}</rd-tooltip></a></span>
            </p>
            <Radio-group :model="selectedLocationType.id" >
                <Radio :value="item.id" @change="_updatePutLocationFormLocationType(item)" v-for="item in locationTypeList">{{item.name}}</Radio>
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
              <Radio :value="item.id"   @change="updatePutLocationFormCoordinaryType(item)"  v-for="item in coordinaryTypeList">{{item.name}}</Radio>
             </Radio-group>
        </div>
        <!-- 选择围栏-->
        <div class="form-item-wrapper" v-show="selectedLocationType.id!==3">
            <div class="btn" id="btn" >
            <rd-upload  
                v-ref:rduploadput
                v-bind:accept="APP_0099"
                @add="addFileAction" 
                @remove="removeFileAction">
            </rd-upload>
            </div>
        </div>
        <div class="form-item-wrapper btn" v-show="selectedLocationType.id===3">
            <i-button type="ghost" @click="modal1 = true">{{locationTypeList[2].name}}</i-button>
            <i-button type="ghost" @click="clickFenceUpload" v-if="fenceUpload">下载围栏</i-button>
        </div>
        <!-- 遮罩层 -->
        <Modal
            :visible.sync="modal1"
            title="选择围栏"
            width=1000
            >
            <area :visible="modal1" :id="'bbb'" :syncshow='2' @sendfalse="getModalState"></area>
        </Modal>
      </div>
    </div>
</template>
<script>

import {rdUpload,rdTooltip} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {updatePutLocationFormDateType,
        updatePutLocationFormDate,
        updatePutLocationFormLocationType,
        updatePutLocationFormCoordinaryType,
        addPutLocationFormTime,
        deletePutLocationFormTime,
        addPutLocationFormFile,
        deletePutLocationFormFile,
        upadatePutLocationChange,
        addPutLocationFormAreaItem,
        deletePutLocationFormAreaItem
    } from '../../../vuex/actions';
import {APP_0098,APP_0099,APP_0111,APP_0112} from '../../../vuex/app-messages';
import Area from '../../../lib/area/area.vue';
export default {
    data () {
        return {
            APP_0098,
            APP_0099,
            APP_0111,
            APP_0112,
            modal1:false,
            delFile:null,
            datatime:[1,3]
        }
    },
     ready(){
        this.delFile=this.$refs.rduploadput.delFile;
        this.$refs.rduploadput.delFile=this.delFileFn;
    },
    components: {
        Multiselect,
        rdUpload,
        tdDatePicker,
        rdTooltip,
        Area
    },
    vuex: {
        getters: {       
            selectedDateType:({putLocationForm})=>putLocationForm.selectedDateType,
            selectedLocationType:({putLocationForm})=>putLocationForm.selectedLocationType,
            timeLabel:({putLocationForm})=>putLocationForm.timeLabel,
            timeList:({putLocationForm})=>putLocationForm.timeList,
            coordinaryTypeLabel:({putLocationForm})=>putLocationForm.coordinaryTypeLabel,
            coordinaryTypeList:({putLocationForm})=>putLocationForm.coordinaryTypeList,
            selectedCoordinaryType:({putLocationForm})=>putLocationForm.selectedCoordinaryType,
            locationTypeLabel:({putLocationForm})=>putLocationForm.locationTypeLabel,
            locationTypeList:({putLocationForm})=>putLocationForm.locationTypeList,
            fileLabel:({putLocationForm})=>putLocationForm.fileLabel,
            fenceUpload:({putLocationForm})=>putLocationForm.fenceUpload,
            cityLabel:({putLocationForm})=>putLocationForm.cityLabel,
            filterAreaList:({putLocationForm})=>putLocationForm.filterAreaList,
            selectedFilterAreaList:({putLocationForm})=>putLocationForm.selectedFilterAreaList,
        },
        actions:{
            updatePutLocationFormDateType,
            updatePutLocationFormDate,
            updatePutLocationFormLocationType,
            updatePutLocationFormCoordinaryType,
            addPutLocationFormTime,
            deletePutLocationFormTime,
            addPutLocationFormFile,
            deletePutLocationFormFile,
            upadatePutLocationChange,
            addPutLocationFormAreaItem,
            deletePutLocationFormAreaItem
        }
    },
    methods:{
        _updatePutLocationFormLocationType(item){
            this.$refs.rduploadput.fileList=[];
            this.updatePutLocationFormLocationType(item);
        },
        addFileAction (newFile, list) {
            let index=this.selectedLocationType.id
                const self=this;
                this.addPutLocationFormFile(newFile,(msg)=>{
                    if(list.length>1){
                        list.shift();
                    }
                    this.$Notice[msg.type]({title: msg.text})
                },index);
        },
        removeFileAction (item) {
            this.$refs.rduploadput.$file.value='';
            this.deletePutLocationFormFile(item.file.name)
        },
         delFileFn(item){
                if(!this.sk){
                    this.$Modal.confirm({
                        title: '删除上传文件',
                        content: '<p>您确认要删除上传的文件？</p>',
                        onOk: () => {
                             this.delFile.call(this.$refs.rduploadput,item);
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
