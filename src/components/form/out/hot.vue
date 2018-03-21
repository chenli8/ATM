<template>
    <div>
     
      <td-date-picker :model="selectedDateType.id" :type="datatime" :change="updateHotFormDateType" :update="updateHotFormDate"></td-date-picker>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{appQueryTypeLabel}}</span>
        </p>
        <multiselect
          :options="filterAppList"
          key="code"
          label="name"
          placeholder="模糊检索"
          :multiple="false"
          :show-labels="false"
          :close-on-select="false"
          :selected=""
          :searchable="true",
          @search-change="upadateHotFormFilterChange"
          @select="addHotFormItem"
          @remove="deleteHotFormItem">
          <span slot="noResult">暂无匹配项</span>
        </multiselect>
      </div>
      <!--  选择城市 -->
         <div class="form-wrapper">
           <p class="head-wrapper">
               <span class="title-wrapper">{{cityLabel}} (必选项--输入'全国'默认选择全部城市)</span>
           </p>
           <multiselect
               :options="filterAreaList"
               key="code"
               label="name"
               :placeholder="'模糊检索城市'"
               :multiple="true"
               :show-labels="false"
               :close-on-select="false"
               :selected="selectedFilterAreaList"
               @search-change="upadateHotChange"
               @select="addHotFormAreaItem"
               @remove="deleteHotFormAreaItem"
               v-show="true">
               <span slot="noResult">暂无匹配项</span>
           </multiselect>
         </div>
    </div>
</template>
<script>

import Multiselect from 'vue-multiselect';
import TdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {
        updateHotFormDateType,
        updateHotFormDate,
        upadateHotFormFilterChange,
        addHotFormItem,
        deleteHotFormItem,
        upadateHotChange,
        addHotFormAreaItem,
        deleteHotFormAreaItem
    } from '../../../vuex/actions';

export default {
   components: {
        Multiselect,
        TdDatePicker,
    },
    vuex: {
        getters: {
            selectedDateType:({hotForm})=>hotForm.selectedDateType,
            appQueryTypeLabel:({hotForm})=>hotForm.appQueryTypeLabel,
            filterAppList:({hotForm})=>hotForm.filterAppList,
            selectedFilterAppList:({hotForm})=>hotForm.selectedFilterAppList,
            datatime:({hotForm})=>hotForm.datatime,
            cityLabel:({hotForm})=>hotForm.cityLabel,
            filterAreaList:({hotForm})=>hotForm.filterAreaList,
            selectedFilterAreaList:({hotForm})=>hotForm.selectedFilterAreaList,
        },
        actions:{
            updateHotFormDateType,
            updateHotFormDate,
            upadateHotFormFilterChange,
            addHotFormItem,
            deleteHotFormItem,
            upadateHotChange,
            addHotFormAreaItem,
            deleteHotFormAreaItem
        }
    },
}
</script>
