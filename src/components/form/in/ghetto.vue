<template>
    <div class="choice-box">
      <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{filterTypeLabel}}</span>
            </p>
            <Radio-group :model="selectedFilterTypeType.id" >
                <Radio :value="item.id"  @change="upadateGhettoFormType(item)" v-for="item in filterTypeList">{{item.name}}</Radio>
            </Radio-group>
      </div>
       <td-date-picker :model="selectedDateType.id" :change="updateGhettoFormDateType" :update="updateGhettoFormDate" :type="datatime" :appsize='false' ></td-date-picker>
     <!-- 城市  -->
      <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{cityListLabel}}</span><span class='essential'>必选</span>
            </p>
            <multiselect
                :options="filterGhettoList"
                key="code"
                label="name"
                :placeholder="'模糊检索'"
                :multiple="true"
                :show-labels="false"
                :close-on-select="false"
                :selected="selectedFilterGhettoList"
                @search-change="upadateGhettoChange"
                @select="addGhettoFormAreaItem"
                @remove="deleteGhettoFormAreaItem">
                <span slot="noResult">暂无匹配项</span>
              </multiselect>
        </div>
     <!--  通勤半径 -->
      <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{radiustLabel}}</span> <span class='essential' id='essential1'>可选 请输入数字（整数）</span>
            </p>
            <div class='commutingRadius'>
                 <p style='margin-right:10px;'><i-input :value.sync="radiusStart" placeholder="请输入..." ><span slot="prepend">大于</span><span slot="append">m</span></i-input></p>
                 <p><i-input :value.sync="radiustEnd" placeholder="请输入..." ><span slot="prepend">小于</span><span slot="append">m</span></i-input></p>
            </div>
      </div>
      <!--  位置类型 -->
      <div class="form-wrapper">
            <p class="head-wrapper">
                  <span class="title-wrapper">{{locationTypeLabel}}  <a><Icon type="help-circled"></Icon><rd-tooltip>{{APP_0112}}</rd-tooltip></a></span>
            </p>
            <Radio-group :model="selectedLocationType.id" >
                  <Radio :value="item.id" @change="_updateGhettoFormLocationType(item)" v-for="item in locationGhettoTypeList">{{item.name}}</Radio>
            </Radio-group>
      </div>
      <!-- 上传围栏| 上传中心点+半径 -->
      <div class="form-wrapper" v-show='selectedLocationType.id!==0'>
            <p class="head-wrapper">
                <span class="title-wrapper">{{selectedLocationType.name}} {{APP_0098}}</span>
            </p>
            <div class="form-item-wrapper" v-show="selectedLocationType.id!==3">
                <label>{{coordinaryTypeLabel}}</label>
                <Radio-group :model="selectedCoordinaryType.id">
                    <Radio :value="item.id"   @change="updateGhettoFormCoordinaryType(item)"  v-for="item in coordinaryTypeList">{{item.name}}</Radio>
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
                <i-button type="ghost" @click="modal1 = true">{{locationGhettoTypeList[2].name}}</i-button>
                <i-button type="ghost" @click="clickFenceUpload" v-if="fenceUpload">下载围栏</i-button>
            </div>
      </div>
      <!-- 遮罩层 -->
      <Modal
          :visible.sync="modal1"
          title="选择围栏"
          width=1000
          >
          <area :visible="modal1" :id="'aaa'" :syncshow='6' @sendfalse="getModalState"></area>
    </Modal>
    </div>
</template>
<script>

import {rdUpload , rdTooltip} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import Area from '../../../lib/area/area.vue';
import {updateGhettoFormDateType,
        updateGhettoFormDate,
        updateGhettoFormLocationType,
        updateGhettoFormCoordinaryType,
        addGhettoFormFile,
        deleteGhettoFormFile,
        upadateGhettoFormType,
        upadateGhettocityRadius,
        upadateGhettoChange,
        addGhettoFormAreaItem,
        deleteGhettoFormAreaItem,
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
            datatime:[3],
            radiusStart:'',
            radiustEnd:'',
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
            selectedDateType:({ghettoForm})=>ghettoForm.selectedDateType,
            selectedLocationType:({ghettoForm})=>ghettoForm.selectedLocationType,
            coordinaryTypeLabel:({ghettoForm})=>ghettoForm.coordinaryTypeLabel,
            coordinaryTypeList:({ghettoForm})=>ghettoForm.coordinaryTypeList,
            selectedCoordinaryType:({ghettoForm})=>ghettoForm.selectedCoordinaryType,
            locationTypeLabel:({ghettoForm})=>ghettoForm.locationTypeLabel,
            locationGhettoTypeList:({ghettoForm})=>ghettoForm.locationGhettoTypeList,
            fileLabel:({ghettoForm})=>ghettoForm.fileLabel,
            fenceUpload:({ghettoForm})=>ghettoForm.fenceUpload,   
            filterTypeLabel:({ghettoForm})=>ghettoForm.filterTypeLabel,
            selectedFilterTypeType:({ghettoForm})=>ghettoForm.selectedFilterTypeType,
            filterTypeList:({ghettoForm})=>ghettoForm.filterTypeList,
            cityListLabel:({ghettoForm})=>ghettoForm.cityListLabel,
            radiustLabel:({ghettoForm})=>ghettoForm.radiustLabel,
            filterGhettoList:({ghettoForm})=>ghettoForm.filterGhettoList,
            selectedFilterGhettoList:({ghettoForm})=>ghettoForm.selectedFilterGhettoList,
        },
        actions:{
            updateGhettoFormDateType,
            updateGhettoFormDate,
            updateGhettoFormLocationType,
            updateGhettoFormCoordinaryType,
            addGhettoFormFile,
            deleteGhettoFormFile,
            upadateGhettoFormType,
            upadateGhettocityRadius,
            upadateGhettoChange,
            addGhettoFormAreaItem,
            deleteGhettoFormAreaItem,
        }
    },
    watch:{
        //通勤半径
        radiusStart:function(n,v){
              let sum=n.replace(/(^\s*)|(\s*$)/g, "");
              let nub=this.radiustEnd.replace(/(^\s*)|(\s*$)/g, "");
              let reg=/^[0-9]*$/g
              let reg1=/^[0-9]*$/g
              let essential1=document.getElementById('essential1')
              if(reg.test(sum)&&reg1.test(nub)){
                    essential1.style.color='#ccc'        
                    essential1.innerHTML='可选 请输入数字（整数）'
              }else{
                    essential1.style.color='red'        
                    essential1.innerHTML='请输入数字（整数）'
              }
              this.upadateGhettocityRadius(sum,nub)
        },
        radiustEnd:function(n,v){
             let sum=n.replace(/(^\s*)|(\s*$)/g, "");
             let nub=this.radiusStart.replace(/(^\s*)|(\s*$)/g, "");
             let reg=/^[0-9]*$/g
             let reg1=/^[0-9]*$/g
             let essential1=document.getElementById('essential1')
             if(reg.test(sum)&&reg1.test(nub)){
                  essential1.style.color='#ccc'        
                  essential1.innerHTML='可选 请输入数字（整数）'   
             }else{
                    essential1.innerHTML='请输入数字（整数）'
                    essential1.style.color='red'
             }
               this.upadateGhettocityRadius(nub,sum)
        }
    },
    methods:{
        _updateGhettoFormLocationType(item){
            this.$refs.rdupload.fileList=[];
            this.updateGhettoFormLocationType(item);
        },
        addFileAction (newFile, list) {
                let index=this.selectedLocationType.id
                const self=this;
                this.addGhettoFormFile(newFile,(msg)=>{
                    if(list.length>1){
                        list.shift();
                    }
                    this.$Notice[msg.type]({title: msg.text})
                },index);
         },
        removeFileAction (item) {
            this.$refs.rdupload.$file.value='';
            this.deleteGhettoFormFile(item.file.name)
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
