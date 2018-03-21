<template>
    <div>
        <div class="form-wrapper">
             <p class="head-wrapper">
                <span class="title-wrapper">{{listLabel}}</span>
            </p>
            <Radio-group :model="selectedId.id" >
                <Radio :value="item.id"   v-for="item in resideList" @change="upadateResideForm({id:item.id,name:item.name})">{{item.name}}</Radio>
            </Radio-group>
        </div>
        <td-date-picker :model="selectedDateType.id" :change="updateResideFormDateType" :update="updateResideFormDate" :type="datatime" :appsize='false' ></td-date-picker>
        <!-- 城市 -->
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{filterAreaLabel}}</span><span class='essential'>可选</span>
            </p>
            <multiselect
                :options="filterAreaList"
                key="code"
                label="name"
                :placeholder="'模糊检索'"
                :multiple="true"
                :show-labels="false"
                :close-on-select="false"
                :selected="selectedFilterAreaList"
                @search-change="upadateResideChange"
                @select="addResideFormAreaItem"
                @remove="deleteResideFormAreaItem">
                <span slot="noResult">暂无匹配项</span>
              </multiselect>
        </div>
      <!--  通勤半径 -->
      <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{radiustLabel}}</span><span class='essential' id='essential2'>可选 请输入数字（整数）</span>
            </p>
            <div class='commutingRadius'>
                 <p style='margin-right:10px;'><i-input :value.sync="radiusStart" placeholder="请输入..."><span slot="prepend">大于</span><span slot="append">m</span></i-input></p>
                 <p><i-input :value.sync="radiustEnd" placeholder="请输入..." ><span slot="prepend">小于</span><span slot="append">m</span></i-input></p>
            </div>
      </div>
      <!-- 区域类型 -->
       <div class="form-wrapper">
             <p class="head-wrapper">
                <span class="title-wrapper">{{groupByTypeLbel}}</span>
            </p>
            <Radio-group :model="groupByType.id" >
                <Radio :value="item.id"   v-for="item in domainList" @change="upadateResideGroupByForm({id:item.id,name:item.name})">{{item.name}}</Radio>
            </Radio-group>
        </div>
    </div>
</template>
<script>
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import Multiselect from 'vue-multiselect';
import {
    upadateResideForm,
    updateResideFormDateType,
    updateResideFormDate,
    upadateResideChange,
    addResideFormAreaItem,
    deleteResideFormAreaItem,
    upadateResidecityRadius,
    upadateResideGroupByForm
} from '../../../vuex/actions';
export default {
    components: {
        tdDatePicker,
        Multiselect
    },
    data () {
        return {
              datatime:[3],
              radiusStart:'',
              radiustEnd:'',
        }
    },
    vuex: {
        getters: {
            selectedId:({resideForm})=>resideForm.selectedId,
            listLabel:({resideForm})=>resideForm.listLabel,
            resideList:({resideForm})=>resideForm.resideList,
            selectedDateType:({resideForm})=>resideForm.selectedDateType,
            //工作地
            filterAreaList:({resideForm})=>resideForm.filterAreaList,
            filterAreaLabel:({resideForm})=>resideForm.filterAreaLabel,
            selectedFilterAreaList:({resideForm})=>resideForm.selectedFilterAreaList,
            //通勤半径
            radiustLabel:({resideForm})=>resideForm.radiustLabel,
            //区域类型
            groupByTypeLbel:({resideForm})=>resideForm.groupByTypeLbel,
            domainList:({resideForm})=>resideForm.domainList,
            groupByType:({resideForm})=>resideForm.groupByType,
        },
        actions:{
           upadateResideForm,
           updateResideFormDateType,
           updateResideFormDate,
           upadateResideChange,
           addResideFormAreaItem,
           deleteResideFormAreaItem,
           upadateResidecityRadius,
           upadateResideGroupByForm
        }
    },
    watch:{
         //通勤半径
        radiusStart:function(n,v){
              let sum=n.replace(/(^\s*)|(\s*$)/g, "");
              let nub=this.radiustEnd.replace(/(^\s*)|(\s*$)/g, "");
              let reg=/^[0-9]*$/g
              let reg1=/^[0-9]*$/g
              let essential2=document.getElementById('essential2')
              if(reg.test(sum)&&reg1.test(nub)){
                    essential2.style.color='#ccc'        
                    essential2.innerHTML='可选 请输入数字（整数）'
              }else{
                    essential2.style.color='red'        
                    essential2.innerHTML='请输入数字（整数）'
              }
              this.upadateResidecityRadius(sum,nub)
        },
        radiustEnd:function(n,v){
             let sum=n.replace(/(^\s*)|(\s*$)/g, "");
             let nub=this.radiusStart.replace(/(^\s*)|(\s*$)/g, "");
             let reg=/^[0-9]*$/g
             let reg1=/^[0-9]*$/g
             let essential2=document.getElementById('essential2')
             if(reg.test(sum)&&reg1.test(nub)){
                  essential2.style.color='#ccc'        
                  essential2.innerHTML='可选 请输入数字（整数）'
             }else{
                  essential2.innerHTML='请输入数字（整数）'
                  essential2.style.color='red'
             }
             this.upadateResidecityRadius(nub,sum)
        }
    },
    methods: {
        
    }
}
</script>
