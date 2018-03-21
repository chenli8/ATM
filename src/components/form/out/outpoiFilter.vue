<template>
    <div class="choice-box">
      <td-date-picker :model="selectedDateType.id" :change="updateOutPoiFilterFormDateType" :update="updateOutPoiFilterFormDate" :type="datatime"></td-date-picker>
      <div class="form-wrapper" v-if="selectedDateType.id===3">
            <p class="head-wrapper">
               <span class="title-wrapper">{{workingDaylabel}}</span>
            </p>
            <Radio-group :model="workingDayType.id">
              <Radio :value="item.id"   @change="updateOutPoiFilterWorkingDay(item)"  v-for="item in workingDayList">{{item.name}}</Radio>
             </Radio-group>
      </div>
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
          :placeholder="'请选择'"
          :multiple="true"
          :show-labels="false"
          :close-on-select="false"
          @select="addOutPoiFilterFormTime"
          @remove="deleteOutPoiFilterFormTime"
          >
        </multiselect>
      </div>
     <!--  选择城市 -->
      <section>
            <div class="form-wrapper">
               <p class="head-wrapper">
                   <span class="title-wrapper">{{cityLabel}}</span>
               </p>
               <multiselect
                      :options="source",
                      :selected="cityValue",
                      :show-labels="false"
                      @update="updateValueOutPoiFilterForm",
                      key="code"
                      label="name"
                      placeholder="检索城市">
               </multiselect>
           </div>
      </section>
    <!--   poi类型列表 -->
      <div class="form-wrapper">
           <p class="head-wrapper">
               <span class="title-wrapper">{{tagLabel}}<a href="http://wiki.tenddata.com/pages/viewpage.action?pageId=26092883" target="_Blank" class="poiBlank">查看<rd-tooltip>点击查看有哪些Poi类型</rd-tooltip></a><a class="animated fadeInDownBig tittle-hint" v-if='promptingMessage'>(当前最多可选择5个标签！)</a></span>
           </p>
           <multiselect
               :options="filterTagAreaList"
               key="code"
               label="name"
               :placeholder="'模糊检索poi类型'"
               :multiple="true"
               :show-labels="false"
               :selected="tagListSelected"
               @search-change="upadateTagOutPoiFilterChange"
               @select="addTagOutPoiFilterFormAreaItem"
               @remove="deleteTagOutPoiFilterFormAreaItem"
               v-show="true">
               <span slot="noResult">暂无匹配项</span>
           </multiselect>
     </div>
     <!--  二选一 -->
      <div class="form-wrapper">
            <p class="head-wrapper">
               <span class="title-wrapper">{{selectivitylabel}}</span>
            </p>
            <Radio-group :model="selectivityId.id">
              <Radio :value="item.id" @change="newupdatePoiFilterselectivity(item)"  v-for="item in selectivityList">{{item.name}}</Radio>
            </Radio-group>
      </div>
     <!--  位置类型 -->
     <section v-show="selectivityId.id===2">
       <div class="form-wrapper" >
              <p class="head-wrapper">
                  <span class="title-wrapper">{{locationTypeLabel}}  <a><Icon type="help-circled"></Icon><rd-tooltip>{{APP_0112}}</rd-tooltip></a></span>
              </p>
              <Radio-group :model="selectedLocationType.id" >
                  <Radio :value="item.id" @change="_updatePoiFilterFormLocationType(item)" v-for="item in locationTypeList">{{item.name}}</Radio>
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
                <Radio :value="item.id"   @change="updateOutPoiFilterFormCoordinaryType(item)"  v-for="item in coordinaryTypeList">{{item.name}}</Radio>
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
           </div>
          </div>
          <!-- 选择围栏-->
          <div class="form-item-wrapper btn" v-show="selectedLocationType.id===3">
              <i-button type="ghost" @click="modal1 = true">{{locationTypeList[2].name}}</i-button>
              <i-button type="ghost" @click="clickFenceUpload" v-if="fenceUpload">下载围栏</i-button>
          </div>
        </div>
      </section>
      <section v-if="selectivityId.id===1">
            <div class="form-wrapper">
               <p class="head-wrapper">
                   <span class="title-wrapper">{{poilabel}}</span><b v-show="early" class="poiEarly animated fadeInDownBig tittle-hint">请先选择城市范围</b>
               </p>
               <multiselect
                   v-ref:rdupload2
                   :options="filterAreaList"
                   key="code"
                   label="name"
                   :placeholder="'模糊检索poi'"
                   :multiple="true"
                   :show-labels="false"
                   :close-on-select="false"
                   :selected="selectedFilterAreaList"
                   @search-change="oldUpadateOutPoiFilterChange"
                   @select="addOutPoiFilterFormAreaItem"
                   @remove="deleteOutPoiFilterFormAreaItem"
                   v-show="true">
                   <span slot="noResult">暂无匹配项</span>
               </multiselect>
               <div class="poiLoad" v-show="poiload">
                  <rd-spin></rd-spin>
                  <span>加载中...</span>
               </div>
          </div>
      </section>
      <!-- 遮罩层 -->
      <Modal
        :visible.sync="modal1"
        title="选择围栏"
        width='1000'
        >
        <area :visible="modal1" :id="'ddd'" :syncshow='4' @sendfalse="getModalState"></area>
    </Modal>
    </div>
</template>
<script>

import {rdUpload , rdTooltip,rdSpin} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import Area from '../../../lib/area/area.vue';
import {updateOutPoiFilterFormDateType,
        updateOutPoiFilterFormDate,
        updateOutPoiFilterFormType,
        updateOutPoiFilterFormCoordinaryType,
        addOutPoiFilterFormTime,
        deleteOutPoiFilterFormTime,
        addOutPoiFilterFormFile,
        deleteOutPoiFilterFormFile,
        upadateOutPoiFilterChange,
        addOutPoiFilterFormAreaItem,
        deleteOutPoiFilterFormAreaItem,
        updateOutPoiFilterWorkingDay,
        upadateTagOutPoiFilterChange,
        updateOutPoiFilterselectivity,
        updateValueOutPoiFilterForm,
        addTagOutPoiFilterFormAreaItem,
        deleteTagOutPoiFilterFormAreaItem
    } from '../../../vuex/actions';
import {APP_0098,APP_0099,APP_0111,APP_0112} from '../../../vuex/app-messages';

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
            early:false,
            poiload:false,
            loadSelecter:true,
        }
    },
    ready(){
        this.delFile=this.$refs.rdupload.delFile;
        this.$refs.rdupload.delFile=this.delFileFn;
    },
    watch:{
       cityValue:function(){
        if(this.cityValue){
            this.early=false
        }
      },
      filterAreaList:function(){
          if(this.filterAreaList){
            this.poiload=false
            this.loadSelecter=true
            this.$refs.rdupload2.isOpen=true
          }
      }
    },
    components: {
        Multiselect,
        rdUpload,
        tdDatePicker,
        Area,
        rdTooltip,
        rdSpin
    },
    vuex: {
        getters: {
            selectedDateType:({outPoiFilterForm})=>outPoiFilterForm.selectedDateType,
            selectedLocationType:({outPoiFilterForm})=>outPoiFilterForm.selectedLocationType,
            timeLabel:({outPoiFilterForm})=>outPoiFilterForm.timeLabel,
            timeList:({outPoiFilterForm})=>outPoiFilterForm.timeList,
            coordinaryTypeLabel:({outPoiFilterForm})=>outPoiFilterForm.coordinaryTypeLabel,
            coordinaryTypeList:({outPoiFilterForm})=>outPoiFilterForm.coordinaryTypeList,
            selectedCoordinaryType:({outPoiFilterForm})=>outPoiFilterForm.selectedCoordinaryType,
            locationTypeLabel:({outPoiFilterForm})=>outPoiFilterForm.locationTypeLabel,
            locationTypeList:({outPoiFilterForm})=>outPoiFilterForm.locationTypeList,
            fileLabel:({outPoiFilterForm})=>outPoiFilterForm.fileLabel,
            fenceUpload:({outPoiFilterForm})=>outPoiFilterForm.fenceUpload,   
            cityLabel:({outPoiFilterForm})=>outPoiFilterForm.cityLabel,
            filterAreaList:({outPoiFilterForm})=>outPoiFilterForm.filterAreaList,
            selectedFilterAreaList:({outPoiFilterForm})=>outPoiFilterForm.selectedFilterAreaList,
            workingDaylabel:({outPoiFilterForm})=>outPoiFilterForm.workingDaylabel,
            workingDayType:({outPoiFilterForm})=>outPoiFilterForm.workingDayType,
            workingDayList:({outPoiFilterForm})=>outPoiFilterForm.workingDayList,
            tagLabel:({outPoiFilterForm})=>outPoiFilterForm.tagLabel,
            selectivitylabel:({outPoiFilterForm})=>outPoiFilterForm.selectivitylabel,
            selectivityList:({outPoiFilterForm})=>outPoiFilterForm.selectivityList,
            selectivityId:({outPoiFilterForm})=>outPoiFilterForm.selectivityId,
            poilabel:({outPoiFilterForm})=>outPoiFilterForm.poilabel,
            source:({outPoiFilterForm})=>outPoiFilterForm.source,
            cityValue:({outPoiFilterForm})=>outPoiFilterForm.cityValue,
            promptingMessage:({outPoiFilterForm})=>outPoiFilterForm.promptingMessage,
            filterTagAreaList:({outPoiFilterForm})=>outPoiFilterForm.filterTagAreaList,
            tagListSelected:({outPoiFilterForm})=>outPoiFilterForm.tagListSelected,
        },
        actions:{
            updateOutPoiFilterFormDateType,
            updateOutPoiFilterFormDate,
            updateOutPoiFilterFormType,
            updateOutPoiFilterFormCoordinaryType,
            addOutPoiFilterFormTime,
            deleteOutPoiFilterFormTime,
            addOutPoiFilterFormFile,
            deleteOutPoiFilterFormFile,
            upadateOutPoiFilterChange,
            addOutPoiFilterFormAreaItem,
            deleteOutPoiFilterFormAreaItem,
            updateOutPoiFilterWorkingDay,
            upadateTagOutPoiFilterChange,
            updateOutPoiFilterselectivity,
            updateValueOutPoiFilterForm,
            addTagOutPoiFilterFormAreaItem,
            deleteTagOutPoiFilterFormAreaItem
        }
    },
    methods:{
        oldUpadateOutPoiFilterChange(val){
           let city=this.cityValue.name
          if(!city){
              this.early=true
          }else{
              this.early=false
              this.poiload=true
              this.loadSelecter=false
              this.upadateOutPoiFilterChange(val,city)
          }  
        },
        newupdatePoiFilterselectivity(item){
            this.$refs.rdupload.fileList=[];
            this.updateOutPoiFilterselectivity(item)
        },
        _updatePoiFilterFormLocationType(item){
            this.$refs.rdupload.fileList=[];
            this.updateOutPoiFilterFormType(item);
        },
        addFileAction (newFile, list) {
                let index=this.selectedLocationType.id
                const self=this;
                this.addOutPoiFilterFormFile(newFile,(msg)=>{
                    if(list.length>1){
                        list.shift();
                    }
                    this.$Notice[msg.type]({title: msg.text})
                },index);
         },
        removeFileAction (item) {
            this.$refs.rdupload.$file.value='';
            this.deleteOutPoiFilterFormFile(item.file.name)
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
