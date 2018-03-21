import {
    UPDATE_SUBDISTRICTFORM_DATETYPE,
    UPDATE_SUBDISTRICTFORM_DATE,
    DELETE_SUBDISTRICTFORM,
    SUBMIT_SUBDISTRICTFORM,
    UPDATE_SUBDISTRICTFORM_FILTERSELECTED,
    ADD_SUBDISTRICTFORM_ITEM,
    DELETE_SUBDISTRICTFORM_ITEM
} from '../../../mutation-types';
import {dateInfo,coordinaryTypeList,getWeek} from '../../../business-util';
import {APP_0212,APP_0213} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'subdistrictForm',
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

    [UPDATE_SUBDISTRICTFORM_DATETYPE](state, item) {
        state.selectedDateType=item;
    },
    [UPDATE_SUBDISTRICTFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    // 
    [UPDATE_SUBDISTRICTFORM_FILTERSELECTED](state, data) {
        state.filterAppList=data;
    },
    [ADD_SUBDISTRICTFORM_ITEM](state,item) {
        if(item.code){
            state.selectedFilterAppList.push(item);
        }
    },
    [DELETE_SUBDISTRICTFORM_ITEM](state,item) {
        let index=-1
        for(let i=0;i<state.selectedFilterAppList.length;i++){
            if(state.selectedFilterAppList[i].code==item.code){
                index=i
            }
        }
        state.selectedFilterAppList.splice(index, 1);
    },
    [DELETE_SUBDISTRICTFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[2];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.filterAppList=[];
        state.selectedFilterAppList=[];
        state.submitData={};
    },
    [SUBMIT_SUBDISTRICTFORM](state) {
        state.selectedEndDate=state.selectedStartDate
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
        let cityList='';
        state.selectedFilterAppList.forEach((item)=>{
            cityList+=item.code+',';
        });
        let data={
            expType: 'outputDetail',
            exps:[{
                "type":"residenceCommunity",
                'month': state.selectedStartDate,
                'cityList': cityList.substring(0, cityList.length - 1),
                'expCode':'02062'
            }]
        };
        if(!state.selectedStartDate){
            state.submitData={
                   error:APP_0212
            }
        }else if(cityList.substring(0,cityList.length-1)==''){
            state.submitData={
                   error:APP_0213
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