import {
    UPDATE_PUTSUBDISTRICTFORM_DATETYPE,
    UPDATE_PUTSUBDISTRICTFORM_DATE,
    DELETE_PUTSUBDISTRICTFORM,
    SUBMIT_PUTSUBDISTRICTFORM,
    UPDATE_PUTSUBDISTRICTFORM_FILTERSELECTED,
    ADD_PUTSUBDISTRICTFORM_ITEM,
    DELETE_PUTSUBDISTRICTFORM_ITEM
} from '../../../mutation-types';
import {dateInfo,coordinaryTypeList,getWeek} from '../../../business-util';
import {APP_0214,APP_0215} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'putsubdistrictForm',
    dateInfo:locaDateInfo,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[2],
    timeLabel:'输出类型',
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    appQueryTypeLabel: '所在城市列表',
    filterAppList:[],
    selectedFilterAppList:[],
    //提交数据
    submitData:{},
}

const mutations = {

    [UPDATE_PUTSUBDISTRICTFORM_DATETYPE](state, item) {
        state.selectedDateType=item;
    },
    [UPDATE_PUTSUBDISTRICTFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    // 
    [UPDATE_PUTSUBDISTRICTFORM_FILTERSELECTED](state, data) {
        state.filterAppList=data;
    },
    [ADD_PUTSUBDISTRICTFORM_ITEM](state,item) {
        if(item.code){
            state.selectedFilterAppList.push(item);
        }
    },
    [DELETE_PUTSUBDISTRICTFORM_ITEM](state,item) {
        let index=-1
        for(let i=0;i<state.selectedFilterAppList.length;i++){
            if(state.selectedFilterAppList[i].code==item.code){
                index=i
            }
        }
        state.selectedFilterAppList.splice(index, 1);
    },
    [DELETE_PUTSUBDISTRICTFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[2];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.filterAppList=[];
        state.selectedFilterAppList=[];
        state.submitData={};
    },
    [SUBMIT_PUTSUBDISTRICTFORM](state) {
        state.selectedEndDate=state.selectedStartDate
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        let cityList='';
        state.selectedFilterAppList.forEach((item)=>{
            cityList+=item.code+',';
        });
        let data={
            expType: 'outputStatics',
            exps:[{
                "type":"residenceCommunity",
                'month': state.selectedStartDate,
                'cityList': cityList.substring(0, cityList.length - 1),
                'expCode':'03037'
            }]
        };
        if(!state.selectedStartDate){
            state.submitData={
                   error:APP_0214
            }
        }else if(cityList.substring(0,cityList.length-1)==''){
            state.submitData={
                   error:APP_0215
            }
        }else{
             state.submitData= data;
        }
    }
}

export default {
    state,
    mutations
}