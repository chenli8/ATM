<template>
    <div>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{behaviorTypeLabel}}</span>
        </p>
        <Radio-group :model="selectedBehaviorType.id" >
            <Radio :value="item.id"  @change="upadateAppFormType(item)" v-for="item in behaviorTypeList">{{item.name}}</Radio>
        </Radio-group>
      </div>
       <td-date-picker :model="selectedDateType.id" :change="updateAppFormDateType" :update="updateAppFormDate" :type="datatime"></td-date-picker>
      <div class="form-wrapper">
         <p class="head-wrapper">
            <span class="title-wrapper">{{expression}}</span>
        </p>
            <Radio-group :model="selectedId" >
                <Radio :value="item.id"   v-for="item in tagExpressionList" @change="updateAppOrForm({id:item.id,name:item.name})">{{item.name}}</Radio>
            </Radio-group>
      </div>
      <div class="form-wrapper">
         <p class="head-wrapper">
            <span class="title-wrapper">{{selectivityLabel}}</span>
        </p>
            <Radio-group :model="selectedIdSelectivity" >
                <Radio :value="item.id"   v-for="item in appSelectivityList" @change="_updateAppSelectivityForm({id:item.id,name:item.name})">{{item.name}}</Radio>
            </Radio-group>
      </div>
      <section v-if='selectedIdSelectivity===1'>
            <div class="form-wrapper">
                <p class="head-wrapper">
                    <span class="title-wrapper">{{appQueryTypeLabel}}</span>
                </p>
                <Radio-group :model="selectedAppQueryType.id" >
                    <Radio :value="item.id" @change="updateAppQueryType(item)"   v-for="item in appQueryTypeList">{{item.name}}</Radio>
                </Radio-group>
            </div>
            <div class="form-wrapper">
                <p class="head-wrapper">
                    <span class="title-wrapper">{{filterAppLabel}}</span>
                </p>
                <multiselect
                    :options="filterAppList"
                    key="hash"
                    label="appName"
                    placeholder="模糊检索"
                    :multiple="true"
                    :show-labels="false"
                    :close-on-select="false"
                    :selected="selectedFilterAppList"
                    @search-change="upadateAppChange"
                    @select="addAppFormItem"
                    @remove="deleteAppFormItem">
                    <span slot="noResult">暂无匹配项</span>
                </multiselect>
            </div>
      </section>
      <section v-if="selectedIdSelectivity===2">
         <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{fileLabel}} {{APP_0098}} </span>
            </p>
            <div class="btn" id="btn" >
                <rd-upload  
                  v-ref:apprduploadid
                  v-bind:accept="APP_0099"
                  @add="addFileAction" 
                  @remove="removeFileAction"
                  >
                </rd-upload>
                <div v-show='sk' class="ck">
                  <rd-spin></rd-spin>
                </div>
            </div>
        </div> 
      </section>
    </div>
</template>
<script>
import { rdUpload , rdSpin} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import TdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {
        upadateAppFormType,
        updateAppFormDateType,
        updateAppFormDate,
        updateAppQueryType,
        upadateAppFormFilterChange,
        addAppFormItem,
        deleteAppFormItem,
        updateAppOrForm,
        updateAppSelectivityForm,
        addAppFormFile,
        deleteAppFormFile,
    } from '../../../vuex/actions';

export default {
   components: {
        Multiselect,
        TdDatePicker,
        rdUpload,
        rdSpin
    },
    data(){
        return {
            datatime:[1,3],
            sk:false,
            delFile:null,
        }
    },
    watch:{
        selectedIdSelectivity:function(){
            if(this.selectedIdSelectivity===2){
               this.delFile=this.$refs.apprduploadid.delFile;
               this.$refs.apprduploadid.delFile=this.delFileFn;
            }
        }
    },
    vuex: {
        getters: {
            behaviorTypeLabel:({appForm})=>appForm.behaviorTypeLabel,
            behaviorTypeList:({appForm})=>appForm.behaviorTypeList,
            selectedBehaviorType:({appForm})=>appForm.selectedBehaviorType,
            selectedDateType:({appForm})=>appForm.selectedDateType,
            appQueryTypeLabel:({appForm})=>appForm.appQueryTypeLabel,
            appQueryTypeList:({appForm})=>appForm.appQueryTypeList,
            selectedAppQueryType:({appForm})=>appForm.selectedAppQueryType,
            filterAppLabel:({appForm})=>appForm.filterAppLabel,
            filterAppList:({appForm})=>appForm.filterAppList,
            selectedFilterAppList:({appForm})=>appForm.selectedFilterAppList,
            tagExpressionList:({appForm})=>appForm.tagExpressionList,
            selectedId:({appForm})=>appForm.selectedId,
            expression:({appForm})=>appForm.expression,
            selectedIdSelectivity:({appForm})=>appForm.selectedIdSelectivity,
            appSelectivityList:({appForm})=>appForm.appSelectivityList,
            selectivityLabel:({appForm})=>appForm.selectivityLabel,
            fileLabel:({appForm})=>appForm.fileLabel,
        },
        actions:{
            upadateAppFormType,
            updateAppFormDateType,
            updateAppFormDate,
            updateAppQueryType,
            upadateAppFormFilterChange,
            addAppFormItem,
            deleteAppFormItem,
            updateAppOrForm,
            updateAppSelectivityForm,
            addAppFormFile,
            deleteAppFormFile
        }
    },
    methods:{
      upadateAppChange(val){
            this.upadateAppFormFilterChange(val,this.selectedAppQueryType.id)
      },
      addFileAction (newFile, list) {
            this.$Loading.config({
                color: '#BAFCBA',
                failedColor: '#f0ad4e',
                height: 5
            });
            this.$refs.apprduploadid.$file.disabled=true
            this.$Loading.start();
            this.btnshow=false
            this.sk=true
            this.addAppFormFile(newFile,(msg)=>{
                if(list.length>1){
                    list.shift();
                }
                if(msg.type=='success'){
                         this.$Loading.finish();
                         this.sk=false
                         this.$refs.apprduploadid.$file.disabled=false
                     }else{
                         this.$Loading.error();
                         this.sk=false
                         this.$refs.apprduploadid.$file.disabled=false
                }
                this.$Notice[msg.type]({title: msg.text})
            });

      },
      removeFileAction (item) {
            this.sk=false
            this.$Loading.destroy()
            this.$refs.apprduploadid.$file.value='';
            this.deleteAppFormFile(item.file.name)
      },
      delFileFn(item){
            if(!this.sk){
                this.$Modal.confirm({
                    title: '删除上传文件',
                    content: '<p>您确认要删除上传的文件？</p>',
                    onOk: () => {
                         this.delFile.call(this.$refs.apprduploadid,item);
                    }
                 });
            }
      },
      _updateAppSelectivityForm(data){
           this.updateAppSelectivityForm(data)
        } 
    }
}
</script>
