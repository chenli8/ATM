import {
    DELETE_IDFORM,
    UPDATE_IDFORM_SELECTED,
    ADD_IDFORM_FILE,
    DELETE_IDFORM_FILE,
    SUBMIT_IDFORM,
} from '../../../mutation-types';
import {deviceList,md5DeviceList} from '../../../business-util';
import {APP_0138,APP_0139} from '../../../app-messages';
let newDeviceList=deviceList.slice(0,deviceList.length-1)

let newMd5DeviceList1=md5DeviceList.slice(0,4)
let newMd5DeviceList2=md5DeviceList.slice(5)
let newMd5DeviceList=newMd5DeviceList1.concat(newMd5DeviceList2)
const state = {
    formName:'idForm',
    //选中项-显示Label
    selectedLabel: '',
    //选中项-显示文字
    selectedText: '',
    //选中项-ID
    selectedId: 0,
    //数据格式-显示文字
    listLabel: '数据格式',
    //数据格式-集合
    deviceList:newDeviceList,
    //MD5哈希过的数据格式-显示文字
    md5Label: 'MD5哈希过的数据格式',
    //MD5哈希过的数据格式-集合
    md5DeviceList:newMd5DeviceList,
      //上传文件
    fileLabel:'上传文件',
    //上传路经
    fileList:[],
    //文件名
    fileListname:[],
    //提交数据
    submitData:{},
    //根路径输出位置
    html:'',
}
const mutations = {
    [DELETE_IDFORM](state) {
        state.selectedLabel='';
        state.selectedText='';
        state.selectedId=0;
        state.fileList=[];
        state.submitData={};
        state.fileListname=[];
        state.html="";
    },
    [UPDATE_IDFORM_SELECTED](state,item){
        state.selectedLabel=item.label;
        state.selectedText=item.text;
        state.selectedId=item.id;
    },
    [ADD_IDFORM_FILE](state,newFile) {
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(newFile.basePath)
        state.fileListname.push(newFile.fileName)
        state.html=newFile.html;
    },
    [DELETE_IDFORM_FILE](state,newFileName) {
      if(state.fileListname.indexOf(newFileName)!==-1){
         state.fileListname.splice(newFileName,1);
      }
      state.fileList=[];
    },
    [SUBMIT_IDFORM](state) {
        if(state.fileList.length<1){
            state.submitData={
                   error:APP_0138
            }
        }else if(state.selectedId<1){
             state.submitData={
                   error:APP_0139
            }
        }else{
            state.submitData= {
                expType: 'uploadFilter',
                exps: [{
                    inputPath: state.fileList.length?state.fileList[0]:'',
                    inputId: state.selectedId,
                    expCode:'01000',
                }]
            }
        }
       
    },
}

export default {
    state,
    mutations,
}