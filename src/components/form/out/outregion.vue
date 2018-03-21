<template>
    <div>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{regionTypeLabel}}</span>
        </p>
        <Radio-group :model="selectedRegionType.id" >
            <Radio :value="item.id"  @change="upadateOutRegionFormTypeSelected(item)" v-for="item in regionTypeList">{{item.name}}</Radio>
        </Radio-group>
      </div>
      <td-date-picker v-show="showDateType" :model="selectedDateType.id" :disabled="selectedRegionType.id===regionTypeList[1].id ||selectedRegionType.id===regionTypeList[2].id" :change="updateOutRegionFormDateType" :update="updateOutRegionFormDate" :type="datatime"></td-date-picker>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{areaTypeLabel}}</span>
        </p>
        <Radio-group :model="selectedAreaType.id" >
            <Radio :value="item.id" :disabled="selectedRegionType.id!==regionTypeList[0].id&&item.id===areaTypeList[0].id"  @change="updateOutRegionFormAreaType(item)" v-for="item in areaTypeList">{{item.name}}</Radio>
        </Radio-group>
      </div>
    </div>
</template>
<script>

import Multiselect from 'vue-multiselect';
import TdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import TdCheckTree from '../../../lib/checktree/checkTree.vue';
import {areaTypeList} from '../../../vuex/business-util';
import {
        upadateOutRegionFormTypeSelected,
        updateOutRegionFormDateType,
        updateOutRegionFormDate,
        updateOutRegionFormAreaType,
    } from '../../../vuex/actions';

export default {
   components: {
        Multiselect,
        TdDatePicker,
        TdCheckTree,
    },
    data(){
        return {
            datatime:[1,3]
        }
    },
    vuex: {
        getters: {
            regionTypeLabel:({outRegionForm})=>outRegionForm.regionTypeLabel,
            regionTypeList:({outRegionForm})=>outRegionForm.regionTypeList,
            selectedRegionType:({outRegionForm})=>outRegionForm.selectedRegionType,
            selectedDateType:({outRegionForm})=>outRegionForm.selectedDateType,
            showDateType:({outRegionForm})=>outRegionForm.showDateType,
            areaTypeLabel:({outRegionForm})=>outRegionForm.areaTypeLabel,
            areaTypeList:({outRegionForm})=>outRegionForm.areaTypeList,
            selectedAreaType:({outRegionForm})=>outRegionForm.selectedAreaType,
            
        },
        actions:{
            upadateOutRegionFormTypeSelected,
            updateOutRegionFormDateType,
            updateOutRegionFormDate,
            updateOutRegionFormAreaType,
        }
    },
}
</script>
