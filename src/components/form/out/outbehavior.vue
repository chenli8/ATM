<template>
    <div>
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{timeLabel}}</span>
            </p>
         </div>
         <div class="form-wrapper">
            <div class="form-item-wrapper" >
                <Radio-group :model="selectedCoordinaryType.id">
                  <Radio :value="item.id"   @change="updateoutBehaviorFormCoordinaryType(item)"  v-for="item in coordinaryTypeList">{{item.name}}</Radio>
                 </Radio-group>
            </div>
        </div>
        <td-date-picker :model="selectedDateType.id" :change="updateoutBehaviorFormDateType" :appsize='false' :type="datatime" :update="updateoutBehaviorFormDate"></td-date-picker>
          
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
              @search-change="upadateoutBehaviorFormFilterChange"
              @select="addoutBehaviorFormItem"
              @remove="deleteoutBehaviorFormItem">
              <span slot="noResult">暂无匹配项</span>
            </multiselect>
        </div>
    </div>
</template>
<script>

import {rdUpload,rdTooltip} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {updateoutBehaviorFormDateType,
        updateoutBehaviorFormDate,
        updateoutBehaviorFormCoordinaryType,

        upadateoutBehaviorFormFilterChange,
        addoutBehaviorFormItem,
        deleteoutBehaviorFormItem
       } from '../../../vuex/actions';

export default {
    components: {
        Multiselect,
        rdUpload,
        tdDatePicker,
        rdTooltip
    },
    data(){
        return {
            datatime:[1,3]
        }
    },
    vuex: {
        getters: {
            selectedDateType:({outBehaviorForm})=>outBehaviorForm.selectedDateType,
            timeLabel:({outBehaviorForm})=>outBehaviorForm.timeLabel,
            coordinaryTypeList:({outBehaviorForm})=>outBehaviorForm.coordinaryTypeList,
            selectedCoordinaryType:({outBehaviorForm})=>outBehaviorForm.selectedCoordinaryType,
            appQueryTypeLabel:({appTypeForm})=>appTypeForm.appQueryTypeLabel,
            filterAppLabel:({outBehaviorForm})=>outBehaviorForm.filterAppLabel,
            filterAppList:({outBehaviorForm})=>outBehaviorForm.filterAppList,
            selectedFilterAppList:({outBehaviorForm})=>outBehaviorForm.selectedFilterAppList,
        },
        actions:{
            updateoutBehaviorFormDateType,
            updateoutBehaviorFormDate,
            updateoutBehaviorFormCoordinaryType,

            upadateoutBehaviorFormFilterChange,
            addoutBehaviorFormItem,
            deleteoutBehaviorFormItem
        }
    },
    methods:{
    }
}
</script>
