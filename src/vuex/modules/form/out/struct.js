import {
    DELETE_STRUCTFORM,
    UPDATE_STRUCTFORM_SELECTED,
    SUBMIT_STRUCTFORM
} from '../../../mutation-types';
import {APP_0135} from '../../../app-messages';
import {equipmentProList} from '../../../business-util';
let arr=equipmentProList.slice(1)
arr.unshift({id: 96,name: '标准机型'})
//arr=arr.slice(0,8) 
const state = {
    formName:'structForm',
    //选中项-显示Label
    selectedLabel: '',
    //选中项-显示文字
    selectedText: '',
    //选中项-ID
    selectedId: 0,
    //数据格式-显示文字
    listLabel: '统计维度',
    //数据格式-集合
    list: arr,
    //提交数据
    submitData:{},
}

const mutations = {
    [DELETE_STRUCTFORM](state) {
        state.selectedLabel='';
        state.selectedText='';
        state.selectedId=0;
        state.submitData={};
    },
    [UPDATE_STRUCTFORM_SELECTED](state,item){
        state.selectedLabel=item.label;
        state.selectedText=item.text;
        state.selectedId=item.id;
    },
   
    [SUBMIT_STRUCTFORM](state) {
        if(state.selectedId==0){
            state.submitData={
               error:APP_0135
            }
        }else{
            state.submitData= {
            'expType': 'outputStatics',
                'exps': [{
                    'type':'device',
                    'dimType':state.selectedId,
                    'expCode':'03000'
                }]
            }
        }
       
    },
}

export default {
    state,
    mutations
}