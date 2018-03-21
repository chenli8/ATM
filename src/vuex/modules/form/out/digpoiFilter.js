import {
    UPDATE_DIGPOIFILTERFORM_DATETYPE,
    UPDATE_DIGPOIFILTERFORM_DATE,
    UPDATE_DIGPOIFILTERFORM_TYPE,
    UPDATE_DIGPOIFILTERFORM_COORDINARYTYPE,
    ADD_DIGPOIFILTERFORM_TIME,
    DELETE_DIGPOIFILTERFORM_TIME,
    ADD_DIGPOIFILTERFORM_FILE,
    DELETE_DIGPOIFILTERFORM_FILE,
    DELETE_DIGPOIFILTERFORM,
    SUBMIT_DIGPOIFILTERFORM,
    UPDATE_DIGPOIFILTER_FILTERSELECTED,
    ADD_DIGPOIFILTER_AREAITEM,
    DELETE_DIGPOIFILTER_AREAITEM,
    UPDATE_DIGPOIFILTERWORKINGDAY_TYPE,
    UPDATE_DIGPOIFILTERSELECTIVITY_TYPE,
    UPDATE_VALUEDIGPOIFILTERFORM_TYPE,
    UPDATE_TAGDIGPOIFILTER_FILTERSELECTED,
    ADD_TAGDIGPOIFILTER_AREAITEM,
    DELETE_TAGDIGPOIFILTER_AREAITEM
} from '../../../mutation-types';
import {dateInfo,timeList,locationTypeList,coordinaryTypeList,TIMESTR,getWeek,workingDayList,selectivityList,source} from '../../../business-util';
import {APP_0198,APP_0199,APP_0200,APP_0201,APP_0202,APP_0203} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'digpoiFilterForm',
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[0],
    //是否工作日
    workingDaylabel:'是否工作日',
    //工作日选中id
    workingDayType:0,
    //工作日
    workingDayList,
    timeLabel:'选择小时段',
    //选择小时段
    timeList:timeList(),
    selectedTimeList:[],
    locaDateInfo,
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    //选择POI类型
    tagLabel:'选择POI类型',
    //poi类型列表
    filterTagAreaList:[],
    //poi类型列表 选中数组
    tagListSelected:[],
    //二选一
    selectivitylabel:'选择POI',
    //二选一选中项
    selectivityId:selectivityList[0],
    //二选一arr
    selectivityList,
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
    //poilabel
    poilabel:'模糊搜索POI',
    //POI列表数组
    filterAreaList:[],
    //POI列表选中项数组
    selectedFilterAreaList:[],
     //选择城市
    cityLabel:'城市范围',
    //城市数组
    source,
    //城市选中项
    cityValue:'',
    animate:false,
     //提示信息
    promptingMessage:false,
}
const mutations = {
   /* [UPDATEDIGPOIFILTERTYPE](state, item){
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(item)
        state.fileListname.push(item)
        state.fenceUpload=true
    },*/
    [UPDATE_DIGPOIFILTERFORM_DATETYPE](state, item) {
       state.selectedDateType=item;
       if(item.id===1){
          state.workingDayType=0
       }else{
          state.workingDayType=workingDayList[0];
       }
    },
    [UPDATE_DIGPOIFILTERFORM_DATE](state,item) {
       item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_DIGPOIFILTERFORM_TYPE](state,item) {
        state.selectedLocationType=item;
        state.fileListname=[]
        state.fileList=[]
        state.html=''
        state.fenceUpload=false
    },
    [UPDATE_DIGPOIFILTERFORM_COORDINARYTYPE](state, item) {
      state.selectedCoordinaryType=item;
    },
    [ADD_DIGPOIFILTERFORM_TIME](state, item) {
        state.selectedTimeList.push(item);
    },
    //拉下ajax获取
    [UPDATE_DIGPOIFILTER_FILTERSELECTED](state, data) {
        state.filterAreaList=data;
    },
    //添加
    [ADD_DIGPOIFILTER_AREAITEM](state,item) {
        if(item.code){
           state.selectedFilterAreaList.push(item);
        }
    },
    //删除
    [DELETE_DIGPOIFILTER_AREAITEM](state,item) {
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
    [DELETE_DIGPOIFILTERFORM_TIME](state, item) {
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
    [ADD_DIGPOIFILTERFORM_FILE](state,newFile) {
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(newFile.basePath)
        state.fileListname.push(newFile.fileName)
        state.html=newFile.html
    },
    [DELETE_DIGPOIFILTERFORM_FILE](state,newFileName) {
        if(state.fileListname.indexOf(newFileName)!==-1){
             state.fileListname.splice(newFileName,1);
        }
        state.fileList=[];
    },
    [UPDATE_DIGPOIFILTERWORKINGDAY_TYPE](state, item) {
        state.workingDayType=item;
    },
    //POI类型列表
     //TAG拉下ajax获取
    [UPDATE_TAGDIGPOIFILTER_FILTERSELECTED](state, data) {
        state.filterTagAreaList=data;
    },
    //添加 POI类型列表查询
    [ADD_TAGDIGPOIFILTER_AREAITEM](state,item) {
        if(item.code){
            if(state.tagListSelected.length+1>5){
              state.promptingMessage=true    
            }
           state.tagListSelected.push(item);
        }
    },
    //删除
    [DELETE_TAGDIGPOIFILTER_AREAITEM](state,item) {
        let index=-1;
        for(let i=0,len=state.tagListSelected.length;i<len;i++){
            const obj=state.tagListSelected[i];
            if(obj.name===item.name){
                index=i;
                break;
            }
        }
        if(state.tagListSelected.length-1<=5){
            state.promptingMessage=false
        }
        state.tagListSelected.splice(index,1);
    },
    [UPDATE_DIGPOIFILTERSELECTIVITY_TYPE](state, item) {
       state.selectivityId=item;
       state.fileListname=[]
       state.fileList=[]
       state.html=''
       state.fenceUpload=false;
       state.selectedFilterAreaList=[]
       state.selectedCoordinaryType=coordinaryTypeList[0]; //选中坐标类型
       state.selectedLocationType=locationTypeList[0];//选中位置类型
    },
    //修改城市
    [UPDATE_VALUEDIGPOIFILTERFORM_TYPE](state,item) {
        if(item){
            state.cityValue=item
        }
    },
    [DELETE_DIGPOIFILTERFORM](state) {
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
        state.workingDayType=0;
        state.tagListSelected=[];
        state.selectivityId=selectivityList[0];
        state.cityValue=''
        state.filterTagAreaList=[]
    },
    [SUBMIT_DIGPOIFILTERFORM](state) {
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
       //poi列表  不是城市
        let cityIds='';
        state.selectedFilterAreaList.forEach(function(item){
            cityIds+=item.code+',';
        });
        let codeListStr='';
        state.tagListSelected.forEach((obj)=>{
                codeListStr+=obj.code+','
        });
        if(!state.selectedStartDate||!state.selectedEndDate||state.selectedStartDate>state.selectedEndDate){
            state.submitData={
                   error:APP_0198
            }
        }else if(!syncId && state.selectedDateType.id==1){
            state.submitData={
                   error:APP_0199
            }
        }else if(!syncId && state.selectedDateType.id==2){
            state.submitData={
                   error:APP_0200
            }
        }else if(!syncId && state.selectedDateType.id==3){
             state.submitData={
                   error:APP_0201
            }
        }else if(!state.cityValue){
             state.submitData={
                   error:APP_0202
            }
        }else if(state.tagListSelected.length===0||state.tagListSelected.length>5){//  poi类型列表
             state.submitData={
                   error:APP_0203
            }
        }/*else if(state.selectivityId.id===1){
                if(cityIds.substring(0,cityIds.length-1)==''){//poi列表
                    state.submitData={
                           error:APP_0188
                    }
                 }else{
                    change()
                 }
        }else if(state.selectivityId.id===2){
            if(state.fileList.length<1){
                state.submitData={
                       error:APP_0189
                }
            }else{
                change()
            }
        }*/else{
            change()
        }
        function change(){
             let data= {
                'expType': 'outputStatics',
                'exps': [{
                    'type':'poiType',
                    'timeType':state.selectedDateType.id,
                    'startTime': state.selectedStartDate,
                    'endTime': state.selectedEndDate,
                    'poiTypes':codeListStr,
                    'hourSegments': hourSegments,
                    'city':state.cityValue.code,
                    'expCode':'03034',
                }]
            }
           /* if(state.selectivityId.id===1){
                    data.exps[0].poiList=cityIds.substring(0,cityIds.length-1);//poi   
            }else if(state.selectivityId.id===2){
                    data.exps[0].uploadType=state.selectedLocationType.id;
                    data.exps[0].inputPath=state.fileList.length?state.fileList[0]:''; 
                    if(state.selectedLocationType.id!==locationTypeList[2].id){
                        data.exps[0].coordinateType=state.selectedCoordinaryType.id;
                    }
            }*/
            if(state.workingDayType!==0){
                    data.exps[0].isWeekday=state.workingDayType.id;
            }
            state.submitData=data
        }
    }
}

export default {
    state,
    mutations,
}

