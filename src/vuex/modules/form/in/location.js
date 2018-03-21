import {
    UPDATE_LOCATIONFORM_DATETYPE,
    UPDATE_LOCATIONFORM_DATE,
    UPDATE_LOCATIONFORM_LOCATIONTYPE,
    UPDATE_LOCATIONFORM_COORDINARYTYPE,
    ADD_LOCATIONFORM_TIME,
    DELETE_LOCATIONFORM_TIME,
    ADD_LOCATIONFORM_FILE,
    DELETE_LOCATIONFORM_FILE,
    DELETE_LOCATIONFORM,
    SUBMIT_LOCATIONFORM,
    UPDATELOCATIONTYPE,
    UPDATE_LOCATION_FILTERSELECTED,
    ADD_LOCATION_AREAITEM,
    DELETE_LOCATION_AREAITEM
} from '../../../mutation-types';
import {dateInfo,timeList,locationTypeList,coordinaryTypeList,TIMESTR,getWeek} from '../../../business-util';
import {APP_0113,APP_0114,APP_0140,APP_0141,APP_0142,APP_01131} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'locationForm',
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
    //上传文件名
    fileListname:[],
    //上传路经
    fileList:[],
    //提交数据
    submitData:{},
    //根路径输出位置
    html:'',
    //下载围栏按钮是否显示 
    fenceUpload:false,
    //选择城市
    cityLabel:'城市范围',
    //城市下拉请求后数组
    filterAreaList:[],
    //城市选中项数组
    selectedFilterAreaList:[],
}
const mutations = {
    [UPDATELOCATIONTYPE](state, item){
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(item)
        state.fileListname.push(item)
        state.fenceUpload=true
    },
    [UPDATE_LOCATIONFORM_DATETYPE](state, item) {
       state.selectedDateType=item;
    },
    [UPDATE_LOCATIONFORM_DATE](state,item) {
       item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_LOCATIONFORM_LOCATIONTYPE](state,item) {
        state.selectedLocationType=item;
        state.fileListname=[]
        state.fileList=[]
        state.html=''
        state.fenceUpload=false
    },
    [UPDATE_LOCATIONFORM_COORDINARYTYPE](state, item) {
      state.selectedCoordinaryType=item;
    },
    [ADD_LOCATIONFORM_TIME](state, item) {
        state.selectedTimeList.push(item);
    },
    //拉下ajax获取
    [UPDATE_LOCATION_FILTERSELECTED](state, data) {
        state.filterAreaList=data;
    },
    //添加
    [ADD_LOCATION_AREAITEM](state,item) {
        if(item.code){
           state.selectedFilterAreaList.push(item);
        }
    },
    //删除
    [DELETE_LOCATION_AREAITEM](state,item) {
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
    [DELETE_LOCATIONFORM_TIME](state, item) {
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
    [ADD_LOCATIONFORM_FILE](state,newFile) {
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(newFile.basePath)
        state.fileListname.push(newFile.fileName)
        state.html=newFile.html
    },
    [DELETE_LOCATIONFORM_FILE](state,newFileName) {
        if(state.fileListname.indexOf(newFileName)!==-1){
             state.fileListname.splice(newFileName,1);
        }
        state.fileList=[];
    },
    [DELETE_LOCATIONFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[0];
        state.selectedTimeList=[];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.selectedLocationType=locationTypeList[0];
        state.selectedCoordinaryType=coordinaryTypeList[0];
        state.fileList=[];
        state.fileListname=[];
        state.submitData={};
        state.html='';
        state.fenceUpload=false;
        state.filterAreaList=[];
        state.selectedFilterAreaList=[];
    },
    [SUBMIT_LOCATIONFORM](state) {
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
                   error:APP_0113
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0140
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0141
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0142
            }
        }else if(cityIds.substring(0,cityIds.length-1)==''){
            state.submitData={
                   error:APP_01131
            }
        }else if(state.fileList.length<1){
            state.submitData={
                   error:APP_0114
            }
        }else{
            state.submitData= {
                'expType': 'locationFilter',
                'exps': [{
                    'areaCodeList': cityIds.substring(0,cityIds.length-1),
                    'hourSegments': hourSegments,
                    'coordinateType':state.selectedCoordinaryType.id,
                    'timeType':state.selectedDateType.id,
                    'startTime': state.selectedStartDate,
                    'endTime': state.selectedEndDate,
                    'uploadType':state.selectedLocationType.id,
                    'inputPath': state.fileList.length?state.fileList[0]:'',
                    'expCode':state.selectedLocationType.id===locationTypeList[0].id?'01010':state.selectedLocationType.id===locationTypeList[1].id?'01011':'01012',
                }]
            }

        }

      },
}

export default {
    state,
    mutations,
}

