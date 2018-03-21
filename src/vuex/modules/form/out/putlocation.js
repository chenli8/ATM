import {
    UPDATE_PUTLOCATIONFORM_DATETYPE,
    UPDATE_PUTLOCATIONFORM_DATE,
    UPDATE_PUTLOCATIONFORM_LOCATIONTYPE,
    UPDATE_PUTLOCATIONFORM_COORDINARYTYPE,
    ADD_PUTLOCATIONFORM_TIME,
    DELETE_PUTLOCATIONFORM_TIME,
    ADD_PUTLOCATIONFORM_FILE,
    DELETE_PUTLOCATIONFORM_FILE,
    DELETE_PUTLOCATIONFORM,
    SUBMIT_PUTLOCATIONFORM,
    UPDATEPUTLOCATION,
    UPDATE_PUTLOCATION_FILTERSELECTED,
    ADD_PUTLOCATION_AREAITEM,
    DELETE_PUTLOCATION_AREAITEM
} from '../../../mutation-types';
import {dateInfo,timeList,TIMESTR,locationTypeList,coordinaryTypeList,getWeek} from '../../../business-util';
import {APP_0123,APP_0124,APP_0161,APP_0162,APP_0163,APP_01241} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'putLocationForm',
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    timeLabel:'选择小时段',
    //选择小时段
    timeList:timeList(),
    selectedTimeList:[],
    locaDateInfo,
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    //位置类型
    locationTypeLabel: '位置类型',
    //位置类型集合
    locationTypeList,
    //选中位置类型
    selectedLocationType:locationTypeList[0],
    //坐标类型label
    coordinaryTypeLabel: '坐标类型',
    //坐标类型集合
    coordinaryTypeList,
    //选中坐标类型
    selectedCoordinaryType:coordinaryTypeList[0],
    //上传文件
    fileLabel:'上传文件',
    //上传路经
    fileList:[],
    //上传文件名
    fileListname:[],
    //提交数据
    submitData:{},
    //根路径输出位置
    html:'',
    fenceUpload:false,
     //选择城市
    cityLabel:'城市范围',
     //城市下拉请求后数组
    filterAreaList:[],
    //城市选中项数组
    selectedFilterAreaList:[],
}

const mutations = {
    [UPDATEPUTLOCATION](state, item){
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(item)
        state.fileListname.push(item)
        state.fenceUpload=true
    },
    [UPDATE_PUTLOCATIONFORM_DATETYPE](state, item) {
      state.selectedDateType=item;
    },
    [UPDATE_PUTLOCATIONFORM_DATE](state,item) {
       item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_PUTLOCATIONFORM_LOCATIONTYPE](state,item) {
        state.selectedLocationType=item;
        state.fileListname=[]
        state.fileList=[]
        state.html=''
        state.fenceUpload=false
    },
    [UPDATE_PUTLOCATIONFORM_COORDINARYTYPE](state, item) {
      state.selectedCoordinaryType=item;
    },
    [ADD_PUTLOCATIONFORM_TIME](state, item) {
        state.selectedTimeList.push(item);
    },//删除小时段
    [DELETE_PUTLOCATIONFORM_TIME](state, item) {
       let index=-1;
        for(let i=0,len=state.selectedTimeList.length;i<len;i++){
            const obj=state.selectedTimeList[i];
            if(obj.id===item.id){
                index=i;
                break;
            }
        }
        state.selectedTimeList.splice(index,1);
    },
    [ADD_PUTLOCATIONFORM_FILE](state,newFile) {
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(newFile.basePath)
        state.fileListname.push(newFile.fileName)
        state.html=newFile.html
    },
    [DELETE_PUTLOCATIONFORM_FILE](state,newFileName) {
        if(state.fileListname.indexOf(newFileName)!==-1){
             state.fileListname.splice(newFileName,1);
        }
        state.fileList=[];
    },
    [DELETE_PUTLOCATIONFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedTimeList=[];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.selectedLocationType=locationTypeList[0];
        state.selectedCoordinaryType=coordinaryTypeList[0];
        state.fileList=[];
        state.submitData={};
        state.html="";
        state.fileListname=[]
        state.fenceUpload=false
        state.filterAreaList=[]
        state.selectedFilterAreaList=[]
    },
    [UPDATE_PUTLOCATION_FILTERSELECTED](state, data) {
        state.filterAreaList=data;
    },//添加城市选中
    [ADD_PUTLOCATION_AREAITEM](state,item) {
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
    [DELETE_PUTLOCATION_AREAITEM](state,item) {
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
    [SUBMIT_PUTLOCATIONFORM](state) {
       //位置类型(选择围栏)
        let syncId=getWeek(state.selectedStartDate,state.selectedEndDate,state.selectedDateType.id)
       if(state.selectedLocationType.id===locationTypeList[2].id){
            state.selectedCoordinaryType=coordinaryTypeList[1];
            if(window.allPath){
                state.fileList.pop()
                state.fileList.push(window.allPath)
                state.html=window.upLoadPath;
            }
       }
       let hourSegments='';
       state.selectedTimeList.forEach((obj)=>{
                hourSegments+=obj.id+','
       });
       hourSegments=hourSegments?hourSegments.substring(0,hourSegments.length-1):TIMESTR;
       let cityIds='';
        state.selectedFilterAreaList.forEach(function(item){
            cityIds+=item.code+',';
        });
        if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
            state.submitData={
                   error:APP_0123
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0161
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0162
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0163
            }
        }else if(cityIds.substring(0,cityIds.length-1)==''){
            state.submitData={
                   error:APP_01241
            }
        }else if(state.fileList.length<1){
            state.submitData={
                    error:APP_0124
            }
        }else{
            state.submitData= {
                expType: 'outputDetail',
                exps: [{
                    'areaCodeList': cityIds.substring(0,cityIds.length-1),
                    'type':state.selectedLocationType.id==1?'coordinateByCycle':'coordinateByFence',
                    'outputCoordinateType':'1',
                    'hourSegments': hourSegments,
                    'inputCoordinateType':state.selectedCoordinaryType.id,
                    'timeType':state.selectedDateType.id,   
                    'startTime': state.selectedStartDate,
                    'endTime': state.selectedEndDate,
                    'inputPath': state.fileList.length?state.fileList[0]:'',  
                    'expCode':state.selectedLocationType.id===locationTypeList[0].id?'02050':state.selectedLocationType.id===locationTypeList[1].id?'02051':'02052',
                }]
            }
        }
       
    },
}

export default {
    state,
    mutations,
}