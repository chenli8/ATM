<template>
    <div>
      <div class="form-wrapper">
          <p class="head-wrapper">
              <span class="title-wrapper">{{behaviorTypeLabel}}</span>
          </p>
          <Radio-group :model="selectedBehaviorType.id" >
              <Radio :value="item.id"  @change="upadateOutActiveFormType(item)" v-for="item in behaviorTypeList">{{item.name}}</Radio>
          </Radio-group>
      </div>
      <div class="form-wrapper">
          <p class="head-wrapper">
              <span class="title-wrapper">{{groupTypeLabel}}</span>
          </p>
          <Radio-group :model="groupType.id" >
              <Radio :value="item.id"  @change="upadateOutActiveGroupFormType(item)" v-for="item in groupTypeList">{{item.name}}</Radio>
          </Radio-group>
      </div>
      <td-date-picker :model="selectedDateType.id" :change="updateOutActiveFormDateType" :update="updateOutActiveFormDate" :type="datatime"></td-date-picker>

    </div>
</template>
<script>

import {rdUpload} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {updateOutActiveFormDateType,
        updateOutActiveFormDate,
        upadateOutActiveFormType,
        upadateOutActiveGroupFormType
    } from '../../../vuex/actions';


export default {
    data () {
        return {
            datatime:[1,3]
        }
    },
    components: {
        Multiselect,
        rdUpload,
        tdDatePicker,
    },
    vuex: {
        getters: {       
            selectedDateType:({outActiveForm})=>outActiveForm.selectedDateType,
            behaviorTypeLabel:({outActiveForm})=>outActiveForm.behaviorTypeLabel,
            behaviorTypeList:({outActiveForm})=>outActiveForm.behaviorTypeList,
            selectedBehaviorType:({outActiveForm})=>outActiveForm.selectedBehaviorType,
            groupTypeLabel:({outActiveForm})=>outActiveForm.groupTypeLabel,
            groupTypeList:({outActiveForm})=>outActiveForm.groupTypeList,
            groupType:({outActiveForm})=>outActiveForm.groupType
        },
        actions:{
            updateOutActiveFormDateType,
            updateOutActiveFormDate,
            upadateOutActiveFormType,
            upadateOutActiveGroupFormType
        }
    },
    methods:{
        
    }
}
</script>
