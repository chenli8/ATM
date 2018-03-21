import {
    GET_TAGFORM_DATA,
    UPDATE_TAGFORM_SELECTED,
    DELETE_TAGFORM,
    SUBMIT_TAGFORM,
    UPDATE_EXPRESSIONFORM_SELECTED
} from '../../../mutation-types';
import {APP_0122} from '../../../app-messages';
import {tagExpressionList} from '../../../business-util';
const state = {
    formName: 'tagForm',
    tagLabel:'选择标签',
    tagList:{},
    //选中标签
    tagListSelected:[],
    //表达式选择
    expression:'表达式选择',
    //单选数组
    tagExpressionList,
    //默认选中项
    selectedId:1,
    tagExpressionName:tagExpressionList[0].name,
    submitData:{},
}
const mutations = {
    [GET_TAGFORM_DATA](state,data) {
        state.tagList=data;
    },
    [UPDATE_TAGFORM_SELECTED](state,arr) {
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
    [UPDATE_EXPRESSIONFORM_SELECTED](state,data){
        state.selectedId=data.id;
        state.tagExpressionName=data.name;
    },
    [DELETE_TAGFORM](state) {
        state.tagListSelected=[];
        state.selectedId=1,
        state.tagExpressionName=tagExpressionList[0].name,
        state.submitData={}
    },
    [SUBMIT_TAGFORM](state) {
       let codeListStr='';
       state.tagListSelected.forEach((obj)=>{
                codeListStr+=obj.id+','
       });
        if(state.tagListSelected.length<1){
            state.submitData={
               error:APP_0122
            }
       }else{
            state.submitData= {
                expType: 'tagFilter',
                exps: [{
                    opType:state.tagExpressionName,
                    codeList:codeListStr.substring(0,codeListStr.length-1),
                    expCode:'01060',
                }]
            }
       }
       
    },
}

export default {
    state,
    mutations
}
