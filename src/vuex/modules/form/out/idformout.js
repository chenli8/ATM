import {
    UPDATE_IDFORMOUTFORM_SELECTED,
    DELETE_IDFORMOUTFORM,
    SUBMIT_IDFORMOUTFORM
} from '../../../mutation-types';
import {APP_0137} from '../../../app-messages';
//设备类型
import {deviceList,md5DeviceList,equipmentProList} from '../../../business-util';
const EQUIPMENTTYPE = ['normal', 'md5','she'];
 for(let i=0;i<deviceList.length;i++){
    deviceList[i].type=EQUIPMENTTYPE[0]
 }
 //临时修改
 let newdeviceList=deviceList.slice(0,1)
 for(let i=0;i<md5DeviceList.length;i++){
   md5DeviceList[i].type=EQUIPMENTTYPE[1]
 }
 for(let i=0;i<equipmentProList.length;i++){
   equipmentProList[i].type=EQUIPMENTTYPE[2]
 }  
 const removeone=equipmentProList.slice(1);
 const newList=removeone.concat([{
        id: 96,
        name: '标准机型',
        type: EQUIPMENTTYPE[2]
}
,{
        id: 102,
        name: '第一次活跃时间',
        type: EQUIPMENTTYPE[2]
},{
        id: 103,
        name: '最后一次活跃时间',
        type: EQUIPMENTTYPE[2]
}
]);
const state = {
    formName: 'idformoutForm',
     //提交数据
    submitData:{},
    //选中项
    selectedArr: [],
    //MD5设备选中项
    selectedMD5Arr: [],
    //设备选中项
    selectedsheArr: [],
    //设备ID-显示文字
    listLabel: '设备ID',
    //提交时用的id
    submitid:[],
    //设备ID-集合
    deviceList:newdeviceList,
    //MD5设备ID-显示文字
    md5Label: 'MD5设备ID',
    //MD5设备ID-集合
    md5DeviceList,
    //设备属性ID-显示文字
    sheLabel: '设备属性',
    //设备属性ID-集合
    sheList:newList,
    
}

const mutations = {
    [UPDATE_IDFORMOUTFORM_SELECTED](state, item) {
        //正常设备
        if (item.type === EQUIPMENTTYPE[0]) {
           change(state.selectedArr)
        }else if(item.type === EQUIPMENTTYPE[2]) {
            change(state.selectedsheArr)
        } else {
            change(state.selectedMD5Arr)
        }
        function change(k){
            if (!k.length) {
                 k.push(item);
                 state.submitid.push(item.id)
             } else {
                   let arr=[];
                    for(let it of k){
                        arr.push(it.id)
                    }
                    if(arr.indexOf(item.id)!==-1){
                           k.splice(arr.indexOf(item.id), 1)
                    }else{
                           k.push(item)
                    }
                    if(state.submitid.indexOf(item.id)!==-1){
                           state.submitid.splice(state.submitid.indexOf(item.id), 1)
                    }else{
                           state.submitid.push(item.id)
                    }
            }
           
        }
    },
    [DELETE_IDFORMOUTFORM](state) {
        state.selectedArr = [];
        state.selectedMD5Arr = [];
        state.selectedsheArr = [];
        state.submitData={};
        state.submitid=[];
    },
    [SUBMIT_IDFORMOUTFORM](state) {
        let str=state.submitid.join(",");/*&&state.selectedsheArr.length==0&&state.selectedMD5Arr.length==0*/
        if(str==0){

             state.submitData={
                           error:APP_0137
                        }
        }else{
            state.submitData= {
                    'expType': 'outputDetail',
                    'exps': [{
                        'outputFilter':str,
                        'type':'device',
                        'expCode':'02000'
                    }]
             }
        }
       
    }
}

export default {
    state,
    mutations
}