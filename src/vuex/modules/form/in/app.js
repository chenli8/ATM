import {
    UPDATE_APPFORM_TYPE,
    UPDATE_APPFORM_DATETYPE,
    UPDATE_APPFORM_DATE,
    UPDATE_APPFORM_QUERYTYPE,
    UPDATE_APPFORM_FILTERSELECTED,
    ADD_APPFORM_ITEM,
    DELETE_APPFORM_ITEM,
    DELETE_APPFORM,
    SUBMIT_APPFORM,
    UPDATE_APP_OR_FORM,
    UPDATE_APP_SELECTIVITY_FORM,
    ADD_APPFORM_FILE,
    DELETE_APPFORM_FILE,
} from '../../../mutation-types';
import {dateInfo,appQueryTypeList,behaviorTypeList,getWeek,tagExpressionList,appSelectivityList} from '../../../business-util';
import {APP_0117,APP_0118,APP_0146,APP_0147,APP_0148,APP_01181} from '../../../app-messages';
const locaDateInfo=dateInfo();
const resetDate=(state)=>{
    state.selectedStartDate='';
    state.selectedEndDate='';
}
const state = {
    formName: 'appForm',
    behaviorTypeLabel:'应用行为',
    behaviorTypeList,
    selectedBehaviorType:behaviorTypeList[0],
    locaDateInfo,
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    appQueryTypeLabel: '选择应用',
    //选择应用类型集合
    appQueryTypeList,
    //选中应用类型
    selectedAppQueryType:appQueryTypeList[0],
    // 根据所选应用检索
    filterAppLabel:'根据所选应用检索',
    filterAppList:[],
    selectedFilterAppList:[],
    //and or
    expression:'表达式选择',
    selectedId:1,
    tagExpressionList,
    appExpressionName:tagExpressionList[0].name,
    //二选一  筛选方式
    selectivityLabel:'筛选方式',
    selectedIdSelectivity:1,
    appSelectivityList,
    //上传路经
    fileList:[],
    fileLabel:'上传文件',
    //文件名
    fileListname:[],
    //根路径输出位置
    html:'',
    submitData:{},
}
const mutations = {
    [UPDATE_APPFORM_TYPE](state,item) {
        state.selectedBehaviorType=item;
    },
    [UPDATE_APPFORM_DATETYPE](state, item) {
      state.selectedDateType=item;
      resetDate(state);
    },
    [UPDATE_APPFORM_DATE](state,item) {
        item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_APPFORM_QUERYTYPE](state, item) {
        state.selectedAppQueryType=item;
        state.filterAppList=[];
        state.selectedFilterAppList=[];
    },
    [UPDATE_APPFORM_FILTERSELECTED](state, data) {
        let arr=[]
        for(var i=0;i<data.length;i++){
            let str=''+data[i].appName+','+data[i].packageName+','+data[i].platform+'';
            arr.push({appName:str,hash:data[i].hash,packageName:data[i].packageName,platform:data[i].platform})

        }
        state.filterAppList=arr;
    },
    [ADD_APPFORM_ITEM](state,item) {
        if(item.appName){
            state.selectedFilterAppList.push(item);
        }
    },
    [DELETE_APPFORM_ITEM](state,item) {
         let index=-1
        for(let i=0;i<state.selectedFilterAppList.length;i++){
            if(state.selectedFilterAppList[i].hash==item.hash){
                index=i
            }
        }
        state.selectedFilterAppList.splice(index, 1);
    },
    [UPDATE_APP_OR_FORM](state,data){
        state.selectedId=data.id;
        state.appExpressionName=data.name;
    },
    [UPDATE_APP_SELECTIVITY_FORM](state,data){
        state.selectedIdSelectivity=data.id
        state.fileListname=[];
        state.fileList=[];
        state.filterAppList=[];
        state.selectedFilterAppList=[];
        state.selectedAppQueryType=appQueryTypeList[0];
    },
    [ADD_APPFORM_FILE](state,newFile) {
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(newFile.basePath)
        state.fileListname.push(newFile.fileName)
        state.html=newFile.html;
    },
    [DELETE_APPFORM_FILE](state,newFileName) {
      if(state.fileListname.indexOf(newFileName)!==-1){
         state.fileListname.splice(newFileName,1);
      }
      state.fileList=[];
    },
    [DELETE_APPFORM](state) {
        resetDate(state);
        state.selectedBehaviorType=behaviorTypeList[0];
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedAppQueryType=appQueryTypeList[0];
        state.filterAppList=[];
        state.selectedFilterAppList=[];
        state.appExpressionName=tagExpressionList[0].name;
        state.submitData={};
        state.html="";
        state.fileListname=[];
        state.fileList=[];
    },
    [SUBMIT_APPFORM](state) {
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id);
        let appIds='';
        state.selectedFilterAppList.forEach((item)=>{
            appIds+=item.hash+',';
        })
        if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
            state.submitData={
                   error:APP_0117
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0146
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0147
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0148
            }
        }else if(state.selectedIdSelectivity===1){
            if(state.selectedFilterAppList.length<1){
                state.submitData={
                   error:APP_0118
                }
            }else{
                change()
            }
        }else if(state.selectedIdSelectivity===2){
            if(state.fileList.length===0){
                state.submitData={
                   error:APP_01181
                }
            }else{
                change()
            }
        }else{
            change()
        }
        function change(){
            state.submitData= {
                  expType: 'appFilter',
                  exps: [{
                    opType:state.appExpressionName,
                    type: state.selectedBehaviorType.id,
                    startTime: state.selectedStartDate,
                    endTime: state.selectedEndDate,
                    timeType: state.selectedDateType.id,
                    appIds:appIds.length?appIds.substring(0, appIds.length - 1):'',
                    inputPath:state.fileList.length?state.fileList[0]:'',
                    expCode:state.selectedBehaviorType.id===behaviorTypeList[0].id?'01071':'01070'
                  }]
            }
        }
    }
}

export default {
    state,
    mutations,
}