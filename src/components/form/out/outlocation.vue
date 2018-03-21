<template>
    <div>
        <td-date-picker :model="selectedDateType.id" :change="updateOutLocationFormDateType" :appsize='false' :update="updateOutLocationFormDate" :type="datatime"></td-date-picker>
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
               @search-change="upadateOutLocationChange"
               @select="addOutLocationFormAreaItem"
               @remove="deleteOutLocationFormAreaItem"
               v-show="true">
               <span slot="noResult">暂无匹配项</span>
           </multiselect>
        </div>
    </div>
</template>
<script>

import {rdUpload} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {updateOutLocationFormDateType,
        updateOutLocationFormDate,
        upadateOutLocationChange,
        addOutLocationFormAreaItem,
        deleteOutLocationFormAreaItem
       } from '../../../vuex/actions';

export default {
    components: {
        Multiselect,
        rdUpload,
        tdDatePicker,
    },
    data(){
        return {
            datatime:[1,3]
        }
    },
    vuex: {
        getters: {
            selectedDateType:({outLocationForm})=>outLocationForm.selectedDateType,
            cityLabel:({outLocationForm})=>outLocationForm.cityLabel,
            filterAreaList:({outLocationForm})=>outLocationForm.filterAreaList,
            selectedFilterAreaList:({outLocationForm})=>outLocationForm.selectedFilterAreaList,
        },
        actions:{
            updateOutLocationFormDateType,
            updateOutLocationFormDate,
            upadateOutLocationChange,
            addOutLocationFormAreaItem,
            deleteOutLocationFormAreaItem
        }
    },
    methods:{
    }
}
</script>
