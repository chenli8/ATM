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
                      <Radio :value="item.id"   @change="updateBehaviorFormCoordinaryType(item)"  v-for="item in coordinaryTypeList">{{item.name}}</Radio>
                     </Radio-group>
                </div>
            </div>
            <td-date-picker :model="selectedDateType.id" :change="updateBehaviorFormDateType" :update="updateBehaviorFormDate" :type="datatime"></td-date-picker>
           
           
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
                  @search-change="upadateBehaviorFormFilterChange"
                  @select="addBehaviorFormItem"
                  @remove="deleteBehaviorFormItem">
                  <span slot="noResult">暂无匹配项</span>
                </multiselect>
            </div>
    </div>
</template>
<script>
import {rdTooltip} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {updateBehaviorFormDateType,
        updateBehaviorFormDate,
        updateBehaviorFormCoordinaryType,
        upadateBehaviorFormFilterChange,
        addBehaviorFormItem,
        deleteBehaviorFormItem,
    } from '../../../vuex/actions';

export default {
    components: {
        Multiselect,
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
            selectedDateType:({behaviorForm})=>behaviorForm.selectedDateType,
            timeLabel:({behaviorForm})=>behaviorForm.timeLabel,
            coordinaryTypeList:({behaviorForm})=>behaviorForm.coordinaryTypeList,
            selectedCoordinaryType:({behaviorForm})=>behaviorForm.selectedCoordinaryType,
            appQueryTypeLabel:({behaviorForm})=>behaviorForm.appQueryTypeLabel,
            filterAppLabel:({behaviorForm})=>behaviorForm.filterAppLabel,
            filterAppList:({behaviorForm})=>behaviorForm.filterAppList,
            selectedFilterAppList:({behaviorForm})=>behaviorForm.selectedFilterAppList,
        },
        actions:{
            updateBehaviorFormDateType,
            updateBehaviorFormDate,
            updateBehaviorFormCoordinaryType,
            upadateBehaviorFormFilterChange,
            addBehaviorFormItem,
            deleteBehaviorFormItem,
        }
    },
    methods:{
    }
}
</script>
