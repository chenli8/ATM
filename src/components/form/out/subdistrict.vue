<template>
    <div>
        <td-date-picker :model="selectedDateType.id" :change="updateSubdistrictFormDateType" :appsize='false' :type="datatime" :update="updateSubdistrictFormDate"></td-date-picker>
          <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{timeLabel}}</span>
            </p>
         </div>
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{appQueryTypeLabel}}
                <small style='color:#ccc'>必选</small>
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
              @search-change="upadateSubdistrictFormFilterChange"
              @select="addSubdistrictFormItem"
              @remove="deleteSubdistrictFormItem">
              <span slot="noResult">暂无匹配项</span>
            </multiselect>
        </div>
    </div>
</template>
<script>

import {rdUpload} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {updateSubdistrictFormDateType,
        updateSubdistrictFormDate,
        upadateSubdistrictFormFilterChange,
        addSubdistrictFormItem,
        deleteSubdistrictFormItem
       } from '../../../vuex/actions';

export default {
    components: {
        Multiselect,
        rdUpload,
        tdDatePicker,
    },
    data(){
        return {
            datatime:[3]
        }
    },
    vuex: {
        getters: {
            selectedDateType:({subdistrictForm})=>subdistrictForm.selectedDateType,
            timeLabel:({subdistrictForm})=>subdistrictForm.timeLabel,
            appQueryTypeLabel:({subdistrictForm})=>subdistrictForm.appQueryTypeLabel,
            filterAppLabel:({subdistrictForm})=>subdistrictForm.filterAppLabel,
            filterAppList:({subdistrictForm})=>subdistrictForm.filterAppList,
            selectedFilterAppList:({subdistrictForm})=>subdistrictForm.selectedFilterAppList,
        },
        actions:{
            updateSubdistrictFormDateType,
            updateSubdistrictFormDate,
            upadateSubdistrictFormFilterChange,
            addSubdistrictFormItem,
            deleteSubdistrictFormItem
        }
    },
    methods:{
    }
}
</script>
