import {
    UPDATE_BEHAVIORFORM_DATETYPE,
    UPDATE_BEHAVIORFORM_DATE,
    UPDATE_BEHAVIORFORM_COORDINARYTYPE,
    DELETE_BEHAVIORFORM,
    SUBMIT_BEHAVIORFORM,
    UPDATE_BEHAVIORFORM_FILTERSELECTED,
    ADD_BEHAVIORFORM_ITEM,
    DELETE_BEHAVIORFORM_ITEM
} from '../../../mutation-types';
import {dateInfo,coordinaryTypeList,behaviorTypeList,getWeek} from '../../../business-util';
import {APP_0129,APP_0170,APP_0171,APP_0172} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'behaviorForm',
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

    [UPDATE_BEHAVIORFORM_DATETYPE](state, item) {
        state.selectedDateType=item;
    },
    [UPDATE_BEHAVIORFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_BEHAVIORFORM_COORDINARYTYPE](state, item) {
        state.selectedCoordinaryType=item;
    },
    [UPDATE_BEHAVIORFORM_FILTERSELECTED](state, data) {
        state.filterAppList=data;
    },
    [ADD_BEHAVIORFORM_ITEM](state,item) {
        if(item.code){
            state.selectedFilterAppList.push(item);
        }
    },
    [DELETE_BEHAVIORFORM_ITEM](state,item) {
        let index=-1
        for(let i=0;i<state.selectedFilterAppList.length;i++){
            if(state.selectedFilterAppList[i].code==item.code){
                index=i
            }
        }
        state.selectedFilterAppList.splice(index, 1);
    },
    [DELETE_BEHAVIORFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.selectedCoordinaryType=behaviorTypeList[0];
        state.submitData={};
        state.filterAppList=[];
        state.selectedFilterAppList=[];
    },
    [SUBMIT_BEHAVIORFORM](state) {
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        let appTypes='';
        state.selectedFilterAppList.forEach((item)=>{
            appTypes+=item.code+',';
        });
        if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
            state.submitData={
                   error:APP_0129 
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0170
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0171
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0172
            }
        }else{
                state.submitData= {
                    'expType': 'outputStatics',
                    'exps': [{
                        'type':state.selectedCoordinaryType.id,
                        'startTime': state.selectedStartDate,
                        'endTime': state.selectedEndDate,
                        'timeType':state.selectedDateType.id,
                        'appTypes': appTypes.substring(0, appTypes.length - 1),
                        'expCode':state.selectedCoordinaryType.id===behaviorTypeList[0].id?'03032':'03030',
                    }]
                }
        }
       
    },

}

export default {
    state,
    mutations
}