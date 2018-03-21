<template>
    <div class="choice-box">
      <td-date-picker :model="selectedDateType.id" :change="updateDigPoiFilterFormDateType" :update="updateDigPoiFilterFormDate" :type="datatime"></td-date-picker>
      <div class="form-wrapper" v-if="selectedDateType.id===3">
            <p class="head-wrapper">
               <span class="title-wrapper">{{workingDaylabel}}</span>
            </p>
            <Radio-group :model="workingDayType.id">
              <Radio :value="item.id"   @change="updateDigPoiFilterWorkingDay(item)"  v-for="item in workingDayList">{{item.name}}</Radio>
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
          placeholder=""
          :multiple="true"
          :show-labels="false"
          :close-on-select="false"
          @select="addDigPoiFilterFormTime"
          @remove="deleteDigPoiFilterFormTime"
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
                      :close-on-select="false"
                      @update="updateValueDigPoiFilterForm",
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
                   @search-change="upadateTagDigPoiFilterChange"
                   @select="addTagDigPoiFilterFormAreaItem"
                   @remove="deleteTagDigPoiFilterFormAreaItem"
                   v-show="true">
                   <span slot="noResult">暂无匹配项</span>
               </multiselect>
       </div>
  </div>
</template>
<script>

import {rdUpload , rdTooltip} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import Area from '../../../lib/area/area.vue';
import {updateDigPoiFilterFormDateType,
        updateDigPoiFilterFormDate,
        updateDigPoiFilterFormType,
        updateDigPoiFilterFormCoordinaryType,
        addDigPoiFilterFormTime,
        deleteDigPoiFilterFormTime,
        addDigPoiFilterFormFile,
        deleteDigPoiFilterFormFile,
        upadateDigPoiFilterChange,
        addDigPoiFilterFormAreaItem,
        deleteDigPoiFilterFormAreaItem,
        updateDigPoiFilterWorkingDay,
        updateDigPoiFilterselectivity,
        updateValueDigPoiFilterForm,
        upadateTagDigPoiFilterChange,
        addTagDigPoiFilterFormAreaItem,
        deleteTagDigPoiFilterFormAreaItem
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
        }
    },
    ready(){
        /*this.delFile=this.$refs.rdupload.delFile;
        this.$refs.rdupload.delFile=this.delFileFn;*/
    },
    watch:{
     
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
            selectedDateType:({digPoiFilterForm})=>digPoiFilterForm.selectedDateType,
            selectedLocationType:({digPoiFilterForm})=>digPoiFilterForm.selectedLocationType,
            timeLabel:({digPoiFilterForm})=>digPoiFilterForm.timeLabel,
            timeList:({digPoiFilterForm})=>digPoiFilterForm.timeList,
            coordinaryTypeLabel:({digPoiFilterForm})=>digPoiFilterForm.coordinaryTypeLabel,
            coordinaryTypeList:({digPoiFilterForm})=>digPoiFilterForm.coordinaryTypeList,
            selectedCoordinaryType:({digPoiFilterForm})=>digPoiFilterForm.selectedCoordinaryType,
            locationTypeLabel:({digPoiFilterForm})=>digPoiFilterForm.locationTypeLabel,
            locationTypeList:({digPoiFilterForm})=>digPoiFilterForm.locationTypeList,
            fileLabel:({digPoiFilterForm})=>digPoiFilterForm.fileLabel,
            fenceUpload:({digPoiFilterForm})=>digPoiFilterForm.fenceUpload,   
            cityLabel:({digPoiFilterForm})=>digPoiFilterForm.cityLabel,
            filterAreaList:({digPoiFilterForm})=>digPoiFilterForm.filterAreaList,
            selectedFilterAreaList:({digPoiFilterForm})=>digPoiFilterForm.selectedFilterAreaList,
            workingDaylabel:({digPoiFilterForm})=>digPoiFilterForm.workingDaylabel,
            workingDayType:({digPoiFilterForm})=>digPoiFilterForm.workingDayType,
            workingDayList:({digPoiFilterForm})=>digPoiFilterForm.workingDayList,
            tagLabel:({digPoiFilterForm})=>digPoiFilterForm.tagLabel,
            selectivitylabel:({digPoiFilterForm})=>digPoiFilterForm.selectivitylabel,
            selectivityList:({digPoiFilterForm})=>digPoiFilterForm.selectivityList,
            selectivityId:({digPoiFilterForm})=>digPoiFilterForm.selectivityId,
            poilabel:({digPoiFilterForm})=>digPoiFilterForm.poilabel,
            source:({digPoiFilterForm})=>digPoiFilterForm.source,
            cityValue:({digPoiFilterForm})=>digPoiFilterForm.cityValue,
            filterTagAreaList:({digPoiFilterForm})=>digPoiFilterForm.filterTagAreaList,
            tagListSelected:({digPoiFilterForm})=>digPoiFilterForm.tagListSelected,
            promptingMessage:({digPoiFilterForm})=>digPoiFilterForm.promptingMessage,
        },
        actions:{
            updateDigPoiFilterFormDateType,
            updateDigPoiFilterFormDate,
            updateDigPoiFilterFormType,
            updateDigPoiFilterFormCoordinaryType,
            addDigPoiFilterFormTime,
            deleteDigPoiFilterFormTime,
            addDigPoiFilterFormFile,
            deleteDigPoiFilterFormFile,
            upadateDigPoiFilterChange,
            addDigPoiFilterFormAreaItem,
            deleteDigPoiFilterFormAreaItem,
            updateDigPoiFilterWorkingDay,
            updateDigPoiFilterselectivity,
            updateValueDigPoiFilterForm,
            upadateTagDigPoiFilterChange,
            addTagDigPoiFilterFormAreaItem,
            deleteTagDigPoiFilterFormAreaItem
        }
    },
    methods:{
        newupdatePoiFilterselectivity(item){
            this.$refs.rdupload.fileList=[];
            this.updateDigPoiFilterselectivity(item)
        },
        _updatePoiFilterFormLocationType(item){
            this.$refs.rdupload.fileList=[];
            this.updateDigPoiFilterFormType(item);
        },
        addFileAction (newFile, list) {
                let index=this.selectedLocationType.id
                const self=this;
                this.addDigPoiFilterFormFile(newFile,(msg)=>{
                    if(list.length>1){
                        list.shift();
                    }
                    this.$Notice[msg.type]({title: msg.text})
                },index);
         },
        removeFileAction (item) {
            this.$refs.rdupload.$file.value='';
            this.deleteDigPoiFilterFormFile(item.file.name)
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
<style>
</style>