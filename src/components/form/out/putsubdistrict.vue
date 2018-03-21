<template>
    <div>
        <td-date-picker :model="selectedDateType.id" :change="updatePutSubdistrictFormDateType" :appsize='false' :type="datatime" :update="updatePutSubdistrictFormDate"></td-date-picker>
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
              @search-change="upadatePutSubdistrictFormFilterChange"
              @select="addPutSubdistrictFormItem"
              @remove="deletePutSubdistrictFormItem">
              <span slot="noResult">暂无匹配项</span>
            </multiselect>
        </div>
    </div>
</template>
<script>

import {rdUpload} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {updatePutSubdistrictFormDateType,
        updatePutSubdistrictFormDate,
        upadatePutSubdistrictFormFilterChange,
        addPutSubdistrictFormItem,
        deletePutSubdistrictFormItem
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
            selectedDateType:({putSubdistrictForm})=>putSubdistrictForm.selectedDateType,
            timeLabel:({putSubdistrictForm})=>putSubdistrictForm.timeLabel,
            appQueryTypeLabel:({putSubdistrictForm})=>putSubdistrictForm.appQueryTypeLabel,
            filterAppLabel:({putSubdistrictForm})=>putSubdistrictForm.filterAppLabel,
            filterAppList:({putSubdistrictForm})=>putSubdistrictForm.filterAppList,
            selectedFilterAppList:({putSubdistrictForm})=>putSubdistrictForm.selectedFilterAppList,
        },
        actions:{
            updatePutSubdistrictFormDateType,
            updatePutSubdistrictFormDate,
            upadatePutSubdistrictFormFilterChange,
            addPutSubdistrictFormItem,
            deletePutSubdistrictFormItem
        }
    },
    methods:{
    }
}
</script>
