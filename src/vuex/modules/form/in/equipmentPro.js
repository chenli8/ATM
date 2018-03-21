import {
    UPDATE_EQUIPMENTPROFORM_TYPESELECTED,
    ADD_EQUIPMENTPROFORM_ITEM,
    UPDATE_EQUIPMENTPROFORM_FILTERSELECTED,
    SORT_EQUIPMENTPROFORM_FILTER,
    DELETE_EQUIPMENTPROFORM_ITEM,
    DELETE_EQUIPMENTPROFORM,
    SUBMIT_EQUIPMENTPROFORM,
} from '../../../mutation-types';
import {equipmentProList} from '../../../business-util';
import {APP_0136} from '../../../app-messages';
equipmentProList[0].name='机型'
const FILTERLIST='filterList';
let filterListIndexs={};

const setFilterList = () => {
    let list=[];
    equipmentProList.forEach((obj,index)=>{
         list.$set(index,[]);
         filterListIndexs[obj.id]=index;
    });
    return list;
}

const state = {
    formName: 'equipmentProForm',
    //设备属性-显示文字
    listLabel: '设备属性',
    filterListIndexs:filterListIndexs,
    //设备属性-集合
    equipmentProList,
    selectedLabel:'已选设备属性集合',
    //已选设备属性集合
    selectedList:[],
    filterLabel:'根据所选设备属性检索',
    filterList:setFilterList(),
    //根据已选设备分类对应具体数据集合
    selectedFilterList:setFilterList(),
    //提交数据
    submitData:{},
}
const mutations = {
    [UPDATE_EQUIPMENTPROFORM_TYPESELECTED](state,item){
        const index=state.selectedList.indexOf(item);
        if(index!==-1){
            state.selectedList.splice(index,1);
            state.filterList[filterListIndexs[item.id]]=[];
            state.selectedFilterList.$set(filterListIndexs[item.id],[]);
        }else{
            state.selectedList.push(item)
        }
    },
    [UPDATE_EQUIPMENTPROFORM_FILTERSELECTED](state, data,typeId) {
        state.filterList.$set(filterListIndexs[typeId],data);
    },
    [ADD_EQUIPMENTPROFORM_ITEM](state, item,typeId) {
        if(typeId){
            state.selectedFilterList[filterListIndexs[typeId]].push(item);
        }
    },
    [DELETE_EQUIPMENTPROFORM_ITEM](state,item,typeId) {
        let index=-1,selectedList=state.selectedFilterList[filterListIndexs[typeId]];
        for(let i=0,len=selectedList.length;i<len;i++){
            if(selectedList[i].code===item.code){
                index=i;
                break;
            }
        }
        selectedList.splice(index,1);
    },
    [DELETE_EQUIPMENTPROFORM](state) {
        state.selectedList=[];
        state.selectedFilterList=setFilterList();
        state.submitData={};
    },
    [SUBMIT_EQUIPMENTPROFORM](state) {
        let exps=[];
        state.selectedList.forEach((obj)=>{
            const list= state.selectedFilterList[filterListIndexs[obj.id]];
            if(list.length){
                let dataList='';
                list.forEach((item)=>{
                        dataList+=item.code+',';
                });
                exps.push({
                    dataType: obj.id,
                    dataList:dataList.substring(0, dataList.length - 1),
                    expCode:'01030',
                });
            }
        });
      if(exps.length==0){
             state.submitData={
                   error:APP_0136
            }
      }else{
            state.submitData= {
                expType: 'deviceFilter',
                exps: exps,
            }
      }
       
    },
}

export default {
    state,
    mutations,
}