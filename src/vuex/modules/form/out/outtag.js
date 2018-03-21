import {
    GET_OUTTAGFORM_DATA,
    UPDATE_OUTTAGFORM_SELECTED,
    DELETE_OUTTAGFORM,
    SUBMIT_OUTTAGFORM,
} from '../../../mutation-types';
import {APP_0125} from '../../../app-messages';
const state = {
    formName: 'outTagForm',
    tagLabel:'选择标签',
    tagList:{},
    //选中标签
    tagListSelected:[],
    submitData:{},
}
const mutations = {
    [GET_OUTTAGFORM_DATA](state,data) {
        state.tagList=data;
    },
    [UPDATE_OUTTAGFORM_SELECTED](state,arr) {
    	let list = [];
        arr.forEach((obj) => {
            let index=-1;
            for (let i = 0, len = state.tagListSelected.length; i < len; i++) {
                const selectedObj = state.tagListSelected[i];
                if (selectedObj.id === obj.id) {
                    index=i;
                    state.tagListSelected.splice(index,1);
                    --i;
                    --len;
                }
            }
            if(obj.checked){
                list.push(obj);
            }
        });
        state.tagListSelected = state.tagListSelected.concat(list);
    },
    [DELETE_OUTTAGFORM](state) {
       state.tagListSelected=[];
    },
    [SUBMIT_OUTTAGFORM](state) {
       let codeListStr='';
       state.tagListSelected.forEach((obj)=>{
                codeListStr+=obj.id+','
       });
       if(state.tagListSelected.length<1){
            state.submitData={
               error:APP_0125
            }
       }else{
            state.submitData= {
                'expType': 'outputDetail',
                'exps': [{
                    'type':'tag',
                    'codeList':codeListStr.substring(0,codeListStr.length-1),
                    'expCode':'02030',
                }]
            }
       }
       
    },
}

export default {
    state,
    mutations
}
