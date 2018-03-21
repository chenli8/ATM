import {
	DELETE_BRUSHFORM,
    SUBMIT_BRUSHFORM,
    UPDATE_BRUSHFORM
} from '../../../mutation-types';
import {brushList} from '../../../business-util';  
const state = {
    formName:'brushForm',
    //选中项-显示文字
    selectedText: "过滤刷量设备",
    //选中项-ID
    selectedId: 1,
    //数据格式-显示文字
    listLabel:"过滤刷量选项",
    //数组
    brushList,
    //提交数据
    submitData:{}
}

const mutations = {
	[DELETE_BRUSHFORM](state) {
        state.selectedText='过滤刷量设备';
        state.selectedId=1;
        state.submitData={};
     },
    [SUBMIT_BRUSHFORM](state) {
       state.submitData= {
            "excludeCheatedIds":state.selectedId
        }
    },
    [UPDATE_BRUSHFORM](state,item){
        state.selectedText=item.text;
        state.selectedId=item.id;
    },
}
export default {
    state,
    mutations
}
    
                
                
                
                
                
                
