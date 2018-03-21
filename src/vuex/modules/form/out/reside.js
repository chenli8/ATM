import {
	DELETE_RESIDEFORM,
    SUBMIT_RESIDEFORM,
    UPDATE_RESIDEFORM,
    UPDATE_RESIDEFORM_DATETYPE,
    UPDATE_RESIDEFORM_DATE,
    UPDATE_RESIDEFORM_FILTERSELECTED,
    ADD_RESIDEFORM_AREAITEM,
    DELETE_RESIDEFORM_AREAITEM,
    UPADATERESIDEFORADIUS,
    UPDATE_RESIDEGROUPBYFORM,
} from '../../../mutation-types';
import {resideList,dateInfo,domainList} from '../../../business-util'; 
import {APP_0208,APP_0211} from '../../../app-messages';
const locaDateInfo=dateInfo(); 
const resetArea=(state)=>{
    state.filterAreaList=[];
    state.selectedFilterAreaList=[];
}
const state = {
    formName:'resideForm',
    //选中项-显示文字
    selectedText: "工作地居住地",
    //选中项-ID
    selectedId: resideList[0],
    //数据格式-显示文字
    listLabel:"输出类型",
    //数组
    resideList,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[2],
    selectedTimeList:[],
    locaDateInfo,
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    // 工作地城市
    filterAreaLabel:'城市',
    filterAreaList:[],
    selectedFilterAreaList:[],
    //通勤半径
    radiustLabel:'通勤半径',
    radius:'',
    groupByTypeLbel:'区域类型',
    domainList,
    groupByType:domainList[0],
    //提交数据
    submitData:{}
}

const mutations = {
	[UPDATE_RESIDEFORM](state,item){
       state.selectedId=item
    },
    //日期
    [UPDATE_RESIDEFORM_DATETYPE](state, item) {
       state.selectedDateType=item;
    },
    [UPDATE_RESIDEFORM_DATE](state,item) {
       item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    //---------------工作地城市---------------//
    [UPDATE_RESIDEFORM_FILTERSELECTED](state, data) {
        state.filterAreaList=data;
    },
    //---------------工作地城市------添加---------//
    [ADD_RESIDEFORM_AREAITEM](state,item) {
        if(item.code){
           state.selectedFilterAreaList.push(item);
        }
    },
    //---------------工作地城市----删除-----------//
    [DELETE_RESIDEFORM_AREAITEM](state,item) {
        let index=-1
        for(let i=0;i<state.selectedFilterAreaList.length;i++){
            if(state.selectedFilterAreaList[i].code==item.code){
                index=i
            }
        }
        state.selectedFilterAreaList.splice(index, 1);
    },
    //通勤半径
    [UPADATERESIDEFORADIUS](state,radioState,radioEnd){
        if(!radioState&&!radioEnd){
            state.radius=''
        }else{
            state.radius=radioState+'<'+radioEnd
        }
    },
    //区域类型
    [UPDATE_RESIDEGROUPBYFORM](state,item){
       state.groupByType=item
    },
    //全部删除
    [DELETE_RESIDEFORM](state) {
        state.selectedId=resideList[0];
        state.selectedDateType=locaDateInfo.typeList[2];
        state.groupByType=domainList[0]
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.radius=''
        resetArea(state)
        state.submitData={};
    },
    [SUBMIT_RESIDEFORM](state) {
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
                   error:APP_0208
            }
        }else if(!newradius){
            state.submitData={
                   error:APP_0211
            }
        }
        else{
            let cityList='';
            state.selectedFilterAreaList.forEach(function(item){
                cityList+=item.code+',';
            });
            state.submitData= {
                'expType': 'outputStatics',
                'exps': [{
                    'type':'workHomeCity',
                    'dimType':state.selectedId.id,
                    'month': state.selectedStartDate,
                    'cityList':cityList,
                    'radius':state.radius.replace('<','-'),
                    'groupByType':state.groupByType.id,
                    'expCode':'03036'
                }]
            }
        }
    }
}
export default {
    state,
    mutations
}
    
                
                
                
                
                
                
