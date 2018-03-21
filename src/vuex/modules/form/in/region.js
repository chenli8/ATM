import {
    UPDATE_REGIONFORM_REGIONTYPE,
    UPDATE_REGIONFORM_DATETYPE,
    UPDATE_REGIONFORM_DATE,
    UPDATE_REGIONFORM_AREATYPE,
    ADD_REGIONFORM_AREAITEM,
    UPDATE_REGIONFORM_FILTERSELECTED,
    DELETE_REGIONFORM_AREAITEM,
    DELETE_REGIONFORM,
    SUBMIT_REGIONFORM,
  
} from '../../../mutation-types';
import {dateInfo,areaTypeList,regionTypeList,getWeek} from '../../../business-util';
import {APP_0115,APP_0116,APP_0143,APP_0144,APP_0145} from '../../../app-messages';
const locaDateInfo=dateInfo();
const resetDate=(state)=>{
    state.selectedStartDate='';
    state.selectedEndDate='';
}
const resetArea=(state)=>{
    state.filterAreaList=[];
    state.selectedFilterAreaList=[];
}
const reset=(state)=>{
    state.selectedRegionType=regionTypeList[0];
    state.selectedDateType=locaDateInfo.typeList[0];
    state.selectedAreaType=areaTypeList[0];
    resetArea(state);
    resetDate(state);
}
const state = {
    formName: 'regionForm',
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
    // 根据所选地域检索
    filterAreaLabel:'根据所选地域检索',
    filterAreaList:[],
    selectedFilterAreaList:[],
    submitData:{},
}
const mutations = {
    [UPDATE_REGIONFORM_REGIONTYPE](state,item) {
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
                state.selectedAreaType=areaTypeList[2];
                state.showDateType=false;
            break;
        }
    },
    [UPDATE_REGIONFORM_DATETYPE](state, item) {
      state.selectedDateType=item;
      resetDate(state);
    },
    [UPDATE_REGIONFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_REGIONFORM_AREATYPE](state, item) {
      state.selectedAreaType=item;
      resetArea(state);
    },
    [UPDATE_REGIONFORM_FILTERSELECTED](state, data) {
        state.filterAreaList=data;
    },
    [ADD_REGIONFORM_AREAITEM](state,item) {
        if(item.code){
           state.selectedFilterAreaList.push(item);
        }
    },
    [DELETE_REGIONFORM_AREAITEM](state,item) {
        state.selectedFilterAreaList.splice(item, 1);
    },
    [DELETE_REGIONFORM](state) {
       reset(state); 
       state.showDateType=true;
       state.submitData={};
    },
    [SUBMIT_REGIONFORM](state) {
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id);
        let cityIds='';
        state.selectedFilterAreaList.forEach(function(item){
            cityIds+=item.code+',';
        });
        let data={
            'expType': 'areaFilter',
            'exps':[{
                'type':state.selectedRegionType.id,
                'areaType':state.selectedAreaType.id,
                'areaCodeList':cityIds.substring(0,cityIds.length-1),
            }]
        };
        switch(state.selectedRegionType.id){
            case regionTypeList[0].id:
            data.exps[0].startTime=state.selectedStartDate;
            data.exps[0].endTime=state.selectedEndDate;
            data.exps[0].timeType=state.selectedDateType.id;
            data.exps[0].expCode='01050';
            break;
            case regionTypeList[1].id:
            data.exps[0].startTime=state.selectedStartDate;
            data.exps[0].endTime=state.selectedEndDate;
            data.exps[0].expCode='01051';
            break;
            case regionTypeList[2].id:
            data.exps[0].expCode='01052';
            break;
        }
        state.submitData={};
        if(state.selectedRegionType!=regionTypeList[2]){
            if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
                state.submitData={
                       error:APP_0115
                }
             }else if(!syncId && state.selectedDateType.id==1){
                state.submitData={
                       error:APP_0143
                }
            }else if(!syncId && state.selectedDateType.id==2){
                state.submitData={
                       error:APP_0144
                }
            }else if(!syncId && state.selectedDateType.id==3){
                 state.submitData={
                       error:APP_0145
                }
            }else if(cityIds.substring(0,cityIds.length-1)==''){
                state.submitData={
                       error:APP_0116
                }
            }else{
                state.submitData= data;
            }
        }else if(cityIds.substring(0,cityIds.length-1)==''){
            state.submitData={
                   error:APP_0116
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