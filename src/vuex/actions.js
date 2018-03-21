import * as types from './mutation-types';
import * as msgs from './app-messages';

/**---------------------------ID匹配条件 表单-----------------------------------------------------**/
window.upLoadPath="";

//删除
export const deleteIdForm = ({dispatch}) =>{
    dispatch(types.DELETE_IDFORM);
};
//更新选中项
export const upadateIdFormSelected = ({dispatch},item) =>{
    dispatch(types.UPDATE_IDFORM_SELECTED,item);
};
// 上传文件
export const addIdFormFile = ({dispatch},newFile,callback) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
     } else {
         let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType=0',
         url=process.env.NODE_ENV.apiPath+basePath;
         let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name); 
         Vue.http.post(url,formData).then(res => { 
               if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                    dispatch(types.ADD_IDFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101
                        });
                    }

               }else{
                    callback({
                             type:'error',
                             text:'上传文件失败'
                    });
               }
             
         })
         .catch(console.log)
    }
};
// 删除上传文件
export const deleteIdFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_IDFORM_FILE,newFileName);
};
// 提交数据
export const submitIdForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_IDFORM);
};

/**---------------------------ID匹配条件 控制台---------------------------------------------------**/
//打开|关闭 控制台
export const switchIdConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_IDCONSOLE,sw);
};


/**---------------------------位置条件 表单------------------------------------------------------**/
//修改日期类型
export const updateLocationFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_LOCATIONFORM_DATETYPE,item);
};
//修改日期
export const updateLocationFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_LOCATIONFORM_DATE,item);
};
//修改位置类型
export const updateLocationFormLocationType = ({dispatch},item) =>{
    dispatch(types.UPDATE_LOCATIONFORM_LOCATIONTYPE,item);
};
//修改坐标类型
export const updateLocationFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_LOCATIONFORM_COORDINARYTYPE,item);
};
//新增小时段
export const addLocationFormTime = ({dispatch},item) =>{
    dispatch(types.ADD_LOCATIONFORM_TIME,item);
};
//删除小时段
export const deleteLocationFormTime = ({dispatch},item) =>{
    dispatch(types.DELETE_LOCATIONFORM_TIME,item);
};
//下拉框检索条件发生变化
export const upadateLocationChange = ({dispatch},val) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
        Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_LOCATION_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addLocationFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_LOCATION_AREAITEM,item);
};
//删除选中项
export const deleteLocationFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_LOCATION_AREAITEM,item);
};
// 上传文件
export const addLocationFormFile = ({dispatch},newFile,callback,index) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
    } else {
        let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType='+index+'',
        url=process.env.NODE_ENV.apiPath+basePath;
        let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name);
         Vue.http.post(url,formData).then(res => {
               if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                   dispatch(types.ADD_LOCATIONFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101,
                             html:res.body.resultContent
                        });
                    }
               }else if(res.body.resultCode===6){
                        callback({
                             type:'error',
                             text:'上传文件超过指定行数'
                        });
               }else if(res.body.resultCode===2){
                        callback({
                             type:'error',
                             text:'上传文件数据格式校验失败'
                        });
               }else if(res.body.resultCode===3){
                       callback({
                             type:'error',
                             text:'上传经纬度数据超过最大面积'
                        });
                }else {
                        callback({
                             type:'error',
                             text:'上传文件失败'
                        });
               }
          })
         .catch(console.log)
    }        
};

// 删除上传文件
export const deleteLocationFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_LOCATIONFORM_FILE,newFileName);
};
//删除
export const deleteLocationForm = ({dispatch}) =>{
    dispatch(types.DELETE_LOCATIONFORM);
};
// 提交数据
export const submitLocationForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_LOCATIONFORM);
};
/**---------------------------位置条件 控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchLocationConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_LOCATIONCONSOLE,sw);
};



/**---------------------------设备属性 表单---------------------------------------------------**/

//更新选中项
export const upadateEquipmentFormSelected = ({dispatch},item) =>{
    dispatch(types.UPDATE_EQUIPMENTFORM_SELECTED,item);
};
//删除
export const deleteEquipmentForm = ({dispatch}) =>{
    dispatch(types.DELETE_EQUIPMENTFORM);
};
/**---------------------------设备属性 控制台------------------------------------------------**/
//打开|关闭 控制台
export const switchEquipmentConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_EQUIPMENTCONSOLE,sw);
};


/**---------------------------设备属性筛选条件 表单---------------------------------------------------**/

//修改设备属性选中项
export const upadateEquipmentProFormTypeSelected = ({dispatch},item) =>{
    dispatch(types.UPDATE_EQUIPMENTPROFORM_TYPESELECTED,item);
};
//选中下拉框一项
export const addEquipmentProFormItem = ({dispatch},item,typeId) =>{
   dispatch(types.ADD_EQUIPMENTPROFORM_ITEM,item,typeId);
};
//下拉框检索条件发生变化
export const upadateEquipmentProFormFilterChange = ({dispatch},val,queryType) =>{
    if(val.length>1){
        // /metadataManager/queryDevice      //src/data/equipmentpro.json
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryDevice";
        Vue.http.get(url,{params:{queryType:queryType,keyword:val}}).then((response) => {
            dispatch(types.UPDATE_EQUIPMENTPROFORM_FILTERSELECTED,response.body,queryType);
        }, (response) => {
            console.log(response);
        });
    }
};
//删除选中项
export const deleteEquipmentProFormItem = ({dispatch},item,typeId) =>{
    dispatch(types.DELETE_EQUIPMENTPROFORM_ITEM,item,typeId);
};
//删除
export const deleteEquipmentProForm = ({dispatch}) =>{
    dispatch(types.DELETE_EQUIPMENTPROFORM);
};
// 提交数据
export const submitEquipmentProForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_EQUIPMENTPROFORM);
};
/**---------------------------设备属性筛选条件 控制台------------------------------------------------**/
//打开|关闭 控制台
export const switchEquipmentProConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_EQUIPMENTPROCONSOLE,sw);
};


/**---------------------------行政区划筛选条件 表单---------------------------------------------------**/

//修改地域行为属性类型
export const upadateRegionFormTypeSelected = ({dispatch},item) =>{
    dispatch(types.UPDATE_REGIONFORM_REGIONTYPE,item);
};
//修改日期类型
export const updateRegionFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_REGIONFORM_DATETYPE,item);
};
//修改日期
export const updateRegionFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_REGIONFORM_DATE,item);
};
//修改地域类型
export const updateRegionFormAreaType = ({dispatch},item) =>{
    dispatch(types.UPDATE_REGIONFORM_AREATYPE,item);
};
//下拉框检索条件发生变化
export const upadateRegionFormFilterAreaChange = ({dispatch},val,areaTypeID) =>{
    if(val.length>1){///metadataManager/queryArea   src/data/area.json
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
        Vue.http.get(url,{params:{areaType:areaTypeID,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_REGIONFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addRegionFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_REGIONFORM_AREAITEM,item);
};
//删除选中项
export const deleteRegionFormAreaItem = ({dispatch},item) =>{
    dispatch(types.DELETE_REGIONFORM_AREAITEM,item);
};
//删除
export const deleteRegionForm = ({dispatch}) =>{
    dispatch(types.DELETE_REGIONFORM);
};
// 提交数据
export const submitRegionForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_REGIONFORM);
};
/**---------------------------行政区选筛选条件 控制台------------------------------------------------**/
//打开|关闭 控制台
export const switchRegionConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_REGIONCONSOLE,sw);
};



/**---------------------------标签筛选条件 表单-----------------------------------------------------**/
//获取所有标签
export const getTagFormData = ({dispatch}) =>{
     let url=process.env.NODE_ENV.apiPath+"metadataManager/queryTagTree";
        Vue.http.get(url,{params:{ tagCode:''}}).then((response) => {
            dispatch(types.GET_TAGFORM_DATA,response.data);
        }, (response) => {
            console.log(response);
        });
};
//修改选中标签
export const updateTagFormSelected = ({dispatch},arr) =>{
    dispatch(types.UPDATE_TAGFORM_SELECTED,arr);
};
//删除
export const deleteTagForm = ({dispatch}) =>{
    dispatch(types.DELETE_TAGFORM);
};
//修改表达式选项
export const upadateExpressionForm = ({dispatch},data) =>{
    dispatch(types.UPDATE_EXPRESSIONFORM_SELECTED,data);
};

// 提交数据
export const submitTagForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_TAGFORM);
};

/**---------------------------标签筛选条件 控制台---------------------------------------------------**/
//打开|关闭 控制台
export const switchTagConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_TAGCONSOLE,sw);
};


/**---------------------------app筛选条件 应用筛选 表单-----------------------------------------------------**/
//修改应用行为类型
export const upadateAppFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_APPFORM_TYPE,item);
};        
//修改日期类型
export const updateAppFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_APPFORM_DATETYPE,item);
};
//修改日期
export const updateAppFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_APPFORM_DATE,item);
};
//修改应用选中项
export const updateAppQueryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_APPFORM_QUERYTYPE,item);
};
//下拉框检索条件发生变化
export const upadateAppFormFilterChange = ({dispatch},val,queryTypeID) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.apiPath+"metadataManager/queryApp";
        Vue.http.get(url,{params:{queryType:queryTypeID,keyword:val}}).then((response) => {
           dispatch(types.UPDATE_APPFORM_FILTERSELECTED,response.body);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addAppFormItem = ({dispatch},item) =>{
   dispatch(types.ADD_APPFORM_ITEM,item);
};
//删除选中项
export const deleteAppFormItem = ({dispatch},item) =>{
    dispatch(types.DELETE_APPFORM_ITEM,item);
};
//删除
export const deleteAppForm = ({dispatch}) =>{
    dispatch(types.DELETE_APPFORM);
};
//or / and
export const updateAppOrForm = ({dispatch},data) =>{
    dispatch(types.UPDATE_APP_OR_FORM,data);
};
//筛选方式
export const updateAppSelectivityForm = ({dispatch},data) =>{
    dispatch(types.UPDATE_APP_SELECTIVITY_FORM,data);
};
// 上传文件
export const addAppFormFile = ({dispatch},newFile,callback) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
     } else {
         let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType=0',
         url=process.env.NODE_ENV.apiPath+basePath;
         let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name); 
         Vue.http.post(url,formData).then(res => { 
               if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                    dispatch(types.ADD_APPFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101
                        });
                    }
                }else{
                    callback({
                             type:'error',
                             text:'上传文件失败'
                    });
               }
             
         })
         .catch(console.log)
    }
};
// 删除上传文件
export const deleteAppFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_APPFORM_FILE,newFileName);
};
// 提交数据
export const submitAppForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_APPFORM);
};
/**---------------------------app筛选条件 应用筛选 控制台---------------------------------------------------**/
//打开|关闭 控制台
export const switchAppConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_APPCONSOLE,sw);
};


/**---------------------------app类型筛选条件 应用分类 表单-------------------------------------------------**/
//修改应用行为类型
export const upadateAppTypeFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_APPTYPEFORM_TYPE,item);
};        
//修改日期类型
export const updateAppTypeFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_APPTYPEFORM_DATETYPE,item);
};
//修改日期
export const updateAppTypeFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_APPTYPEFORM_DATE,item);
};

//下拉框检索条件发生变化
export const upadateAppTypeFormFilterChange = ({dispatch},val) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.apiPath+"metadataManager/queryAppType";
        Vue.http.get(url,{params:{keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_APPTYPEFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addAppTypeFormItem = ({dispatch},item) =>{
   dispatch(types.ADD_APPTYPEFORM_ITEM,item);
};
//删除选中项
export const deleteAppTypeFormItem = ({dispatch},item) =>{
    dispatch(types.DELETE_APPTYPEFORM_ITEM,item);
};
//删除
export const deleteAppTypeForm = ({dispatch}) =>{
    dispatch(types.DELETE_APPTYPEFORM);
};
// 提交数据
export const submitAppTypeForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_APPTYPEFORM);
};
/**---------------------------app类型筛选条件 控制台------------------------------------------------**/
//打开|关闭 控制台
export const switchAppTypeConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_APPTYPECONSOLE,sw);
};


/**---------------------------过滤测量筛选条件  -----------------------------------------------------**/

//删除
export const deleteBrushForm = ({dispatch}) =>{
    dispatch(types.DELETE_BRUSHFORM);
};
//打开|关闭 控制台

export const switchBrushTypeConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_BRUSHTYPECONSOLE,sw);
};
// 提交数据
export const submitBrushForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_BRUSHFORM);
};               
//更新单选
export const upadateBrushForm = ({dispatch},item) =>{
    dispatch(types.UPDATE_BRUSHFORM,item);
};

/**---------------------------设备明细红色 表单---------------------------------------------------**/

//更新选中项
export const upadateIdformoutFormSelected = ({dispatch},item) =>{
    dispatch(types.UPDATE_IDFORMOUTFORM_SELECTED,item);
};
//删除
export const deleteIdformoutForm = ({dispatch}) =>{
    dispatch(types.DELETE_IDFORMOUTFORM);
};
// 提交数据
export const submitIdformoutForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_IDFORMOUTFORM);
};
//打开|关闭 控制台
export const switchIdformoutConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_IDFORMOUTCONSOLE,sw);
};


/**---------------------------输出明细   地域行为 表单---------------------------------------------------**/

//修改地域行为属性类型
export const upadateOutRegionFormTypeSelected = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTREGIONFORM_REGIONTYPE,item);
};
//修改日期类型
export const updateOutRegionFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTREGIONFORM_DATETYPE,item);
};
//修改日期
export const updateOutRegionFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTREGIONFORM_DATE,item);
};
//修改地域类型
export const updateOutRegionFormAreaType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTREGIONFORM_AREATYPE,item);
};
//删除
export const deleteOutRegionForm = ({dispatch}) =>{
    dispatch(types.DELETE_OUTREGIONFORM);
};
// 提交数据
export const submitOutRegionForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_OUTREGIONFORM);
};
/**---------------------------输出明细   地域行为 控制台------------------------------------------------**/
//打开|关闭 控制台
export const switchOutRegionConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_OUTREGIONCONSOLE,sw);
};




/**---------------------------输出标签明细条件 表单-----------------------------------------------------**/
//获取所有标签
export const getOutTagFormData = ({dispatch}) =>{//   /src/data/tdtree.json
    let url=process.env.NODE_ENV.apiPath+"metadataManager/queryTagTree";

        Vue.http.get(url,{params:{ tagCode:''}}).then((response) => {
            dispatch(types.GET_OUTTAGFORM_DATA,response.data);
        }, (response) => {
            console.log(response);
        });
};
//修改选中标签
export const updateOutTagFormSelected = ({dispatch},arr) =>{
    dispatch(types.UPDATE_OUTTAGFORM_SELECTED,arr);
};
//删除
export const deleteOutTagForm = ({dispatch}) =>{
    dispatch(types.DELETE_OUTTAGFORM);
};
// 提交数据
export const submitOutTagForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_OUTTAGFORM);
};

/**---------------------------输出标明细条件 控制台---------------------------------------------------**/
//打开|关闭 控制台
export const switchOutTagConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_OUTTAGCONSOLE,sw);
};

/**---------------------------设备属性 表单---------------------------------------------------**/
//更新选中项
export const upadateStructFormSelected = ({dispatch},item) =>{
    dispatch(types.UPDATE_STRUCTFORM_SELECTED,item);
};
//删除
export const deleteStructForm = ({dispatch}) =>{
    dispatch(types.DELETE_STRUCTFORM);
};
// 提交数据
export const submitStructForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_STRUCTFORM);
};
//打开|关闭 控制台
export const switchStructConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_STRUCTCONSOLE,sw);
};

/**---------------------------[输出统计] app明细 表单------------------------------------------------------**/
//修改日期类型
export const updateBehaviorFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_BEHAVIORFORM_DATETYPE,item);
};
//修改日期
export const updateBehaviorFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_BEHAVIORFORM_DATE,item);
};

//修改坐标类型
export const updateBehaviorFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_BEHAVIORFORM_COORDINARYTYPE,item);
};
//下拉框检索条件发生变化
export const upadateBehaviorFormFilterChange = ({dispatch},val) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.apiPath+"metadataManager/queryAppType";
        Vue.http.get(url,{params:{keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_BEHAVIORFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addBehaviorFormItem = ({dispatch},item) =>{
   dispatch(types.ADD_BEHAVIORFORM_ITEM,item);
};
//删除选中项
export const deleteBehaviorFormItem = ({dispatch},item) =>{
    dispatch(types.DELETE_BEHAVIORFORM_ITEM,item);
};
// 提交数据
export const submitBehaviorForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_BEHAVIORFORM);
};
//删除
export const deleteBehaviorForm = ({dispatch}) =>{
    dispatch(types.DELETE_BEHAVIORFORM);
};
/**---------------------------[输出统计] app明细 控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchBehaviorConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_BEHAVIORCONSOLE,sw);
};


/**---------------------------[输出明细] app明细 表单------------------------------------------------------**/
//修改日期类型
export const updateoutBehaviorFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTBEHAVIORFORM_DATETYPE,item);
};
//修改日期
export const updateoutBehaviorFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTBEHAVIORFORM_DATE,item);
};

//修改坐标类型
export const updateoutBehaviorFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTBEHAVIORFORM_COORDINARYTYPE,item);
};

//下拉框检索条件发生变化
export const upadateoutBehaviorFormFilterChange = ({dispatch},val) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.apiPath+"metadataManager/queryAppType";
        Vue.http.get(url,{params:{keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_OUTBEHAVIORFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addoutBehaviorFormItem = ({dispatch},item) =>{
   dispatch(types.ADD_OUTBEHAVIORFORM_ITEM,item);
};
//删除选中项
export const deleteoutBehaviorFormItem = ({dispatch},item) =>{
    dispatch(types.DELETE_OUTBEHAVIORFORM_ITEM,item);
};
// 提交数据
export const submitoutBehaviorForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_OUTBEHAVIORFORM);
};
//删除
export const deleteoutBehaviorForm = ({dispatch}) =>{
    dispatch(types.DELETE_OUTBEHAVIORFORM);
};
/**---------------------------[输出明细] app明细 控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchoutBehaviorConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_OUTBEHAVIORCONSOLE,sw);
};


/**---------------------------[统计输出] 标签 表单-----------------------------------------------------**/
//获取所有标签
export const getPutTagFormData = ({dispatch}) =>{//   /src/data/tdtree.json
        
        let url=process.env.NODE_ENV.apiPath+"metadataManager/queryTagTree";
        Vue.http.get(url,{params:{ tagCode:''}}).then((response) => {
             dispatch(types.GET_PUTTAGFORM_DATA,response.data);
        }, (response) => {
            console.log(response);
        });
};
//修改选中标签
export const updatePutTagFormSelected = ({dispatch},arr) =>{
    dispatch(types.UPDATE_PUTTAGFORM_SELECTED,arr);
};
//删除
export const deletePutTagForm = ({dispatch}) =>{
    dispatch(types.DELETE_PUTTAGFORM);
};
// 提交数据
export const submitPutTagForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_PUTTAGFORM);
};

/**---------------------------[统计输出] 标签 控制台---------------------------------------------------**/
//打开|关闭 控制台
export const switchPutTagConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_PUTTAGCONSOLE,sw);
};


/**---------------------------[统计输出  地域行为] 表单---------------------------------------------------**/

//修改地域行为属性类型
export const upadatePutRegionFormTypeSelected = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTREGIONFORM_REGIONTYPE,item);
};
//修改日期类型
export const updatePutRegionFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTREGIONFORM_DATETYPE,item);
};
//修改日期
export const updatePutRegionFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTREGIONFORM_DATE,item);
};
//修改地域类型
export const updatePutRegionFormAreaType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTREGIONFORM_AREATYPE,item);
};
//删除
export const deletePutRegionForm = ({dispatch}) =>{
    dispatch(types.DELETE_PUTREGIONFORM);
};
// 提交数据
export const submitPutRegionForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_PUTREGIONFORM);
};
/**---------------------------[统计输出  地域行为]  控制台------------------------------------------------**/
//打开|关闭 控制台
export const switchPutRegionConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_PUTREGIONCONSOLE,sw);
};


/**---------------------------[输出明细] 输出位置 表单------------------------------------------------------**/
//修改日期类型
export const updateOutLocationFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTLOCATIONFORM_DATETYPE,item);
};
//修改日期
export const updateOutLocationFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTLOCATIONFORM_DATE,item);
};

// 提交数据
export const submitOutLocationForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_OUTLOCATIONFORM);
};
//删除
export const deleteOutLocationForm = ({dispatch}) =>{
    dispatch(types.DELETE_OUTLOCATIONFORM);
};
//城市下拉框检索条件发生变化
export const upadateOutLocationChange = ({dispatch},val) =>{
    if(val.length>1){
        if(val=='全国'){
            let data=[{
                code:"-1",name:"全国"
            }]
            dispatch(types.UPDATE_OUTLOCATION_FILTERSELECTED,data);
        }else{
             let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
                Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
                    let data=[];
                    data= response.data.filter((element, index, array) => {
                        return element.name.indexOf(val)!=-1;
                    })
                   dispatch(types.UPDATE_OUTLOCATION_FILTERSELECTED,data);
                }, (response) => {
                    console.log(response);
                });
        }
    }
};
//城市选中下拉框一项
export const addOutLocationFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_OUTLOCATION_AREAITEM,item);
};
//城市删除选中项
export const deleteOutLocationFormAreaItem = ({dispatch},item) =>{
    dispatch(types.DELETE_OUTLOCATION_AREAITEM,item);
};
/**---------------------------[输出明细] 输出位置 控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchOutLocationConsolePanel = ({dispatch},sw) =>{

    dispatch(types.SWITCH_OUTLOCATIONCONSOLE,sw);
};




/**---------------------------[输出明细]  输出圈中位置明细 表单------------------------------------------------------**/
//修改日期类型
export const updatePutLocationFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTLOCATIONFORM_DATETYPE,item);
};
//修改日期
export const updatePutLocationFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTLOCATIONFORM_DATE,item);
};
//修改位置类型
export const updatePutLocationFormLocationType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTLOCATIONFORM_LOCATIONTYPE,item);
};
//修改坐标类型
export const updatePutLocationFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTLOCATIONFORM_COORDINARYTYPE,item);
};
//新增小时段
export const addPutLocationFormTime = ({dispatch},item) =>{
    dispatch(types.ADD_PUTLOCATIONFORM_TIME,item);
};
//删除小时段
export const deletePutLocationFormTime = ({dispatch},item) =>{
    dispatch(types.DELETE_PUTLOCATIONFORM_TIME,item);
};
// 上传文件
export const addPutLocationFormFile = ({dispatch},newFile,callback,index) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
    } else {
        let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType='+index+'',
        url=process.env.NODE_ENV.apiPath+basePath;
        let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name);
         Vue.http.post(url,formData).then(res => {
                if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                    dispatch(types.ADD_PUTLOCATIONFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101,
                        });
                    }
               }else if(res.body.resultCode===6){
                        callback({ 
                             type:'error',
                             text:'上传文件超过指定行数'
                        });
               }else if(res.body.resultCode===2){
                        callback({
                             type:'error',
                             text:'上传文件数据格式校验失败'
                        });
               }else if(res.body.resultCode===3){
                       callback({
                             type:'error',
                             text:'上传经纬度数据超过最大面积'
                        });
                }else {
                        callback({
                             type:'error',
                             text:'上传文件失败'
                        });
               }
         })
         .catch(console.log)
    }
};

// 删除上传文件
export const deletePutLocationFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_PUTLOCATIONFORM_FILE,newFileName);
};
//删除
export const deletePutLocationForm = ({dispatch}) =>{
    dispatch(types.DELETE_PUTLOCATIONFORM);
};
// 提交数据
export const submitPutLocationForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_PUTLOCATIONFORM);
};
//城市下拉框检索条件发生变化
export const upadatePutLocationChange = ({dispatch},val) =>{
    if(val.length>1){
        if(val=='全国'){
            let data=[{
                code:"-1",name:"全国"
            }]
            dispatch(types.UPDATE_PUTLOCATION_FILTERSELECTED,data);
        }else{
             let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
                Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
                    let data=[];
                    data= response.data.filter((element, index, array) => {
                        return element.name.indexOf(val)!=-1;
                    })
                   dispatch(types.UPDATE_PUTLOCATION_FILTERSELECTED,data);
                }, (response) => {
                    console.log(response);
                });
        }
    }
};
//城市选中下拉框一项
export const addPutLocationFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_PUTLOCATION_AREAITEM,item);
};
//城市删除选中项
export const deletePutLocationFormAreaItem = ({dispatch},item) =>{
    dispatch(types.DELETE_PUTLOCATION_AREAITEM,item);
};
/**------------------------ [输出明细]  输出圈中位置明细  控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchPutLocationConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_PUTLOCATIONCONSOLE,sw);
};


/**---------------------------[输出明细] 热力图条件 表单-------------------------------------------------**/
       
//修改日期类型
export const updateHotFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_HOTFORM_DATETYPE,item);
};
//修改日期
export const updateHotFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_HOTFORM_DATE,item);
};

//下拉框检索条件发生变化
export const upadateHotFormFilterChange = ({dispatch},val) =>{
    if(val.length>1){//src/data/appType.json
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
        Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_HOTFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addHotFormItem = ({dispatch},item) =>{
   dispatch(types.ADD_HOTFORM_ITEM,item);
};
//删除选中项
export const deleteHotFormItem = ({dispatch},item) =>{
    dispatch(types.DELETE_HOTFORM_ITEM,item);
};
//删除
export const deleteHotForm = ({dispatch}) =>{
    dispatch(types.DELETE_HOTFORM);
};
// 提交数据
export const submitHotForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_HOTFORM);
};
//城市下拉框检索条件发生变化
export const upadateHotChange = ({dispatch},val) =>{
    if(val.length>1){
        if(val=='全国'){
            let data=[{
                code:"-1",name:"全国"
            }]
            dispatch(types.UPDATE_HOT_FILTERSELECTED,data);
        }else{
             let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
                Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
                    let data=[];
                    data= response.data.filter((element, index, array) => {
                        return element.name.indexOf(val)!=-1;
                    })
                   dispatch(types.UPDATE_HOT_FILTERSELECTED,data);
                }, (response) => {
                    console.log(response);
                });
        }
    }
};
//城市选中下拉框一项
export const addHotFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_HOT_AREAITEM,item);
};
//城市删除选中项
export const deleteHotFormAreaItem = ({dispatch},item) =>{
    dispatch(types.DELETE_HOT_AREAITEM,item);
};
/**---------------------------[输出明细] 热力图条件 控制台------------------------------------------------**/
//打开|关闭 控制台
export const switchHotConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_HOTCONSOLE,sw);
};



/**---------------------------[筛选]  活跃设备 表单------------------------------------------------------**/
//修改日期类型
export const updateActiveFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_ACTIVEFORM_DATETYPE,item);
};
//修改日期
export const updateActiveFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_ACTIVEFORM_DATE,item);
};
//修改活跃统计类型
export const upadateActiveFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_ACTIVEFORM_LOCATIONTYPE,item);
};
//新增小时段
export const addActiveFormTime = ({dispatch},item) =>{
    dispatch(types.ADD_ACTIVEFORM_TIME,item);
};
//删除小时段
export const deleteActiveFormTime = ({dispatch},item) =>{
    dispatch(types.DELETE_ACTIVEFORM_TIME,item);
};
//删除       
export const deleteActiveForm = ({dispatch}) =>{
    dispatch(types.DELETE_ACTIVEFORM);
};
// 提交数据
export const submitActiveForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_ACTIVEFORM);
};
//设备活跃类型
export const upadateactiveBehaviorType = ({dispatch},item) =>{
    dispatch(types.UPDATE_ACTIVEBEHAVIORFORM_LOCATIONTYPE,item);
};
//tab切换
export const upadateactiveBehaviorTabchange = ({dispatch},item) =>{
    dispatch(types.UPDATE_ACTIVEBEHAVIORTABCHANGE_LOCATIONTYPE,item);
};
/**------------------------ [筛选]  活跃设备  控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchActiveConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_ACTIVECONSOLE,sw);
};



/**---------------------------[统计]  活跃统计 表单------------------------------------------------------**/
//修改日期类型
export const updateOutActiveFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTACTIVEFORM_DATETYPE,item);
};
//修改日期
export const updateOutActiveFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTACTIVEFORM_DATE,item);
};
//修改活跃统计类型
export const upadateOutActiveFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTACTIVEFORM_LOCATIONTYPE,item);
};
//设备统计类型
export const upadateOutActiveGroupFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTACTIVEGROUPFORM_LOCATIONTYPE,item);
};
//删除       
export const deleteOutActiveForm = ({dispatch}) =>{
    dispatch(types.DELETE_OUTACTIVEFORM);
};
// 提交数据
export const submitOutActiveForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_OUTACTIVEFORM);
};
/**------------------------ [统计]  活跃统计  控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchOutActiveConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_OUTACTIVECONSOLE,sw);
};


/**---------------------------[统计]  输出POI 表单------------------------------------------------------**/
//删除       
export const deletePoiActiveForm = ({dispatch}) =>{
    dispatch(types.DELETE_OUTPOIFORM);
};
//更新坐标格式新选中项
export const upadatePoiFormcoordinate = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFORM_COORDINATE,item);
};
//更新新建任务
export const upadatePoiFormlistLabel = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFORMLISTLABEL,item);
};
//更新查询内容
export const upadatePoiForminquiry = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFORM_INQUIRY,item);
};
//更新时间类型
export const upadatePoiFormwithin = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFORM_WITHIN,item);
};
//更新城市区域-省
export const upadatePoiFormwithinProvince = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFORM_WITHINPROVINCE,item);
};

//更新城市区域-市
export const upadatePoiFormCity = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFORM_CITY,item);
};
//更新城市区域-区
export const upadatePoiFormArea = ({dispatch},item,list) =>{
    dispatch(types.UPDATE_POIFORM_AREA,item,list);
};
//更新周边半径
export const upadateperipheryRadius = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFORM_RADIUS,item);
};
//更新时间选段
export const upadateTimePericope = ({dispatch},hour,index,end) =>{
    dispatch(types.UPDATE_TIME_PERICOPE,hour,index,end);
};
//删除时间选段
export const deleteTimePericope = ({dispatch},item) =>{
    dispatch(types.DELETE_TIME_PERICOPE,item);
};
//选中标签其中一项
export const updatePoiFormSelected = ({dispatch},arr) =>{
    dispatch(types.UPDATE_POIFORM_SELECTED,arr);
};
//请求标签数
export const getPoiFormData = ({dispatch}) =>{
           Vue.http.get('http://127.0.0.1:1111/src/data/getTree1.json').then((response)=>{
                  dispatch(types.GET_POIFORM_DATA,response.body);
           },(response)=>{
                console.log('response')
           })   
};
//清空树
export const destroyedPoiFormData = ({dispatch}) =>{
    dispatch(types.DESTROYED_POIFORM_SELECTED);
};
//请求城市
export const getPoiFormDataCity = ({dispatch}) =>{
           Vue.http.get('http://127.0.0.1:1111/src/data/controller.json').then((response)=>{
                  dispatch(types.GET_POIFORM_DATA_CITY,response.body);
           },(response)=>{
                console.log('response')
           })   
};
/**------------------------ [统计]  输出POI  控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchOutPoiConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_OUTPOICONSOLE,sw);
};





/**---------------------------[统计]  筛选设备统计 表单 form---------------------------------------------------------**/
export const submitSeparatingForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_SEPARATINGFORM);
};
/**------------------------ [统计]  筛选设备统计  控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchSeparatingConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_SEPARATINGCONSOLE,sw);
};




/**---------------------------筛选poiFilter 表单------------------------------------------------------**/
//修改日期类型
export const updatePoiFilterFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFILTERFORM_DATETYPE,item);
};
//修改日期
export const updatePoiFilterFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFILTERFORM_DATE,item);
};
//修改工作日
export const updatePoiFilterWorkingDay = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFILTERWORKINGDAY_TYPE,item);
};

//新增小时段
export const addPoiFilterFormTime = ({dispatch},item) =>{
    dispatch(types.ADD_POIFILTERFORM_TIME,item);
};
//删除小时段
export const deletePoiFilterFormTime = ({dispatch},item) =>{
    dispatch(types.DELETE_POIFILTERFORM_TIME,item);
};
//poi列表下拉框检索条件发生变化
export const upadatePoiFilterChange = ({dispatch},val,city) =>{
    if(val.length>1){
       let url=process.env.NODE_ENV.treePath+"metadataManager/queryPoi";
        Vue.http.get(url,{params:{city:city,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_POIFILTER_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//poi列表选中下拉框一项
export const addPoiFilterFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_POIFILTER_AREAITEM,item);
};
//poi列表删除选中项
export const deletePoiFilterFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_POIFILTER_AREAITEM,item);
};
//二选一选中项
export const updatePoiFilterselectivity = ({dispatch},item) =>{
  dispatch(types.UPDATE_POIFILTERSELECTIVITY_TYPE,item);
};
//poi类型列表 【TAG】
export const upadateTagPoiFilterChange = ({dispatch},val) =>{
    if(val.length>1){
       let url=process.env.NODE_ENV.treePath+"metadataManager/queryPoiType";
        Vue.http.get(url,{params:{keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_TAGPOIFILTER_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//poi类型列表选中下拉框一项
export const addTagPoiFilterFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_TAGPOIFILTER_AREAITEM,item);
};
//poi类型列表删除选中项
export const deleteTagPoiFilterFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_TAGPOIFILTER_AREAITEM,item);
};
//修改位置类型
export const updatePoiFilterFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFILTERFORM_TYPE,item);
};
//修改坐标类型
export const updatePoiFilterFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_POIFILTERFORM_COORDINARYTYPE,item);
};
// 上传文件
export const addPoiFilterFormFile = ({dispatch},newFile,callback,index) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
    } else {
        let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType='+index+'',
        url=process.env.NODE_ENV.apiPath+basePath;
        let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name);
         Vue.http.post(url,formData).then(res => {
               if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                   dispatch(types.ADD_POIFILTERFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101
                        });
                    }
               }else if(res.body.resultCode===6){
                        callback({
                             type:'error',
                             text:'上传文件超过指定行数'
                        });
               }else if(res.body.resultCode===2){
                        callback({
                             type:'error',
                             text:'上传文件数据格式校验失败'
                        });
               }else if(res.body.resultCode===3){
                       callback({
                             type:'error',
                             text:'上传经纬度数据超过最大面积'
                        });
                }else {
                        callback({
                             type:'error',
                             text:'上传文件失败'
                        });
               }
          })
         .catch(console.log)
    }        
};

// 删除上传文件
export const deletePoiFilterFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_POIFILTERFORM_FILE,newFileName);
};
//删除
export const deletePoiFilterForm = ({dispatch}) =>{
    dispatch(types.DELETE_POIFILTERFORM);
};
// 提交数据
export const submitPoiFilterForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_POIFILTERFORM);
};
//修改城市
export const updateValuePoiFilterForm = ({dispatch},item) =>{
    dispatch(types.UPDATE_VALUEPOIFILTERFORM_TYPE,item);
};
/**---------------------------筛选poiFilter 控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchPoiFilterConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_POIFILTERCONSOLE,sw);
};




/**---------------------------【 明细 】poiFilter 表单------------------------------------------------------**/
//修改日期类型
export const updateOutPoiFilterFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTPOIFILTERFORM_DATETYPE,item);
};
//修改日期
export const updateOutPoiFilterFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTPOIFILTERFORM_DATE,item);
};
//修改工作日
export const updateOutPoiFilterWorkingDay = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTPOIFILTERWORKINGDAY_TYPE,item);
};

//新增小时段
export const addOutPoiFilterFormTime = ({dispatch},item) =>{
    dispatch(types.ADD_OUTPOIFILTERFORM_TIME,item);
};
//删除小时段
export const deleteOutPoiFilterFormTime = ({dispatch},item) =>{
    dispatch(types.DELETE_OUTPOIFILTERFORM_TIME,item);
};
//poi列表下拉框检索条件发生变化
export const upadateOutPoiFilterChange = ({dispatch},val,city) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.treePath+"/metadataManager/queryPoi";
        Vue.http.get(url,{params:{city:city,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_OUTPOIFILTER_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//poi列表选中下拉框一项
export const addOutPoiFilterFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_OUTPOIFILTER_AREAITEM,item);
};
//poi列表删除选中项
export const deleteOutPoiFilterFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_OUTPOIFILTER_AREAITEM,item);
};
//二选一选中项
export const updateOutPoiFilterselectivity = ({dispatch},item) =>{
  dispatch(types.UPDATE_OUTPOIFILTERSELECTIVITY_TYPE,item);
};
//poi类型列表 【TAG】
export const upadateTagOutPoiFilterChange = ({dispatch},val) =>{
    if(val.length>1){
       let url=process.env.NODE_ENV.treePath+"/metadataManager/queryPoiType";
        Vue.http.get(url,{params:{keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_TAGOUTPOIFILTER_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//poi类型列表选中下拉框一项
export const addTagOutPoiFilterFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_TAGOUTPOIFILTER_AREAITEM,item);
};
//poi类型列表删除选中项
export const deleteTagOutPoiFilterFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_TAGOUTPOIFILTER_AREAITEM,item);
};
//修改位置类型
export const updateOutPoiFilterFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTPOIFILTERFORM_TYPE,item);
};
//修改坐标类型
export const updateOutPoiFilterFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_OUTPOIFILTERFORM_COORDINARYTYPE,item);
};
// 上传文件
export const addOutPoiFilterFormFile = ({dispatch},newFile,callback,index) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
    } else {
        let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType='+index+'',
        url=process.env.NODE_ENV.apiPath+basePath;
        let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name);
         Vue.http.post(url,formData).then(res => {
               if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                   dispatch(types.ADD_OUTPOIFILTERFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101
                        });
                    }
               }else if(res.body.resultCode===6){
                        callback({
                             type:'error',
                             text:'上传文件超过指定行数'
                        });
               }else if(res.body.resultCode===2){
                        callback({
                             type:'error',
                             text:'上传文件数据格式校验失败'
                        });
               }else if(res.body.resultCode===3){
                       callback({
                             type:'error',
                             text:'上传经纬度数据超过最大面积'
                        });
                }else {
                        callback({
                             type:'error',
                             text:'上传文件失败'
                        });
               }
          })
         .catch(console.log)
    }        
};

// 删除上传文件
export const deleteOutPoiFilterFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_OUTPOIFILTERFORM_FILE,newFileName);
};
//删除
export const deleteOutPoiFilterForm = ({dispatch}) =>{
    dispatch(types.DELETE_OUTPOIFILTERFORM);
};
// 提交数据
export const submitOutPoiFilterForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_OUTPOIFILTERFORM);
};
//修改城市
export const updateValueOutPoiFilterForm = ({dispatch},item) =>{
    dispatch(types.UPDATE_VALUEOUTPOIFILTERFORM_TYPE,item);
};
/**---------------------------明细poiFilter 控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchOutPoiFilterConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_OUTPOIFILTERCONSOLE,sw);
};




/**---------------------------【 统计 】poiFilter 表单------------------------------------------------------**/
//修改日期类型
export const updatePutPoiFilterFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTPOIFILTERFORM_DATETYPE,item);
};
//修改日期
export const updatePutPoiFilterFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTPOIFILTERFORM_DATE,item);
};
//修改工作日
export const updatePutPoiFilterWorkingDay = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTPOIFILTERWORKINGDAY_TYPE,item);
};

//新增小时段
export const addPutPoiFilterFormTime = ({dispatch},item) =>{
    dispatch(types.ADD_PUTPOIFILTERFORM_TIME,item);
};
//删除小时段
export const deletePutPoiFilterFormTime = ({dispatch},item) =>{
    dispatch(types.DELETE_PUTPOIFILTERFORM_TIME,item);
};
//poi列表下拉框检索条件发生变化
export const upadatePutPoiFilterChange = ({dispatch},val,city) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.treePath+"/metadataManager/queryPoi";
        Vue.http.get(url,{params:{city:city,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_PUTPOIFILTER_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//poi列表选中下拉框一项
export const addPutPoiFilterFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_PUTPOIFILTER_AREAITEM,item);
};
//poi列表删除选中项
export const deletePutPoiFilterFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_PUTPOIFILTER_AREAITEM,item);
};
//二选一选中项
export const updatePutPoiFilterselectivity = ({dispatch},item) =>{
  dispatch(types.UPDATE_PUTPOIFILTERSELECTIVITY_TYPE,item);
};
//poi类型列表 【TAG】
export const upadateTagPutPoiFilterChange = ({dispatch},val) =>{
    if(val.length>1){
       let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryPoiType";
        Vue.http.get(url,{params:{keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_TAGPUTPOIFILTER_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//poi类型列表选中下拉框一项
export const addTagPutPoiFilterFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_TAGPUTPOIFILTER_AREAITEM,item);
};
//poi类型列表删除选中项
export const deleteTagPutPoiFilterFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_TAGPUTPOIFILTER_AREAITEM,item);
};
//修改位置类型
export const updatePutPoiFilterFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTPOIFILTERFORM_TYPE,item);
};
//修改坐标类型
export const updatePutPoiFilterFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTPOIFILTERFORM_COORDINARYTYPE,item);
};
// 上传文件
export const addPutPoiFilterFormFile = ({dispatch},newFile,callback,index) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
    } else {
        let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType='+index+'',
        url=process.env.NODE_ENV.apiPath+basePath;
        let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name);
         Vue.http.post(url,formData).then(res => {
               if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                   dispatch(types.ADD_PUTPOIFILTERFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101
                        });
                    }
               }else if(res.body.resultCode===6){
                        callback({
                             type:'error',
                             text:'上传文件超过指定行数'
                        });
               }else if(res.body.resultCode===2){
                        callback({
                             type:'error',
                             text:'上传文件数据格式校验失败'
                        });
               }else if(res.body.resultCode===3){
                       callback({
                             type:'error',
                             text:'上传经纬度数据超过最大面积'
                        });
                }else {
                        callback({
                             type:'error',
                             text:'上传文件失败'
                        });
               }
          })
         .catch(console.log)
    }        
};

// 删除上传文件
export const deletePutPoiFilterFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_PUTPOIFILTERFORM_FILE,newFileName);
};
//删除
export const deletePutPoiFilterForm = ({dispatch}) =>{
    dispatch(types.DELETE_PUTPOIFILTERFORM);
};
// 提交数据
export const submitPutPoiFilterForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_PUTPOIFILTERFORM);
};
//修改城市
export const updateValuePutPoiFilterForm = ({dispatch},item) =>{
    dispatch(types.UPDATE_VALUEPUTPOIFILTERFORM_TYPE,item);
};
/**---------------------------明细poiFilter 控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchPutPoiFilterConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_PUTPOIFILTERCONSOLE,sw);
};




/**---------------------------【 分类统计 】poiFilter 表单------------------------------------------------------**/
//修改日期类型
export const updateDigPoiFilterFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_DIGPOIFILTERFORM_DATETYPE,item);
};
//修改日期
export const updateDigPoiFilterFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_DIGPOIFILTERFORM_DATE,item);
};
//修改工作日
export const updateDigPoiFilterWorkingDay = ({dispatch},item) =>{
    dispatch(types.UPDATE_DIGPOIFILTERWORKINGDAY_TYPE,item);
};

//新增小时段
export const addDigPoiFilterFormTime = ({dispatch},item) =>{
    dispatch(types.ADD_DIGPOIFILTERFORM_TIME,item);
};
//删除小时段
export const deleteDigPoiFilterFormTime = ({dispatch},item) =>{
    dispatch(types.DELETE_DIGPOIFILTERFORM_TIME,item);
};
//poi列表下拉框检索条件发生变化
export const upadateDigPoiFilterChange = ({dispatch},val) =>{
    //不会执行  统计分类中隐藏了
    if(val.length>1){
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
        Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_DIGPOIFILTER_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//poi列表选中下拉框一项
export const addDigPoiFilterFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_DIGPOIFILTER_AREAITEM,item);
};
//poi列表删除选中项
export const deleteDigPoiFilterFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_DIGPOIFILTER_AREAITEM,item);
};
//二选一选中项
export const updateDigPoiFilterselectivity = ({dispatch},item) =>{
  dispatch(types.UPDATE_DIGPOIFILTERSELECTIVITY_TYPE,item);
};
//poi类型列表 【TAG】
export const upadateTagDigPoiFilterChange = ({dispatch},val) =>{
    if(val.length>1){
       let url=process.env.NODE_ENV.treePath+"/metadataManager/queryPoiType";
        Vue.http.get(url,{params:{keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
           dispatch(types.UPDATE_TAGDIGPOIFILTER_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//poi类型列表选中下拉框一项
export const addTagDigPoiFilterFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_TAGDIGPOIFILTER_AREAITEM,item);
};
//poi类型列表删除选中项
export const deleteTagDigPoiFilterFormAreaItem = ({dispatch},item) =>{
  dispatch(types.DELETE_TAGDIGPOIFILTER_AREAITEM,item);
};
//修改位置类型
export const updateDigPoiFilterFormType = ({dispatch},item) =>{
    dispatch(types.UPDATE_DIGPOIFILTERFORM_TYPE,item);
};
//修改坐标类型
export const updateDigPoiFilterFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_DIGPOIFILTERFORM_COORDINARYTYPE,item);
};
// 上传文件
export const addDigPoiFilterFormFile = ({dispatch},newFile,callback,index) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
    } else {
        let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType='+index+'',
        url=process.env.NODE_ENV.apiPath+basePath;
        let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name);
         Vue.http.post(url,formData).then(res => {
               if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                   dispatch(types.ADD_DIGPOIFILTERFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101
                        });
                    }
               }else if(res.body.resultCode===6){
                        callback({
                             type:'error',
                             text:'上传文件超过指定行数'
                        });
               }else if(res.body.resultCode===2){
                        callback({
                             type:'error',
                             text:'上传文件数据格式校验失败'
                        });
               }else if(res.body.resultCode===3){
                       callback({
                             type:'error',
                             text:'上传经纬度数据超过最大面积'
                        });
                }else {
                        callback({
                             type:'error',
                             text:'上传文件失败'
                        });
               }
          })
         .catch(console.log)
    }        
};

// 删除上传文件
export const deleteDigPoiFilterFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_DIGPOIFILTERFORM_FILE,newFileName);
};
//删除
export const deleteDigPoiFilterForm = ({dispatch}) =>{
    dispatch(types.DELETE_DIGPOIFILTERFORM);
};
// 提交数据
export const submitDigPoiFilterForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_DIGPOIFILTERFORM);
};
//修改城市
export const updateValueDigPoiFilterForm = ({dispatch},item) =>{
    dispatch(types.UPDATE_VALUEDIGPOIFILTERFORM_TYPE,item);
};
/**---------------------------分类统计poiFilter 控制台--------------------------------------------------**/
//打开|关闭 控制台
export const switchDigPoiFilterConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_DIGPOIFILTERCONSOLE,sw);
};



// ----------------------------【筛选】---工作地居住地---------------------------------------//
// ----------------------------【筛选】---工作地居住地---------------------------------------//
// ----------------------------【筛选】---工作地居住地---------------------------------------//

//修改日期类型
export const updateGhettoFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_GHETTOFORM_DATETYPE,item);
};
//修改日期
export const updateGhettoFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_GHETTOFORM_DATE,item);
};
//工作地 居住地
export const upadateGhettoFormType = ({dispatch},sw) =>{
    dispatch(types.UPADATEGHETTOFORMTYPE,sw)
}

//城市
//下拉框检索条件发生变化
export const upadateGhettoChange = ({dispatch},val,) =>{
    if(val.length>1){///metadataManager/queryArea   src/data/area.json
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
        Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPADATEGHETTOFOCITYLIST,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addGhettoFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_GHETTOFORM_AREAITEM,item);
};
//删除选中项
export const deleteGhettoFormAreaItem = ({dispatch},item) =>{
    dispatch(types.DELETE_GHETTOFORM_AREAITEM,item);
};
//通勤半径
export const upadateGhettocityRadius = ({dispatch},radioState,radioEnd) =>{
    dispatch(types.UPADATEGHETTOFORADIUS,radioState,radioEnd)
}
//修改位置类型
export const updateGhettoFormLocationType = ({dispatch},item) =>{
    dispatch(types.UPDATE_GHETTOFORM_LOCATIONTYPE,item);
};
//修改坐标类型
export const updateGhettoFormCoordinaryType = ({dispatch},item) =>{
    dispatch(types.UPDATE_GHETTOFORM_COORDINARYTYPE,item);
};
// 上传文件
export const addGhettoFormFile = ({dispatch},newFile,callback,index) =>{
    if (newFile.file.size > msgs.APP_0097) {
        return{
            type:'error',
            text:msgs.APP_0100
        }
    } else {
        let basePath='fileTransferManager/upload?basePath='+upLoadPath+'&uploadType='+index+'',
        url=process.env.NODE_ENV.apiPath+basePath;
        let formData = new FormData();
         formData.append('file', newFile.file, newFile.file.name);
         Vue.http.post(url,formData).then(res => {
               if(res.body.resultCode===0){
                    if(upLoadPath==''){
                        let lens=res.body.resultValue.indexOf("/upload")
                        upLoadPath=res.body.resultValue.slice(0,lens)
                    }
                   dispatch(types.ADD_GHETTOFORM_FILE,{basePath:res.body.resultValue,fileName:newFile.file.name,html:upLoadPath});
                    if(callback){
                        callback({
                             type:'success',
                             text:msgs.APP_0101
                        });
                    }
               }else if(res.body.resultCode===6){
                        callback({
                             type:'error',
                             text:'上传文件超过指定行数'
                        });
               }else if(res.body.resultCode===2){
                        callback({
                             type:'error',
                             text:'上传文件数据格式校验失败'
                        });
               }else if(res.body.resultCode===3){
                       callback({
                             type:'error',
                             text:'上传经纬度数据超过最大面积'
                        });
                }else {
                        callback({
                             type:'error',
                             text:'上传文件失败'
                        });
               }
          })
         .catch(console.log)
    }        
};
// 删除上传文件
export const deleteGhettoFormFile = ({dispatch},newFileName) =>{
    dispatch(types.DELETE_GHETTOFORM_FILE,newFileName);
};
//删除
export const deleteGhettoForm = ({dispatch}) =>{
    dispatch(types.DELETE_GHETTOFORM);
};
// 提交数据
export const submitGhettoForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_GHETTOFORM);
};
//打开|关闭 控制台
export const switchGhettoConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_GHETTOCONSOLE,sw);
};




//-------------------------【明细】-----工作地居住地---------------------//
//-------------------------【明细】-----工作地居住地---------------------//
//-------------------------【明细】-----工作地居住地---------------------//

//修改日期类型
export const updatePlaceFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PLACEFORM_DATETYPE,item);
};
//修改日期
export const updatePlaceFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_PLACEFORM_DATE,item);
};
//----------------【工作地】------------------//
//下拉框检索条件发生变化
export const upadatePlaceChange = ({dispatch},val,) =>{
    if(val.length>1){///metadataManager/queryArea   src/data/area.json
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
        Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_PLACEFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addPlaceFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_PLACEFORM_AREAITEM,item);
};
//删除选中项
export const deletePlaceFormAreaItem = ({dispatch},item) =>{
    dispatch(types.DELETE_PLACEFORM_AREAITEM,item);
};
//----------------[居住地]-----------------//
//下拉框检索条件发生变化
export const upadateNewPlaceChange = ({dispatch},val,) =>{
    if(val.length>1){///metadataManager/queryArea   src/data/area.json
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
        Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_NEWPLACEFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addNewPlaceFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_NEWPLACEFORM_AREAITEM,item);
};
//删除选中项
export const deleteNewPlaceFormAreaItem = ({dispatch},item) =>{
    dispatch(types.DELETE_NEWPLACEFORM_AREAITEM,item);
};
//----通勤半径---//
export const upadatePlacecityRadius = ({dispatch},radioState,radioEnd) =>{
    dispatch(types.UPADATEPLACEFORADIUS,radioState,radioEnd)
}


//删除
export const deletePlaceForm = ({dispatch}) =>{
    dispatch(types.DELETE_PLACEFORM);
};
// 提交数据
export const submitPlaceForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_PLACEFORM);
};               
// //更新单选
export const upadatePlaceForm = ({dispatch},item) =>{
    dispatch(types.UPDATE_PLACEFORM,item);
};
//打开|关闭 控制台
export const switchPlaceConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_PLACECONSOLE,sw);
};

//------------------------[统计]-----工作地居住地----------------//
//------------------------[统计]-----工作地居住地----------------//
//------------------------[统计]-----工作地居住地----------------//
//更新单选
export const upadateResideForm = ({dispatch},item) =>{
    dispatch(types.UPDATE_RESIDEFORM,item);
};

//修改日期类型
export const updateResideFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_RESIDEFORM_DATETYPE,item);
};
//修改日期
export const updateResideFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_RESIDEFORM_DATE,item);
};
//----------------【工作地】------------------//
//下拉框检索条件发生变化
export const upadateResideChange = ({dispatch},val,) =>{
    if(val.length>1){///metadataManager/queryArea   src/data/area.json
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
        Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_RESIDEFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addResideFormAreaItem = ({dispatch},item) =>{
   dispatch(types.ADD_RESIDEFORM_AREAITEM,item);
};
//删除选中项
export const deleteResideFormAreaItem = ({dispatch},item) =>{
    dispatch(types.DELETE_RESIDEFORM_AREAITEM,item);
};
//----通勤半径---//
export const upadateResidecityRadius = ({dispatch},radioState,radioEnd) =>{
    dispatch(types.UPADATERESIDEFORADIUS,radioState,radioEnd)
}
export const upadateResideGroupByForm = ({dispatch},item) =>{
    dispatch(types.UPDATE_RESIDEGROUPBYFORM,item)
}

//删除
export const deleteResideForm = ({dispatch}) =>{
    dispatch(types.DELETE_RESIDEFORM);
};
// 提交数据
export const submitResideForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_RESIDEFORM);
};               
//打开|关闭 控制台
export const switchResideConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_RESIDECONSOLE,sw);
};













//***********************************************************小区明细***********************************************************************//

//修改日期类型
export const updateSubdistrictFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_SUBDISTRICTFORM_DATETYPE,item);
};
//修改日期
export const updateSubdistrictFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_SUBDISTRICTFORM_DATE,item);
};
//下拉框检索条件发生变化
export const upadateSubdistrictFormFilterChange = ({dispatch},val) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
       Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_SUBDISTRICTFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addSubdistrictFormItem = ({dispatch},item) =>{
   dispatch(types.ADD_SUBDISTRICTFORM_ITEM,item);
};
//删除选中项
export const deleteSubdistrictFormItem = ({dispatch},item) =>{
    dispatch(types.DELETE_SUBDISTRICTFORM_ITEM,item);
};
//删除
export const deleteSubdistrictForm = ({dispatch}) =>{
    dispatch(types.DELETE_SUBDISTRICTFORM);
};
// 提交数据
export const submitSubdistrictForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_SUBDISTRICTFORM);
};               
//打开|关闭 控制台
export const switchSubdistrictConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_SUBDISTRICTCONSOLE,sw);
};



//***********************************************************小区统计***********************************************************************//

//修改日期类型
export const updatePutSubdistrictFormDateType = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTSUBDISTRICTFORM_DATETYPE,item);
};
//修改日期
export const updatePutSubdistrictFormDate = ({dispatch},item) =>{
    dispatch(types.UPDATE_PUTSUBDISTRICTFORM_DATE,item);
};
//下拉框检索条件发生变化
export const upadatePutSubdistrictFormFilterChange = ({dispatch},val) =>{
    if(val.length>1){
        let url=process.env.NODE_ENV.apiPath+"/metadataManager/queryArea";
       Vue.http.get(url,{params:{areaType:3,keyword:val}}).then((response) => {
            let data=[];
            data= response.data.filter((element, index, array) => {
                return element.name.indexOf(val)!=-1;
            })
            dispatch(types.UPDATE_PUTSUBDISTRICTFORM_FILTERSELECTED,data);
        }, (response) => {
            console.log(response);
        });
    }
};
//选中下拉框一项
export const addPutSubdistrictFormItem = ({dispatch},item) =>{
   dispatch(types.ADD_PUTSUBDISTRICTFORM_ITEM,item);
};
//删除选中项
export const deletePutSubdistrictFormItem = ({dispatch},item) =>{
    dispatch(types.DELETE_PUTSUBDISTRICTFORM_ITEM,item);
};
//删除
export const deletePutSubdistrictForm = ({dispatch}) =>{
    dispatch(types.DELETE_PUTSUBDISTRICTFORM);
};
// 提交数据
export const submitPutSubdistrictForm = ({dispatch}) =>{
    dispatch(types.SUBMIT_PUTSUBDISTRICTFORM);
};               
//打开|关闭 控制台
export const switchPutSubdistrictConsolePanel = ({dispatch},sw) =>{
    dispatch(types.SWITCH_PUTSUBDISTRICTCONSOLE,sw);
};













//----------------------------------------------------------下载围栏-------------------------------------------------------------------//

//输入位置
export const appAaa = ({dispatch},sw) =>{
    dispatch(types.UPDATELOCATIONTYPE,sw);
};
//输出圈中位置
export const appPutLocation = ({dispatch},sw) =>{
    dispatch(types.UPDATEPUTLOCATION,sw);
};
//输入poi
export const appPoiFilter = ({dispatch},sw) =>{
    dispatch(types.UPDATEPOIFILTERTYPE,sw);
};
//poi明细
export const appOutPoiFilter = ({dispatch},sw) =>{
    dispatch(types.UPDATEOUTPOIFILTERTYPE,sw);
};
//poi统计
export const appPutPoiFilter = ({dispatch},sw) =>{
    dispatch(types.UPDATEPUTPOIFILTERTYPE,sw);
};
//居住地工作地
export const ghettoAaa = ({dispatch},sw) =>{
    dispatch(types.UPDATEGHETTOTYPE,sw);
};


