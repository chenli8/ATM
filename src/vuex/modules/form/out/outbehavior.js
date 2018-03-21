import {
    UPDATE_OUTBEHAVIORFORM_DATETYPE,
    UPDATE_OUTBEHAVIORFORM_DATE,
    UPDATE_OUTBEHAVIORFORM_COORDINARYTYPE,
    DELETE_OUTBEHAVIORFORM,
    SUBMIT_OUTBEHAVIORFORM,
    UPDATE_OUTBEHAVIORFORM_FILTERSELECTED,
    ADD_OUTBEHAVIORFORM_ITEM,
    DELETE_OUTBEHAVIORFORM_ITEM
} from '../../../mutation-types';
import {dateInfo,coordinaryTypeList,behaviorTypeList,getWeek} from '../../../business-util';
import {APP_0126,APP_0155,APP_0156,APP_0157} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'outBehaviorForm',
    dateInfo:locaDateInfo,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    timeLabel:'应用行为',
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    behaviorTypeList,
    //坐标类型集合
    coordinaryTypeList:behaviorTypeList,
    //选中坐标类型
    selectedCoordinaryType:behaviorTypeList[0],
    appQueryTypeLabel: '选择应用分类',
    filterAppList:[],
    selectedFilterAppList:[],
    //提交数据
    submitData:{},
}

const mutations = {

    [UPDATE_OUTBEHAVIORFORM_DATETYPE](state, item) {
        state.selectedDateType=item;
    },
    [UPDATE_OUTBEHAVIORFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_OUTBEHAVIORFORM_COORDINARYTYPE](state, item) {
        state.selectedCoordinaryType=item;
    },
    // 
    [UPDATE_OUTBEHAVIORFORM_FILTERSELECTED](state, data) {
        state.filterAppList=data;
    },
    [ADD_OUTBEHAVIORFORM_ITEM](state,item) {
        if(item.code){
            state.selectedFilterAppList.push(item);
        }
    },
    [DELETE_OUTBEHAVIORFORM_ITEM](state,item) {
        let index=-1
        for(let i=0;i<state.selectedFilterAppList.length;i++){
            if(state.selectedFilterAppList[i].code==item.code){
                index=i
            }
        }
        state.selectedFilterAppList.splice(index, 1);
    },
    [DELETE_OUTBEHAVIORFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.selectedCoordinaryType=behaviorTypeList[0];
        state.filterAppList=[];
        state.selectedFilterAppList=[];
        state.submitData={};
    },
    [SUBMIT_OUTBEHAVIORFORM](state) {
        state.selectedEndDate=state.selectedStartDate
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        let appTypes='';
        state.selectedFilterAppList.forEach((item)=>{
            appTypes+=item.code+',';
        });
        let data={
            expType: 'outputDetail',
            exps:[{
                'type':state.selectedCoordinaryType.id,
                'startTime': state.selectedStartDate,
                'endTime': state.selectedStartDate,
                'timeType':state.selectedDateType.id,
                'appTypes': appTypes.substring(0, appTypes.length - 1)
            }]
        };
        switch(state.selectedCoordinaryType.id){
            case behaviorTypeList[0].id:
            data.exps[0].expCode='02011';
            break;
            case behaviorTypeList[1].id:
            data.exps[0].expCode='02010';
            break;
        }

        if(!state.selectedStartDate){
            state.submitData={
                   error:APP_0126
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0155
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0156
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0157
            }
        }else{
             state.submitData= data;
        }
      
    },

}

export default {
    state,
    mutations
}