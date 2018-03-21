import {
    UPDATE_OUTACTIVEFORM_DATETYPE,
    UPDATE_OUTACTIVEFORM_DATE,
    UPDATE_OUTACTIVEFORM_LOCATIONTYPE,
    DELETE_OUTACTIVEFORM,
    SUBMIT_OUTACTIVEFORM,
    UPDATE_OUTACTIVEGROUPFORM_LOCATIONTYPE
} from '../../../mutation-types';
import {dateInfo,activeTypelist,paichong,groupTypeList,getWeek} from '../../../business-util';
import {APP_0132,APP_01321,APP_01322,APP_01323} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'outActiveForm',
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    locaDateInfo,
    activeTypelist,
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    //选中位置类型
    behaviorTypeLabel:"活跃统计类型",
    //坐标类型集合
    behaviorTypeList:activeTypelist,
    //选中坐标类型
    selectedBehaviorType:activeTypelist[0],
    //设备统计类型lebel
    groupTypeLabel:'设备统计类型',
    //设备统计类型
    groupTypeList,
    //选中设备统计类型
    groupType:groupTypeList[0],
    //提交
    submitData:{},
}

const mutations = {
    [UPDATE_OUTACTIVEFORM_DATETYPE](state, item) {
      state.selectedDateType=item;
    },
    [UPDATE_OUTACTIVEFORM_DATE](state,item) {
       item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_OUTACTIVEFORM_LOCATIONTYPE](state, item){
        state.selectedBehaviorType=item;
    },
    [UPDATE_OUTACTIVEGROUPFORM_LOCATIONTYPE](state,item){
        state.groupType=item
    },
    [DELETE_OUTACTIVEFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.selectedBehaviorType=activeTypelist[0];
        state.submitData={};
    },
    [SUBMIT_OUTACTIVEFORM](state) {
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
            state.submitData={
                   error:APP_0132
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_01321
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_01322
            }
        }else if(!syncId && state.selectedDateType.id==3){
            state.submitData={
                   error:APP_01323
            }
        } 
       else{
            state.submitData= {
                expType: 'outputStatics',
                exps: [{
                    'type':state.selectedBehaviorType.id===activeTypelist[0].id?'active':'activeByHour',
                    'timeType':state.selectedDateType.id,   
                    'startTime': state.selectedStartDate,
                    'endTime': state.selectedEndDate, 
                    'groupByType':state.groupType.id,
                    'expCode':state.selectedBehaviorType.id===activeTypelist[0].id?'03010':'03011',
                }]
             }
        }
       
    },
}

export default {
    state,
    mutations,
}