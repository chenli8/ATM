<template>
    <div>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{behaviorTypeLabel}}</span>
        </p>
        <Radio-group :model="selectedBehaviorType.id" >
            <Radio :value="item.id"  @change="upadateAppTypeFormType(item)" v-for="item in behaviorTypeList">{{item.name}}</Radio>
        </Radio-group>
      </div>
      <td-date-picker :model="selectedDateType.id" :change="updateAppTypeFormDateType" :update="updateAppTypeFormDate" :type="datatime"></td-date-picker>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{appQueryTypeLabel}}
             <a href="http://wiki.tenddata.com/pages/viewpage.action?pageId=26096670" target="_Blank" class="poiBlank">查看<rd-tooltip>点击查看有哪些应用类型</rd-tooltip></a></span>
        </p>
        <multiselect
          :options="filterAppList"
          key="code"
          label="name"
          placeholder="模糊检索"
          :multiple="true"
          :show-labels="false"
          :close-on-select="false"
          :selected="selectedFilterAppList"
          @search-change="upadateAppTypeFormFilterChange"
          @select="addAppTypeFormItem"
          @remove="deleteAppTypeFormItem">
          <span slot="noResult">暂无匹配项</span>
        </multiselect>
      </div>
    </div>
</template>
<script>

import Multiselect from 'vue-multiselect';
import TdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import { rdTooltip} from 'radon-ui';
import {
        upadateAppTypeFormType,
        updateAppTypeFormDateType,
        updateAppTypeFormDate,
        updateAppQueryType,
        upadateAppTypeFormFilterChange,
        addAppTypeFormItem,
        deleteAppTypeFormItem,
    } from '../../../vuex/actions';

export default {
   components: {
        Multiselect,
        TdDatePicker,
        rdTooltip
    },
    data(){
        return {
            datatime:[1,3]
        }
    },
    vuex: {
        getters: {
            behaviorTypeLabel:({appTypeForm})=>appTypeForm.behaviorTypeLabel,
            behaviorTypeList:({appTypeForm})=>appTypeForm.behaviorTypeList,
            selectedBehaviorType:({appTypeForm})=>appTypeForm.selectedBehaviorType,
            selectedDateType:({appTypeForm})=>appTypeForm.selectedDateType,
            appQueryTypeLabel:({appTypeForm})=>appTypeForm.appQueryTypeLabel,
            filterAppLabel:({appTypeForm})=>appTypeForm.filterAppLabel,
            filterAppList:({appTypeForm})=>appTypeForm.filterAppList,
            selectedFilterAppList:({appTypeForm})=>appTypeForm.selectedFilterAppList,
        },
        actions:{
            upadateAppTypeFormType,
            updateAppTypeFormDateType,
            updateAppTypeFormDate,
            updateAppQueryType,
            upadateAppTypeFormFilterChange,
            addAppTypeFormItem,
            deleteAppTypeFormItem,
        }
    },
}
</script>
