import {
    UPDATE_GHETTOFORM_DATETYPE,
    UPDATE_GHETTOFORM_DATE,
    UPDATE_GHETTOFORM_LOCATIONTYPE,
    UPDATE_GHETTOFORM_COORDINARYTYPE,
    ADD_GHETTOFORM_FILE,
    DELETE_GHETTOFORM_FILE,
    DELETE_GHETTOFORM,
    SUBMIT_GHETTOFORM,
    UPDATEGHETTOTYPE,
    UPADATEGHETTOFORMTYPE,
    UPADATEGHETTOFOCITYLIST,
    UPADATEGHETTOFORADIUS,
    ADD_GHETTOFORM_AREAITEM,
    DELETE_GHETTOFORM_AREAITEM
} from '../../../mutation-types';
import {dateInfo,locationGhettoTypeList,coordinaryTypeList,TIMESTR,filterTypeList} from '../../../business-util';
import {APP_0204,APP_0205,APP_0206,APP_0209} from '../../../app-messages';
const locaDateInfo=dateInfo();
const state = {
    formName: 'ghettoForm',
    //选中日期类型
    selectedDateType:locaDateInfo.typeList[2],
    selectedTimeList:[],
    locaDateInfo,
    //选中日期范围
    selectedStartDate:'',
    selectedEndDate:'',
    //位置类型
    locationTypeLabel: '位置类型',
    //位置类型集合
    locationGhettoTypeList,
    //选中位置类型
    selectedLocationType:locationGhettoTypeList[0],
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
    //根路径输出位置
    html:'',
    //下载围栏按钮是否显示 
    fenceUpload:false,
    //筛选类型
    filterTypeLabel:'筛选类型',
    //工作地 居住地
    filterTypeList,
    //默认选中项
    selectedFilterTypeType:filterTypeList[0],
    //通勤半径
    radiustLabel:'通勤半径',
    //通勤半径值
    radius:'',
    //城市
    cityListLabel:'城市',
    filterGhettoList:[],
    selectedFilterGhettoList:[],
    //提交数据
    submitData:{},
}
const mutations = {
    [UPDATEGHETTOTYPE](state, item){
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(item)
        state.fileListname.push(item)
        state.fenceUpload=true
    },
    [UPDATE_GHETTOFORM_DATETYPE](state, item) {
       state.selectedDateType=item;
    },
    [UPDATE_GHETTOFORM_DATE](state,item) {
       item.options.tag.indexOf('start')!=-1?state.selectedStartDate=item.value:state.selectedEndDate=item.value;
    },
    [UPDATE_GHETTOFORM_LOCATIONTYPE](state,item) {
        state.selectedLocationType=item;
        state.fileListname=[]
        state.fileList=[]
        state.html=''
        state.selectedCoordinaryType=coordinaryTypeList[0];
    },
    [UPDATE_GHETTOFORM_COORDINARYTYPE](state, item) {
        state.selectedCoordinaryType=item;
    },
    [ADD_GHETTOFORM_FILE](state,newFile) {
        state.fileList=[];
        state.fileListname=[];
        state.fileList.push(newFile.basePath)
        state.fileListname.push(newFile.fileName)
        state.html=newFile.html
    },
    [DELETE_GHETTOFORM_FILE](state,newFileName) {
        if(state.fileListname.indexOf(newFileName)!==-1){
             state.fileListname.splice(newFileName,1);
        }
        state.fileList=[];
    },
    //居住类型
    [UPADATEGHETTOFORMTYPE](state,item){
         state.selectedFilterTypeType=item;
    },
    //城市
    [UPADATEGHETTOFOCITYLIST](state, data) {
        state.filterGhettoList=data;
    },
    //---------------居住地城市------添加---------//
    [ADD_GHETTOFORM_AREAITEM](state,item) {
        if(item.code){
           state.selectedFilterGhettoList.push(item);
        }
    },
    //---------------居住地城市----删除-----------//
    [DELETE_GHETTOFORM_AREAITEM](state,item) {
        state.selectedFilterGhettoList.splice(item, 1);
    },
    //通勤半径
    [UPADATEGHETTOFORADIUS](state,radioState,radioEnd){
        if(!radioState&&!radioEnd){
            state.radius=''
        }else{
             state.radius=radioState+'<'+radioEnd
        }
    },
    [DELETE_GHETTOFORM](state) {
        state.selectedDateType=locaDateInfo.typeList[2];
        state.selectedTimeList=[];
        state.selectedStartDate='';
        state.selectedEndDate='';
        state.selectedLocationType=locationGhettoTypeList[0];
        state.fileList=[];
        state.fileListname=[];
        state.submitData={};
        state.html='';
        state.fenceUpload=false;
        state.selectedFilterTypeType=filterTypeList[0];
        state.radius=''
        state.filterGhettoList=[];
        state.selectedFilterGhettoList=[];
        state.selectedCoordinaryType=coordinaryTypeList[0];
    },
    [SUBMIT_GHETTOFORM](state) {
        let cityList='';
            state.selectedFilterGhettoList.forEach(function(item){
                cityList+=item.code+',';
            });
        if(state.selectedLocationType.id===locationGhettoTypeList[3].id){
            state.selectedCoordinaryType=coordinaryTypeList[1];
            if(window.allPath){
                state.fileList.pop()
                state.fileList.push(window.allPath)
                state.html=window.upLoadPath;
            }
       }else if(state.selectedLocationType.id===locationGhettoTypeList[0].id){
            state.selectedCoordinaryType.id=''
       }
       //判断是否上传文件正确
       let sum=true;
       if(state.selectedLocationType.id!==locationGhettoTypeList[0].id){
           if(state.fileList.length<1){
                sum=false
           }else{
                sum=true
           }
       }
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
                   error:APP_0204
            }
        }else if(cityList.length===0){
            state.submitData={
                   error:APP_0205
            }
        }else if(!newradius){
            state.submitData={
                   error:APP_0209
            }
        }else if(!sum){//上传文件
            state.submitData={
                   error:APP_0206
            }
        }else{
            state.submitData= {
                'expType': 'workHomeCityFilter',
                'exps': [{
                    'filterType':state.selectedFilterTypeType.id,
                    'month': state.selectedStartDate,
                    'cityList':cityList,
                    'radius':state.radius.replace('<','-'),
                    'fenceType':state.selectedLocationType.id,
                    'coordinateType':state.selectedCoordinaryType.id,
                    'inputPath': state.fileList.length?state.fileList[0]:'',
                    'expCode':'01092'
                }]
            }
         }
    }
}

export default {
    state,
    mutations,
}

