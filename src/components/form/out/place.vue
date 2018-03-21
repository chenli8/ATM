<template>
    <div>
       <div class="form-wrapper">
             <p class="head-wrapper">
                <span class="title-wrapper">{{listLabel}}</span>
            </p>
            <Radio-group :model="selectedId.id" >
                <Radio :value="item.id"   v-for="item in placeList" @change="upadatePlaceForm({id:item.id,name:item.name})">{{item.name}}</Radio>
            </Radio-group>
        </div>
        <td-date-picker :model="selectedDateType.id" :change="updatePlaceFormDateType" :update="updatePlaceFormDate" :type="datatime" :appsize='false' ></td-date-picker>
        <!-- 工作地城市 -->
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
                @search-change="upadatePlaceChange"
                @select="addPlaceFormAreaItem"
                @remove="deletePlaceFormAreaItem">
                <span slot="noResult">暂无匹配项</span>
              </multiselect>
        </div>
      <!-- 居住地城市 -->
      <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{filterPlaceLabel}}</span><span class='essential'>可选</span>
            </p>
            <multiselect
                :options="filterPlaceList"
                key="code"
                label="name"
                :placeholder="'模糊检索'"
                :multiple="true"
                :show-labels="false"
                :close-on-select="false"
                :selected="selectedFilterPlaceList"
                @search-change="upadateNewPlaceChange"
                @select="addNewPlaceFormAreaItem"
                @remove="deleteNewPlaceFormAreaItem">
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
    </div>
</template>
<script>
import tdDatePicker from '../../../lib/calendar/tdDatePicker.vue';
import Multiselect from 'vue-multiselect';
import {
    upadatePlaceForm,
    updatePlaceFormDateType,
    updatePlaceFormDate,
    upadatePlaceChange,
    addPlaceFormAreaItem,
    deletePlaceFormAreaItem,
    upadateNewPlaceChange,
    addNewPlaceFormAreaItem,
    deleteNewPlaceFormAreaItem,
    upadatePlacecityRadius,
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
            selectedId:({placeForm})=>placeForm.selectedId,
            listLabel:({placeForm})=>placeForm.listLabel,
            placeList:({placeForm})=>placeForm.placeList,
            selectedDateType:({placeForm})=>placeForm.selectedDateType,
            //工作地
            filterAreaList:({placeForm})=>placeForm.filterAreaList,
            filterAreaLabel:({placeForm})=>placeForm.filterAreaLabel,
            selectedFilterAreaList:({placeForm})=>placeForm.selectedFilterAreaList,
            //居住地
            filterPlaceList:({placeForm})=>placeForm.filterPlaceList,
            filterPlaceLabel:({placeForm})=>placeForm.filterPlaceLabel,
            selectedFilterPlaceList:({placeForm})=>placeForm.selectedFilterPlaceList,
            //通勤半径
            radiustLabel:({placeForm})=>placeForm.radiustLabel,
        },
        actions:{
           upadatePlaceForm,
           updatePlaceFormDateType,
           updatePlaceFormDate,
           upadatePlaceChange,
           addPlaceFormAreaItem,
           deletePlaceFormAreaItem,
           upadateNewPlaceChange,
           addNewPlaceFormAreaItem,
           deleteNewPlaceFormAreaItem,
           upadatePlacecityRadius,
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
              this.upadatePlacecityRadius(sum,nub)
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
             this.upadatePlacecityRadius(nub,sum)
        }
    },
    methods: {
        
    }
}
</script>
