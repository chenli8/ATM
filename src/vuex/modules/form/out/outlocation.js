import {
    UPDATE_OUTLOCATIONFORM_DATETYPE,
    UPDATE_OUTLOCATIONFORM_DATE,
    DELETE_OUTLOCATIONFORM,
    SUBMIT_OUTLOCATIONFORM,
    UPDATE_OUTLOCATION_FILTERSELECTED,
    ADD_OUTLOCATION_AREAITEM,
    DELETE_OUTLOCATION_AREAITEM
} from '../../../mutation-types';
import {dateInfo,locationTypeList,coordinaryTypeList,getWeek} from '../../../business-util';
import {APP_0127,APP_0158,APP_0159,APP_0160,APP_01271} from '../../../app-messages';
const locaDateInfo=dateInfo();

const state = {
    formName: 'outLocationForm',
    dateInfo:locaDateInfo,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    timeLabel:'输出类型',
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    timeLabel:'时间范围',
     //选择城市
    cityLabel:'城市范围',
     //城市下拉请求后数组
    filterAreaList:[],
    //城市选中项数组
    selectedFilterAreaList:[],
    //提交数据
    submitData:{},
}

const mutations = {
    [UPDATE_OUTLOCATIONFORM_DATETYPE](state, item) {
        state.selectedDateType=item;
    },
    [UPDATE_OUTLOCATIONFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_OUTLOCATION_FILTERSELECTED](state, data) {
        state.filterAreaList=data;
    },//添加城市选中
    [ADD_OUTLOCATION_AREAITEM](state,item) {
        if(item.code){
            state.selectedFilterAreaList.push(item);
            for(let i=0,len=state.selectedFilterAreaList.length;i<len;i++){
                const obj=state.selectedFilterAreaList[i];
                if(obj.code==='-1'){
                   state.selectedFilterAreaList=state.selectedFilterAreaList.slice(i,i+1);
                   break
                }
            }        
       }
    },//删除城市选中
    [DELETE_OUTLOCATION_AREAITEM](state,item) {
        let index=-1;
        for(let i=0,len=state.selectedFilterAreaList.length;i<len;i++){
            const obj=state.selectedFilterAreaList[i];
            if(obj.name===item.name){
                index=i;
                break;
            }
        }
        state.selectedFilterAreaList.splice(index,1);
    },
    [DELETE_OUTLOCATIONFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.submitData={};
        state.filterAreaList=[]
        state.selectedFilterAreaList=[]
    },
   [SUBMIT_OUTLOCATIONFORM](state) {
        state.selectedEndDate=state.selectedStartDate
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        let cityIds='';
        state.selectedFilterAreaList.forEach(function(item){
            cityIds+=item.code+',';
        });
        if(!state.selectedStartDate){
            state.submitData={
                   error:APP_0127
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0158
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0159
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0160
            }
        }else if(cityIds.substring(0,cityIds.length-1)==''){
            state.submitData={
                   error:APP_01271
            }
        }else{
            state.submitData= {
                'expType': 'outputDetail',
                'exps': [{
                    'areaCodeList': cityIds.substring(0,cityIds.length-1),
                    'type':'location',
                    'startTime': state.selectedStartDate,
                    'endTime': state.selectedStartDate,
                    'timeType':state.selectedDateType.id,
                    'coordinateType':'1',
                    'expCode':'02020'
                }]
            }
        }
       
    },

}

export default {
    state,
    mutations
}