<template>
    <div>
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{listLabel}}</span>
            </p>
            <Radio-group :model="selectedId" >
                <Radio :value="item.id" class="vertical" @change="upadateIdFormSelected({id:item.id,text:item.name,label:listLabel})" v-for="item in newdeviceList">{{item.name}}</Radio>
            </Radio-group>
        </div>
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{md5Label}}</span>
            </p>
            <Radio-group :model="selectedId" >
                <Radio :value="item.id" class="vertical" @change="upadateIdFormSelected({id:item.id,text:item.name,label:md5Label})" v-for="item in md5DeviceList">{{item.name}}</Radio>
            </Radio-group>
        </div>
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{fileLabel}} {{APP_0098}} </span>
            </p>
            <div class="btn" id="btn" >
                <rd-upload  
                v-ref:rduploadid
                v-bind:accept="APP_0099"
                @add="addFileAction" 
                @remove="removeFileAction"
                ></rd-upload>
                <div v-show='sk' class="ck">
                  <rd-spin></rd-spin>
                </div>
            </div>
        </div>     
     </div>
</template>
<script>
import { rdUpload , rdSpin} from 'radon-ui';
import {upadateIdFormSelected,addIdFormFile,deleteIdFormFile} from '../../../vuex/actions';
import {APP_0098,APP_0099} from '../../../vuex/app-messages';

export default {
    data(){
        return {
            APP_0098,
            APP_0099,
            sk:false,
            delFile:null,
            newdeviceList:null,
        }
    },
    components: {
        rdUpload,rdSpin
    },
    vuex: {
        getters: {
            selectedId:({idForm})=>idForm.selectedId,
            listLabel:({idForm})=>idForm.listLabel,
            deviceList:({idForm})=>idForm.deviceList,
            md5Label:({idForm})=>idForm.md5Label,
            md5DeviceList:({idForm})=>idForm.md5DeviceList,
            fileLabel:({idForm})=>idForm.fileLabel,
            fileList:({idForm})=>idForm.fileList,
        },
        actions:{
            upadateIdFormSelected,
            addIdFormFile,
            deleteIdFormFile,
        }
    },
    ready(){
       // 判断是否是管理员 是则显示PHONENOMD5  不是则不显示PHONENOMD5
        function getCookie(name){
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
            else
            return null;
        }
        let atmJson=(getCookie('atmJson')),
        sessionAtmJson=sessionStorage.getItem('sessionAtmJson'),
        hun=false;
        if(atmJson){
            hun=JSON.parse(atmJson).admin

        }else if(sessionAtmJson){
            hun=JSON.parse(sessionAtmJson).admin   
        }
        let bg=null
        if(hun){
               bg=this.deviceList
        }else{
            let sun1=this.deviceList.slice(0,3)
            let sun2=this.deviceList.slice(4)
            bg=sun1.concat(sun2)
        }
        this.newdeviceList=bg
        this.delFile=this.$refs.rduploadid.delFile;
        this.$refs.rduploadid.delFile=this.delFileFn;
    },
    methods: {
        addFileAction (newFile, list) {
            this.$Loading.config({
                color: '#BAFCBA',
                failedColor: '#f0ad4e',
                height: 5
            });
            this.$refs.rduploadid.$file.disabled=true
            this.$Loading.start();
            this.btnshow=false
            this.sk=true
            this.addIdFormFile(newFile,(msg)=>{
                if(list.length>1){
                    list.shift();
                }
                if(msg.type=='success'){
                         this.$Loading.finish();
                         this.sk=false
                         this.$refs.rduploadid.$file.disabled=false
                     }else{
                         this.$Loading.error();
                         this.sk=false
                         this.$refs.rduploadid.$file.disabled=false
                }
                this.$Notice[msg.type]({title: msg.text})
            });

        },
        removeFileAction (item) {
                    this.sk=false
                    this.$Loading.destroy()
                    this.$refs.rduploadid.$file.value='';
                    this.deleteIdFormFile(item.file.name)
        },
        delFileFn(item){
                if(!this.sk){
                    this.$Modal.confirm({
                        title: '删除上传文件',
                        content: '<p>您确认要删除上传的文件？</p>',
                        onOk: () => {
                             this.delFile.call(this.$refs.rduploadid,item);
                        }
                     });
                }
        }
    }
}
</script>

