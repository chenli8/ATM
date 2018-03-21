import {
    UPDATE_OUTREGIONFORM_REGIONTYPE,
    UPDATE_OUTREGIONFORM_DATETYPE,
    UPDATE_OUTREGIONFORM_DATE,
    UPDATE_OUTREGIONFORM_AREATYPE,
    DELETE_OUTREGIONFORM,
    SUBMIT_OUTREGIONFORM,
} from '../../../mutation-types';
import {dateInfo,areaTypeList,regionTypeList,getWeek} from '../../../business-util';
import {APP_0128,APP_0152,APP_0153,APP_0154} from '../../../app-messages';
const locaDateInfo=dateInfo();
const resetDate=(state)=>{
    state.selectedStartDate='';
    state.selectedEndDate='';
}
const reset=(state)=>{
    state.selectedRegionType=regionTypeList[0];
    state.selectedDateType=locaDateInfo.typeList[0];
    state.selectedAreaType=areaTypeList[0];
    resetDate(state);
}
const state = {
    formName: 'outRegionForm',
    regionTypeLabel:'行政区划类型',
    //地域行为类型集合
    regionTypeList,
    //选中地域行为类型
    selectedRegionType:regionTypeList[0],
    showDateType:true,
    locaDateInfo,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    //选择地域
    areaTypeLabel: '选择地域',
    //地域类型集合
    areaTypeList,
    //选中地域类型
    selectedAreaType:areaTypeList[0],
    submitData:{},
}
const mutations = {
    [UPDATE_OUTREGIONFORM_REGIONTYPE](state,item) {
        reset(state);
        state.selectedRegionType=item;
        switch(state.selectedRegionType.id){
            case regionTypeList[0].id:
                state.showDateType=true;
            break;
            case regionTypeList[1].id:
                state.selectedDateType=locaDateInfo.typeList[2];
                state.selectedAreaType=areaTypeList[1];
                state.showDateType=true;
            break;
            case regionTypeList[2].id:
                state.selectedAreaType=areaTypeList[1];
                state.showDateType=false;
            break;
        }
    },
    [UPDATE_OUTREGIONFORM_DATETYPE](state, item) {
      state.selectedDateType=item;
      resetDate(state);
    },
    [UPDATE_OUTREGIONFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_OUTREGIONFORM_AREATYPE](state, item) {
      state.selectedAreaType=item;
    },
    [DELETE_OUTREGIONFORM](state) {
        reset(state); 
       state.showDateType=true;
       state.submitData={};
    },
    [SUBMIT_OUTREGIONFORM](state) {
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        let data={
            'expType': 'outputDetail',
            'exps':[{
                'type':state.selectedRegionType.id,
                'areaType':state.selectedAreaType.id,
            }]
        };
        switch(state.selectedRegionType.id){
            case regionTypeList[0].id:
            data.exps[0].startTime=state.selectedStartDate;
            data.exps[0].endTime=state.selectedEndDate;
            data.exps[0].timeType=state.selectedDateType.id;
            data.exps[0].expCode='02040';
            break;
            case regionTypeList[1].id:
            data.exps[0].startTime=state.selectedStartDate;
            data.exps[0].endTime=state.selectedEndDate;
            data.exps[0].expCode='02041';
            break;
            case regionTypeList[2].id:
            data.exps[0].expCode='02042';
            break;
        }
        state.submitData={};
        if(state.selectedRegionType!=regionTypeList[2]){
            if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
                state.submitData={
                       error:APP_0128
                }
            }else if(!syncId && state.selectedDateType.id==1){
                state.submitData={
                       error:APP_0152
                }
            }else if(!syncId && state.selectedDateType.id==2){
                state.submitData={
                       error:APP_0153
                }
            }else if(!syncId && state.selectedDateType.id==3){
                 state.submitData={
                       error:APP_0154
                }
            }else{
                state.submitData= data;
            }
        }else{
             state.submitData= data;
        }
      
    },  
}

export default {
    state,
    mutations,
}