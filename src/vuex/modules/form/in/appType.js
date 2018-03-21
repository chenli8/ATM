import {
    UPDATE_APPTYPEFORM_TYPE,
    UPDATE_APPTYPEFORM_DATETYPE,
    UPDATE_APPTYPEFORM_DATE,
    UPDATE_APPTYPEFORM_FILTERSELECTED,
    ADD_APPTYPEFORM_ITEM,
    DELETE_APPTYPEFORM_ITEM,
    DELETE_APPTYPEFORM,
    SUBMIT_APPTYPEFORM,
} from '../../../mutation-types';
import {dateInfo,appQueryTypeList,behaviorTypeList,getWeek} from '../../../business-util';
import {APP_0119,APP_0120,APP_0149,APP_0150,APP_0151} from '../../../app-messages';
const locaDateInfo=dateInfo();
const resetDate=(state)=>{
    state.selectedStartDate='';
    state.selectedEndDate='';
}
const state = {
    formName: 'appTypeForm',
    behaviorTypeLabel:'应用行为',
    behaviorTypeList,
    selectedBehaviorType:behaviorTypeList[0],
    locaDateInfo,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    appQueryTypeLabel: '选择应用分类',
    filterAppList:[],
    selectedFilterAppList:[],
    submitData:{},
}
const mutations = {
    [UPDATE_APPTYPEFORM_TYPE](state,item) {
        state.selectedBehaviorType=item;
    },
    [UPDATE_APPTYPEFORM_DATETYPE](state, item) {
      state.selectedDateType=item;
      resetDate(state);
    },
    [UPDATE_APPTYPEFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_APPTYPEFORM_FILTERSELECTED](state, data) {
        state.filterAppList=data;
    },
    [ADD_APPTYPEFORM_ITEM](state,item) {
        if(item.code){
            state.selectedFilterAppList.push(item);
        }
    },
    [DELETE_APPTYPEFORM_ITEM](state,item) {
        let index=-1
        for(let i=0;i<state.selectedFilterAppList.length;i++){
            if(state.selectedFilterAppList[i].code==item.code){
                index=i
            }
        }
        state.selectedFilterAppList.splice(index, 1);
    },
    [DELETE_APPTYPEFORM](state) {
        resetDate(state);
        state.selectedBehaviorType=behaviorTypeList[0];
        state.selectedDateType=locaDateInfo.typeList[0];
        state.filterAppList=[];
        state.selectedFilterAppList=[];
        state.submitData={};
    },
    [SUBMIT_APPTYPEFORM](state) {
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        let appTypes='';
        state.selectedFilterAppList.forEach((item)=>{
            appTypes+=item.code+',';
        });
        if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
            state.submitData={
                   error:APP_0119
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0149
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0150
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0151
            }
        }else if(state.selectedFilterAppList.length<1){
            state.submitData={
                   error:APP_0120
            }
        }else{
            state.submitData = {
              expType: 'appTypeFilter',
              exps: [{
                type: state.selectedBehaviorType.id,
                startTime: state.selectedStartDate,
                endTime: state.selectedEndDate,
                timeType: state.selectedDateType.id,
                appTypes: appTypes.substring(0, appTypes.length - 1),
                expCode:state.selectedBehaviorType.id===behaviorTypeList[0].id?'01081':'01080',
              }]
            }
        }
        
    },  
}

export default {
    state,
    mutations,
}