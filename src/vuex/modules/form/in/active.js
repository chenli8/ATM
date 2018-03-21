import {
    UPDATE_ACTIVEFORM_DATETYPE,
    UPDATE_ACTIVEFORM_DATE,
    UPDATE_ACTIVEFORM_LOCATIONTYPE,
    ADD_ACTIVEFORM_TIME,
    DELETE_ACTIVEFORM_TIME,
    DELETE_ACTIVEFORM,
    SUBMIT_ACTIVEFORM,
    UPDATE_ACTIVEBEHAVIORFORM_LOCATIONTYPE,
    UPDATE_ACTIVEBEHAVIORTABCHANGE_LOCATIONTYPE,
} from '../../../mutation-types';
import {dateInfo,timeList,activeTypelist,paichong,activeBehaviorList,getWeek} from '../../../business-util';
import {APP_0121,APP_01211,APP_01212,APP_01213} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'activeForm',
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    timeLabel:'选择小时段',
    //选择小时段
    timeList:timeList(),
    selectedTimeList:[],
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
    //设备活跃类型
    activeBehaviorLabel:'设备活跃类型',
    //设备活跃类型
    activeBehaviorList,
    //选中设备活跃类型
    activeBehaviorType:activeBehaviorList[0],
    //tab记录
    active_TabId:0,
    //提交
    submitData:{},
    async:false
}

const mutations = {
    [UPDATE_ACTIVEFORM_DATETYPE](state, item) {
      state.selectedDateType=item;
    },
    [UPDATE_ACTIVEFORM_DATE](state,item) {
       item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_ACTIVEFORM_LOCATIONTYPE](state, item){
        state.selectedBehaviorType=item;
    },
    // 设备活跃类型
    [UPDATE_ACTIVEBEHAVIORFORM_LOCATIONTYPE](state, item){
        state.activeBehaviorType=item;
    },
    //tab切换重置
    [UPDATE_ACTIVEBEHAVIORTABCHANGE_LOCATIONTYPE](state, item){
        state.active_TabId=item;
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedTimeList=[];
        state.selectedBehaviorType=activeTypelist[0];
        state.activeBehaviorType=activeBehaviorList[0];
        state.selectedStartDate='';
        state.selectedEndDate='';
        if(item=='1'){
            state.async=true
        }else{
            state.async=false
        }
    },
    [ADD_ACTIVEFORM_TIME](state, item) {
      state.selectedTimeList.push(item)
    },
    [DELETE_ACTIVEFORM_TIME](state, item) {
        let index=-1;
        for(let i=0,len=state.selectedTimeList.length;i<len;i++){
                if(state.selectedTimeList[i].id===item.id){
                      index=i;
                        break;
                }
        }
        state.selectedTimeList.splice(index,1);
    },
    [DELETE_ACTIVEFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedTimeList=[];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.selectedBehaviorType=activeTypelist[0];
        state.submitData={};
    },
    [SUBMIT_ACTIVEFORM](state) {
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)

        let hourSegments='';
        state.selectedTimeList.forEach((obj)=>{
                hourSegments+=obj.id+','
        });
        hourSegments=hourSegments?hourSegments.substring(0,hourSegments.length-1):'';
        if(state.selectedBehaviorType.id===activeTypelist[0].id){
            hourSegments=""
        }
        if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
            state.submitData={
                   error:APP_0121
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_01211
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_01212
            }
        }else if(!syncId && state.selectedDateType.id==3){
            state.submitData={
                   error:APP_01213
            }
        } else{
            //活跃行为0  活跃属性1
            if(state.active_TabId===0){
                state.submitData= {
                    expType: 'activeFilter',
                    exps: [{
                        'hourSegments': hourSegments,
                        'activeType':state.selectedBehaviorType.id,
                        'timeType':state.selectedDateType.id,   
                        'startTime': state.selectedStartDate,
                        'endTime': state.selectedEndDate, 
                        'expCode':state.selectedBehaviorType.id===activeTypelist[0].id?'01040':'01041',
                        }]
                }
            }else{
                state.submitData= {
                    expType: 'activeBehaviorFilter',
                    exps: [{
                        'activeBehaviorType':state.activeBehaviorType.id,
                        'timeType':state.selectedDateType.id,   
                        'startTime': state.selectedStartDate,
                        'endTime': state.selectedEndDate, 
                        'expCode':'01091',
                        }]
                }
            }
         }
    }
}
export default {
    state,
    mutations,
}