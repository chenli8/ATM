import {
    GET_PUTTAGFORM_DATA,
    UPDATE_PUTTAGFORM_SELECTED,
    DELETE_PUTTAGFORM,
    SUBMIT_PUTTAGFORM,
} from '../../../mutation-types';
import {APP_0131} from '../../../app-messages';
const state = {
    formName: 'putTagForm',
    tagLabel:'选择标签',
    tagList:{},
    //选中标签
    tagListSelected:[],
    submitData:{},
}
const mutations = {
    [GET_PUTTAGFORM_DATA](state,data) {
        state.tagList=data;
    },
    [UPDATE_PUTTAGFORM_SELECTED](state,arr) {
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
    [DELETE_PUTTAGFORM](state) {
       state.tagListSelected=[];
    },
    [SUBMIT_PUTTAGFORM](state) {
       let codeListStr='';
       state.tagListSelected.forEach((obj)=>{
                codeListStr+=obj.id+','
       });
       if(state.tagListSelected.length<1){
            state.submitData={
               error:APP_0131
            }
       }else{
            state.submitData= {
                'expType': 'outputStatics',
                'exps': [{
                    'type':'tag',
                    'codeList':codeListStr.substring(0,codeListStr.length-1),
                    'expCode':'03031',
                }]
            }
       }
       
    },
}

export default {
    state,
    mutations
}
