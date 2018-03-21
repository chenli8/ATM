import {

    UPDATE_HOTFORM_DATETYPE,
    UPDATE_HOTFORM_DATE,
    UPDATE_HOTFORM_FILTERSELECTED,
    ADD_HOTFORM_ITEM,
    DELETE_HOTFORM_ITEM,
    DELETE_HOTFORM,
    SUBMIT_HOTFORM,
    UPDATE_HOT_FILTERSELECTED,
    ADD_HOT_AREAITEM,
    DELETE_HOT_AREAITEM
} from '../../../mutation-types';
import {dateInfo,appQueryTypeList,getWeek} from '../../../business-util';
import {APP_0133,APP_0134,APP_0164,APP_0165,APP_0166,APP_01341} from '../../../app-messages';
const locaDateInfo=dateInfo();
const resetDate=(state)=>{
    state.selectedStartDate='';
    state.selectedEndDate='';
}
const state = {
    formName: 'hotForm',
    locaDateInfo,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[2],
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    appQueryTypeLabel: '热力图中心城市中文名称',
    filterAppList:[],
    selectedFilterAppList:[],
    datatime:[3],
    submitData:{},
    //选择城市
    cityLabel:'城市范围',
     //城市下拉请求后数组
    filterAreaList:[],
    //城市选中项数组
    selectedFilterAreaList:[],
}
const mutations = {
  
    [UPDATE_HOTFORM_DATETYPE](state, item) {
      state.selectedDateType=item;
      resetDate(state);
    },
    [UPDATE_HOTFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_HOTFORM_FILTERSELECTED](state, data) {
        state.filterAppList=data;
    },
    [ADD_HOTFORM_ITEM](state,item) {
        
        if(item.code){
          state.selectedFilterAppList.pop()
          state.selectedFilterAppList.push(item);
        }
    },
    [DELETE_HOTFORM_ITEM](state,item) {
        state.selectedFilterAppList.splice(state.selectedFilterAppList.indexOf(item), 1);
    },
    [DELETE_HOTFORM](state) {
        resetDate(state);
        state.selectedDateType=locaDateInfo.typeList[2];
        state.filterAppList=[];
        state.selectedFilterAppList=[];
        state.submitData={};
        state.filterAreaList=[]
        state.selectedFilterAreaList=[]
    },
    [UPDATE_HOT_FILTERSELECTED](state, data) {
        state.filterAreaList=data;
    },//添加城市选中
    [ADD_HOT_AREAITEM](state,item) {
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
    [DELETE_HOT_AREAITEM](state,item) {
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
    [SUBMIT_HOTFORM](state) {
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        let appTypes='';
        state.selectedFilterAppList.forEach((item)=>{
            appTypes+=item.name+',';
        });
        let cityIds='';
        state.selectedFilterAreaList.forEach(function(item){
            cityIds+=item.code+',';
        });
        if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
            state.submitData={
               error:APP_0133
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0164
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0165
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0166
            }
        }else if(cityIds.substring(0,cityIds.length-1)==''){
            state.submitData={
                   error:APP_01341
            }
        }else if(appTypes.substring(0, appTypes.length - 1)==''){
            state.submitData={
               error:APP_0134
            }
        }else{
            state.submitData = {
              expType: 'outputChart',
              exps: [{
                'areaCodeList': cityIds.substring(0,cityIds.length-1),
                'startTime': state.selectedStartDate,
                'endTime': state.selectedEndDate,
                'timeType': state.selectedDateType.id,
                'city': appTypes.substring(0, appTypes.length - 1),
                'coordinateType':'1',
                'expCode':'04000',
              }]
            }
        }
        
    },  
}

export default {
    state,
    mutations,
}