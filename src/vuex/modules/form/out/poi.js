import {
    DELETE_OUTPOIFORM,//POI
    UPDATE_POIFORMLISTLABEL,
    UPDATE_POIFORM_COORDINATE,
    UPDATE_POIFORM_INQUIRY,
    UPDATE_POIFORM_WITHIN,
    UPDATE_POIFORM_RADIUS,
    UPDATE_POIFORM_WITHINPROVINCE,
    UPDATE_POIFORM_AREA,
    UPDATE_POIFORM_CITY,
    UPDATE_TIME_PERICOPE,
    DELETE_TIME_PERICOPE,
    UPDATE_POIFORM_SELECTED,
    GET_POIFORM_DATA,
    GET_POIFORM_DATA_CITY,
    DESTROYED_POIFORM_SELECTED
} from '../../../mutation-types';
import {APP_0137} from '../../../app-messages';
//设备类型
import {fileContentList,coordinateList,inquiryList,withinList} from '../../../business-util';
const reset=(state)=>{
  state.withinId='';
  state.withinText='';
  state.Province='';
  state.City='';
  state.Area='';
  state.districtArr=[];
  state.peripheryRadiuNumber='';
  state.timePericopeArr=[];
  state.poiListSelected=[];
}
const state = {
    formName: 'poiFormoutForm',
    //新建任务-显示文字
    listLabel: '新建任务',
    //新建任务-内容
    listConnect:'',
    //坐标格式-label
    coordinateLabel:'坐标格式',
    //坐标id
    coordinateId:0,
    //坐标格式数组
    coordinateList,
    //坐标格式选中项 内容
    coordinateText:'',
    //查询内容-label
    inquiry:'查询内容',
    //查询内容-数组
    inquiryList,
    //查询内容id
    inquiryId:0,
    //查询内容-选中项 内容
    inquiryText:'',
//【pol排名】
    //时间类型-label
    within:'时间类型',
    //时间类型id
    withinId:0,
    //时间类型-数组
    withinList,
    //时间类型-选中内容
    withinText:'',
    //城市区域
    district:'城市区域',
    //城市区域-选中项数组
    districtArr:[],
    //省
    Province:'',
    //市
    City:'',
    //区
    Area:'',
    //时间选段-labeL
    timePericope:'时间选段',
    //时间选段数组
    timePericopeArr:[],
//【周边poi】
    //周边半径-label
    peripheryRadius:'周边半径',
    //存储peripheryRadius
    peripheryRadiuNumber:'',
    //查询内容-label
    inquiryConnect:'查询内容',
    //POI排名(TOP1000倒序排列)
    community:false,
    //点击周边POI--显示
    circumjacent:false,
    //获取所有标签
    tagList:[],
    //选中标签
    poiListSelected:[],
    //获取城市数组
    provinceList:[],
    cityListArr:[],
    areaListArr:[],
    //提交时用的id
  /*  submitid:[],
    //提交数据
    submitData:{},*/
}

const mutations = {
    [DELETE_OUTPOIFORM](state) {
        state.listConnect ='';
        state.coordinateText='';
        state.coordinateId='';
        state.inquiryText='';
        state.inquiryId='';
        state.withinText='';
        state.community=false;
        state.circumjacent=false;
        reset(state)
       /* state.submitData={};
        state.submitid=[];*/
    },
    [UPDATE_POIFORMLISTLABEL](state,item){
         state.listConnect=item;
    },
    [UPDATE_POIFORM_COORDINATE](state,item){
        state.coordinateText=item.text;
        state.coordinateId=item.id;
    },
    [UPDATE_POIFORM_INQUIRY](state,item){
        state.inquiryText=item.text;
        state.inquiryId=item.id;
        if(item.id===1){
            state.community=false
            state.circumjacent=false
            state.withinId=0;
            reset(state)
        }else if(item.id===2){
            state.community=false
            state.circumjacent=true
            state.withinId=0
            state.withinText='';
            state.Province='';
            state.City='';
            state.Area='';
            state.districtArr=[];
            state.timePericopeArr=[];
        }else if(item.id===3){
            state.community=true
            state.circumjacent=true
        }
    },
    [UPDATE_POIFORM_WITHIN](state,item){
        state.withinText=item.text;
        state.withinId=item.id;
    },//省
    [UPDATE_POIFORM_WITHINPROVINCE](state,item){
        state.Province=item
    },
    [UPDATE_POIFORM_CITY](state,item){
        state.City=item
    },
    [UPDATE_POIFORM_AREA](state,item,list){
        state.districtArr=item
        state.Area=list
        console.log(state.districtArr)
    },
    [UPDATE_POIFORM_RADIUS](state,item){
        state.peripheryRadiuNumber=item;
    },
    [UPDATE_TIME_PERICOPE](state,hour,index,end){
            let obj={
                hour,
                index,
                end
            }
            state.timePericopeArr.splice(index,1,obj)
    },
    [DELETE_TIME_PERICOPE](state,item){
        state.timePericopeArr.splice(item,1)
    },
    [GET_POIFORM_DATA](state,item){
        state.tagList=item
    },
    [GET_POIFORM_DATA_CITY](state,item){
        state.provinceList=item.province
        state.cityListArr=item.city
        state.areaListArr=item.area
    },
    [UPDATE_POIFORM_SELECTED](state,arr){
      let list = [];
        arr.forEach((obj) => {
            let index=-1;
            for (let i = 0, len = state.poiListSelected.length; i < len; i++) {
                const selectedObj = state.poiListSelected[i];
                if (selectedObj.id === obj.id) {
                    index=i;
                    state.poiListSelected.splice(index,1);
                    --i;
                    --len;
                }
            }
            if(obj.checked){
                list.push(obj);
            }
        });
        state.poiListSelected = state.poiListSelected.concat(list);
    },
    [DESTROYED_POIFORM_SELECTED](state){
        state.tagList={}
    },
      /*[SUBMIT_IDFORMOUTFORM](state) {
      let str=state.submitid.join(",");
        if(state.selectedArr.length==0&&state.selectedsheArr.length==0&&state.selectedMD5Arr.length==0){

             state.submitData={
                           error:APP_0137
                        }
        }else{
            state.submitData= {
                    'expType': 'outputDetail',
                    'exps': [{
                        'outputFilter':str,
                        'type':'device',
                        'expCode':'02000'
                    }]
             }
        }
       
    }*/
}

export default {
    state,
    mutations
}