<template>
    <div>
     <nav class='application_nav'>
        <h5 @click='application()' class='application application_bg'>活跃行为</h5>
        <h5 @click='account()' class='account'>活跃属性</h5>
    </nav>
    <section v-show='bg1'>
         <section class='active_card'>
                 <div class="form-wrapper">
                       <p class="head-wrapper">
                           <span class="title-wrapper">{{behaviorTypeLabel}}</span>
                       </p>
                      <Radio-group :model="selectedBehaviorType.id" >
                          <Radio :value="item.id"  @change="upadateActiveFormType(item)" v-for="item in behaviorTypeList">{{item.name}}</Radio>
                      </Radio-group>
                </div>
                <div class="form-wrapper" v-if="selectedBehaviorType.id===2">
                      <p class="head-wrapper">
                          <span class="title-wrapper">{{timeLabel}} {{APP_0111}}</span>
                      </p>
                      <multiselect
                        :options="timeList"
                        key="id"
                        label="name"
                        :searchable="false"
                        placeholder=""
                        :multiple="true"
                        :show-labels="false"
                        :close-on-select="false"
                        @select="addActiveFormTime"
                        @remove="deleteActiveFormTime"
                        >
                      </multiselect>
                  </div>
        </section>
    </section>
    <section v-show='bg2'>
         <div class="form-wrapper">
                   <p class="head-wrapper">
                       <span class="title-wrapper">{{activeBehaviorLabel}}</span>
                   </p>
                  <Radio-group :model="activeBehaviorType.id" >
                      <Radio :value="item.id"  @change="upadateactiveBehaviorType(item)" v-for="item in activeBehaviorList">{{item.name}}</Radio>
                  </Radio-group>
          </div>
    </section>
    <td-date-picker :model="svn" :change="updateActiveFormDateType" :update="updateActiveFormDate" :type="datatime1" v-if='sum'></td-date-picker>

    </div>
</template>
<script>

import {rdUpload} from 'radon-ui';
import Multiselect from 'vue-multiselect';
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import {updateActiveFormDateType,
        updateActiveFormDate,
        addActiveFormTime,
        deleteActiveFormTime,
        upadateActiveFormType,
        upadateactiveBehaviorType,
        upadateactiveBehaviorTabchange
    } from '../../../vuex/actions';
import {APP_0111} from '../../../vuex/app-messages';

export default {
    data () {
        return {
           APP_0111,
           datatime1:[1,3],
           bg1:true,
           bg2:false,
           sum:true,
           svn:0,
        }
    },
    components: {
        Multiselect,
        rdUpload,
        tdDatePicker,
    },
    vuex: {
        getters: {       
            selectedDateType:({activeForm})=>activeForm.selectedDateType,
            timeLabel:({activeForm})=>activeForm.timeLabel,
            timeList:({activeForm})=>activeForm.timeList,
            behaviorTypeLabel:({activeForm})=>activeForm.behaviorTypeLabel,
            behaviorTypeList:({activeForm})=>activeForm.behaviorTypeList,
            selectedBehaviorType:({activeForm})=>activeForm.selectedBehaviorType,
            activeBehaviorLabel:({activeForm})=>activeForm.activeBehaviorLabel,
            activeBehaviorList:({activeForm})=>activeForm.activeBehaviorList,
            activeBehaviorType:({activeForm})=>activeForm.activeBehaviorType,
        },
        actions:{
            updateActiveFormDateType,
            updateActiveFormDate,
            addActiveFormTime,
            deleteActiveFormTime,
            upadateActiveFormType,
            upadateactiveBehaviorType,
            upadateactiveBehaviorTabchange
        }
    },
    ready(){
      this.svn=this.selectedDateType.id
    },
    methods:{
        application(){
            this.bg1=true
            this.bg2=false
            $('.application').addClass('application_bg')
            $('.account').removeClass('application_bg')
            this.upadateactiveBehaviorTabchange(0)
            this.datatime1=[1,3]
            let math=Math.ceil(Math.random()*100)
            this.svn=math
        },
        account(){
            this.bg1=false
            this.bg2=true
            $('.application').removeClass('application_bg')
            $('.account').addClass('application_bg')
            this.upadateactiveBehaviorTabchange(1)
            this.datatime1=[1]
            let math=Math.ceil(Math.random()*100)
            this.svn=math
        }
    }
}
</script>
