<template>

    <div>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{regionTypeLabel}}</span>
        </p>
        <Radio-group :model="selectedRegionType.id" >
            <Radio :value="item.id"  @change="upadatePutRegionFormTypeSelected(item)" v-for="item in regionTypeList">{{item.name}}</Radio>
        </Radio-group>
      </div>
      <td-date-picker v-show="showDateType" :model="selectedDateType.id" :disabled="selectedRegionType.id===regionTypeList[1].id ||selectedRegionType.id===regionTypeList[2].id" :change="updatePutRegionFormDateType" :update="updatePutRegionFormDate" :type="datatime"></td-date-picker>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{areaTypeLabel}}</span>
        </p>
        <Radio-group :model="selectedAreaType.id" >
            <Radio :value="item.id" :disabled="selectedRegionType.id!==regionTypeList[0].id&&item.id===areaTypeList[0].id"  @change="updatePutRegionFormAreaType(item)" v-for="item in areaTypeList">{{item.name}}</Radio>
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
        upadatePutRegionFormTypeSelected,
        updatePutRegionFormDateType,
        updatePutRegionFormDate,
        updatePutRegionFormAreaType,
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
            regionTypeLabel:({putRegionForm})=>putRegionForm.regionTypeLabel,
            regionTypeList:({putRegionForm})=>putRegionForm.regionTypeList,
            selectedRegionType:({putRegionForm})=>putRegionForm.selectedRegionType,
            selectedDateType:({putRegionForm})=>putRegionForm.selectedDateType,
            showDateType:({putRegionForm})=>putRegionForm.showDateType,
            areaTypeLabel:({putRegionForm})=>putRegionForm.areaTypeLabel,
            areaTypeList:({putRegionForm})=>putRegionForm.areaTypeList,
            selectedAreaType:({putRegionForm})=>putRegionForm.selectedAreaType,
            
        },
        actions:{
            upadatePutRegionFormTypeSelected,
            updatePutRegionFormDateType,
            updatePutRegionFormDate,
            updatePutRegionFormAreaType,
        }
    },
}
</script>
