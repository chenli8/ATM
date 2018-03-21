import {
	DELETE_PLACEFORM,
    SUBMIT_PLACEFORM,
    UPDATE_PLACEFORM,
    UPDATE_PLACEFORM_DATETYPE,
    UPDATE_PLACEFORM_DATE,
    UPDATE_PLACEFORM_FILTERSELECTED,
    ADD_PLACEFORM_AREAITEM,
    DELETE_PLACEFORM_AREAITEM,
    UPDATE_NEWPLACEFORM_FILTERSELECTED,
    ADD_NEWPLACEFORM_AREAITEM,
    DELETE_NEWPLACEFORM_AREAITEM,
    UPADATEPLACEFORADIUS,
} from '../../../mutation-types';
import {placeList,dateInfo} from '../../../business-util'; 
import {APP_0207,APP_0210} from '../../../app-messages';
const locaDateInfo=dateInfo(); 
const resetArea=(state)=>{
    state.filterAreaList=[];
    state.selectedFilterAreaList=[];
    state.filterPlaceList=[];
    state.selectedFilterPlaceList=[];
}
const state = {
    formName:'placeForm',
    //选中项-显示文字
    selectedText: "工作地居住地",
    //选中项-ID
    selectedId: placeList[0],
    //数据格式-显示文字
    listLabel:"输出类型",
    //数组
    placeList,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[2],
    selectedTimeList:[],
    locaDateInfo,
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    // 工作地城市
    filterAreaLabel:'工作地城市',
    filterAreaList:[],
    selectedFilterAreaList:[],
    // 居住地城市
    filterPlaceLabel:'居住地城市',
    filterPlaceList:[],
    selectedFilterPlaceList:[],
    //通勤半径
    radiustLabel:'通勤半径',
    radius:'',
    //提交数据
    submitData:{}
}

const mutations = {
	[UPDATE_PLACEFORM](state,item){
       state.selectedId=item
    },
    //日期
    [UPDATE_PLACEFORM_DATETYPE](state, item) {
       state.selectedDateType=item;
    },
    [UPDATE_PLACEFORM_DATE](state,item) {
       item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    //---------------工作地城市---------------//
    [UPDATE_PLACEFORM_FILTERSELECTED](state, data) {
        state.filterAreaList=data;
    },
    //---------------工作地城市------添加---------//
    [ADD_PLACEFORM_AREAITEM](state,item) {
        if(item.code){
           state.selectedFilterAreaList.push(item);
        }
    },
    //---------------工作地城市----删除-----------//
    [DELETE_NEWPLACEFORM_AREAITEM](state,item) {
        state.selectedFilterPlaceList.splice(item, 1);
    },
    //---------------居住地城市---------------//
    [UPDATE_NEWPLACEFORM_FILTERSELECTED](state, data) {
        state.filterPlaceList=data;
    },
    //---------------居住地城市------添加---------//
    [ADD_NEWPLACEFORM_AREAITEM](state,item) {
        if(item.code){
           state.selectedFilterPlaceList.push(item);
        }
    },
    //---------------居住地城市----删除-----------//
    [DELETE_PLACEFORM_AREAITEM](state,item) {
        state.selectedFilterAreaList.splice(item, 1);
    },
    //通勤半径
    [UPADATEPLACEFORADIUS](state,radioState,radioEnd){
        if(!radioState&&!radioEnd){
            state.radius=''
        }else{
            state.radius=radioState+'<'+radioEnd
        }
    },
    //全部删除
    [DELETE_PLACEFORM](state) {
        state.selectedId=placeList[0];
        state.selectedDateType=locaDateInfo.typeList[2];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.radius=''
        resetArea(state)
        state.submitData={};
    },
    [SUBMIT_PLACEFORM](state) {
        let arr=state.radius.split('<')
        let newradius=true
        let reg=/^[0-9]*$/g
        let reg1=/^[0-9]*$/g
        if(arr[0]||arr[1]){
            if(arr[1]&&arr[0]){
                if(arr[1]>arr[0]){
                    if(reg.test(arr[0])&&reg1.test(arr[1])&&arr[0]>=0&&arr[1]>=0){
                         newradius=true
                    }else{
                         newradius=false
                    }
                }else{
                    newradius=false
                }
            }else if(arr[0]&&!reg.test(arr[0])){
                 newradius=false
            }else if(arr[1]&&!reg.test(arr[1])){
                 newradius=false
            }else{
                 newradius=true
            }
        }
        if(!state.selectedStartDate){
            state.submitData={
                   error:APP_0207
            }
        }else if(!newradius){
            state.submitData={
                   error:APP_0210
            }
        }else{
            let workCityList='';
            let homeCityList='';
            state.selectedFilterAreaList.forEach(function(item){
                workCityList+=item.code+',';
            });
            state.selectedFilterPlaceList.forEach(function(item){
                homeCityList+=item.code+',';
            });
            state.submitData= {
                'expType': 'outputDetail',
                'exps': [{
                    'type':'workHomeCity',
                    'filterType':state.selectedId.id,
                    'month': state.selectedStartDate,
                    'workCityList':workCityList,
                    'homeCityList':homeCityList,
                    'radius':state.radius.replace('<','-'),
                    'expCode':'02061'
                }]
            }
        }
       
    },
    
}
export default {
    state,
    mutations
}
    
                
                
                
                
                
                
