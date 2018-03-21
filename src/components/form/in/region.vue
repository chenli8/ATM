<template>
    <div>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{regionTypeLabel}}</span>
        </p>
        <Radio-group :model="selectedRegionType.id" >
            <Radio :value="item.id"  @change="upadateRegionFormTypeSelected(item)" v-for="item in regionTypeList">{{item.name}}</Radio>
        </Radio-group>
      </div>
      <td-date-picker v-show="showDateType" :model="selectedDateType.id" :disabled="selectedRegionType.id===regionTypeList[1].id ||selectedRegionType.id===regionTypeList[2].id":change="updateRegionFormDateType" :update="updateRegionFormDate" :type="datatime"></td-date-picker>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{areaTypeLabel}}</span>
        </p>
        <Radio-group :model="selectedAreaType.id" >
            <Radio :value="item.id" :disabled="selectedRegionType.id!==regionTypeList[0].id&&item.id===areaTypeList[0].id"  @change="updateRegionFormAreaType(item)" v-for="item in areaTypeList">{{item.name}}</Radio>
        </Radio-group>
      </div>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{filterAreaLabel}}</span>
        </p>
        <template v-for="item in areaTypeList">
          <multiselect
            :options="filterAreaList"
            key="code"
            label="name"
            :placeholder="'模糊检索'+item.name"
            :multiple="true"
            :show-labels="false"
            :close-on-select="false"
            :selected="selectedFilterAreaList"
            @search-change="upadateCityChange"
            @select="addRegionFormAreaItem"
            @remove="deleteRegionFormAreaItem"
            v-show="selectedAreaType.id===item.id">
            <span slot="noResult">暂无匹配项</span>
          </multiselect>
        </template>
      </div>
    </div>
</template>
<script>

import Multiselect from 'vue-multiselect';
import TdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import TdCheckTree from '../../../lib/checktree/checkTree.vue';
import {areaTypeList} from '../../../vuex/business-util';
import {
        upadateRegionFormTypeSelected,
        updateRegionFormDateType,
        updateRegionFormDate,
        updateRegionFormAreaType,
        upadateRegionFormFilterAreaChange,
        addRegionFormAreaItem,
        deleteRegionFormAreaItem,
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
            regionTypeLabel:({regionForm})=>regionForm.regionTypeLabel,
            regionTypeList:({regionForm})=>regionForm.regionTypeList,
            selectedRegionType:({regionForm})=>regionForm.selectedRegionType,
            selectedDateType:({regionForm})=>regionForm.selectedDateType,
            showDateType:({regionForm})=>regionForm.showDateType,
            areaTypeLabel:({regionForm})=>regionForm.areaTypeLabel,
            areaTypeList:({regionForm})=>regionForm.areaTypeList,
            selectedAreaType:({regionForm})=>regionForm.selectedAreaType,
            filterAreaLabel:({regionForm})=>regionForm.filterAreaLabel,
            filterAreaList:({regionForm})=>regionForm.filterAreaList,
            selectedFilterAreaList:({regionForm})=>regionForm.selectedFilterAreaList,
        },
        actions:{
            upadateRegionFormTypeSelected,
            updateRegionFormDateType,
            updateRegionFormDate,
            updateRegionFormAreaType,
            upadateRegionFormFilterAreaChange,
            addRegionFormAreaItem,
            deleteRegionFormAreaItem,
        }
    },

    methods:{
      upadateCityChange(val){
        this.upadateRegionFormFilterAreaChange(val,this.selectedAreaType.id)
      }
    },
}
</script>
