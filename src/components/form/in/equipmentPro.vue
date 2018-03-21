<!-- 设备属性筛选条件 -->
<template>
    <div>
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{listLabel}}</span>
            </p>
            <Checkbox-group :model="[]" >
                <Checkbox :value="item.id" @change="newUpadateEquipmentProFormTypeSelected(item)"  v-for="item in equipmentProList">{{item.name}}</Checkbox>
            </Checkbox-group>
        </div>
       
        <template v-for="item in newEquipmentProList">
           <div class="form-wrapper" v-if="selectedList.indexOf(item)!==-1">
              <p class="head-wrapper">
                  <span class="title-wrapper">根据{{item.name}}检索 <a v-show="item.id==92"><Icon type="help-circled"></Icon><rd-tooltip>网络类型包括2G、3G、4G、WIFI 、unknown</rd-tooltip></a></span>
              </p>
              <multiselect
                 :options="filterList[$index]"
                key="code"
                label="name"
                :id=item.id
                :placeholder="'模糊检索'+item.name"
                :multiple="true"
                :show-labels="false"
                :selected="selectedFilterList[$index]"
                @search-change="upadateEquipmentProFormFilterChange"
                @select="addEquipmentProFormItem"
                @remove="deleteEquipmentProFormItem"
                >
                <span slot="noResult">暂无匹配项</span>
              </multiselect>
          </div>
        </template>
       
    <template v-for="item in oldEquipmentProList">
       <div class="form-wrapper" v-if="selectedList.indexOf(item)!==-1">
          <p class="head-wrapper">
              <span class="title-wrapper">根据{{item.name}}检索</span>
          </p>
          <multiselect
            :options="priceList"
            key="code"
            label="name"
            :id=item.id
            :placeholder="'模糊检索'+item.name"
            :multiple="true"
            :show-labels="false"
            @select="addEquipmentProFormItem"
            @remove="deleteEquipmentProFormItem"
            >
            <span slot="noResult">暂无匹配项</span>
          </multiselect>
      </div>
    </template>
     <template v-for="item in oldSiceEquipmentProList">
        <div class="form-wrapper" v-if="selectedList.indexOf(item)!==-1">
           <p class="head-wrapper">
               <span class="title-wrapper">根据{{item.name}}检索</span>
           </p>
           <multiselect
             :options="sizeList"
             key="code"
             label="name"
             :id=item.id
             :placeholder="'模糊检索'+item.name"
             :multiple="true"
             :show-labels="false"
             @select="addEquipmentProFormItem"
             @remove="deleteEquipmentProFormItem"
             >
             <span slot="noResult">暂无匹配项</span>
           </multiselect>
       </div>
     </template>
     <!-- 硬件特性 -->
     <template v-for="item in hardwareSiceEquipmentProList">
        <div class="form-wrapper" v-if="selectedList.indexOf(item)!==-1">
           <p class="head-wrapper">
               <span class="title-wrapper">根据{{item.name}}检索</span>
           </p>
           <multiselect
             :options="hardware"
             key="code"
             label="name"
             :id=item.id
             :placeholder="'模糊检索'+item.name"
             :multiple="true"
             :show-labels="false"
             @select="addEquipmentProFormItem"
             @remove="deleteEquipmentProFormItem"
             >
             <span slot="noResult">暂无匹配项</span>
           </multiselect>
       </div>
     </template>
     <template v-for="item in characteristicSiceEquipmentProList">
        <div class="form-wrapper" v-if="selectedList.indexOf(item)!==-1">
           <p class="head-wrapper">
               <span class="title-wrapper">根据{{item.name}}检索</span>
           </p>
           <multiselect
             :options="characteristic"
             key="code"
             label="name"
             :id=item.id
             :placeholder="'模糊检索'+item.name"
             :multiple="true"
             :show-labels="false"
             @select="addEquipmentProFormItem"
             @remove="deleteEquipmentProFormItem"
             >
             <span slot="noResult">暂无匹配项</span>
           </multiselect>
       </div>
     </template>
    </div>
</template>
<script>
import Multiselect from 'vue-multiselect';
import {rdTooltip} from 'radon-ui';
import {
        upadateEquipmentProFormTypeSelected,
        upadateEquipmentProFormFilterChange,
        addEquipmentProFormItem,
        deleteEquipmentProFormItem,
    } from '../../../vuex/actions';

export default {
    components: {
        Multiselect,
        rdTooltip
    },
    data(){
        return {
            newEquipmentProList:[],
            oldEquipmentProList:[],
            oldSiceEquipmentProList:[],
            hardwareSiceEquipmentProList:[],
            characteristicSiceEquipmentProList:[],
            priceList:[],
            sizeList:[],
            hardware:[],//硬件特性
            characteristic:[],//功能特性
        }
    },
    vuex: {
        getters: {
            selectedList:({equipmentProForm})=>equipmentProForm.selectedList,
            listLabel:({equipmentProForm})=>equipmentProForm.listLabel,
            equipmentProList:({equipmentProForm})=>equipmentProForm.equipmentProList,
            filterLabel:({equipmentProForm})=>equipmentProForm.filterLabel,
            filterList:({equipmentProForm})=>equipmentProForm.filterList,
            selectedFilterList:({equipmentProForm})=>equipmentProForm.selectedFilterList,
        },
        actions:{
            upadateEquipmentProFormTypeSelected,
            upadateEquipmentProFormFilterChange,
            addEquipmentProFormItem,
            deleteEquipmentProFormItem,
        }
    },
    ready(){
        this.newEquipmentProList=this.equipmentProList.slice(0,6)
        this.oldEquipmentProList=this.equipmentProList.slice(6,7)
        this.oldSiceEquipmentProList=this.equipmentProList.slice(7,8)
        this.hardwareSiceEquipmentProList=this.equipmentProList.slice(8,9)
        this.characteristicSiceEquipmentProList=this.equipmentProList.slice(9,10)
    },
    methods:{
        newUpadateEquipmentProFormTypeSelected(item){
            this.upadateEquipmentProFormTypeSelected(item)
            if(item.id===98 || item.id===99 || item.id===100 || item.id===101){
                this.change(item.id)
            }
        },
        change(id){
             let url=process.env.NODE_ENV.apiPath+"metadataManager/queryDevice";
             Vue.http.get(url,{params:{queryType:id,keyword:'*'}}).then((response) => {
                    if(id===98){
                         this.priceList=response.body
                    }else if(id===99){
                         this.sizeList=response.body
                    }else if(id===100){
                         this.hardware=response.body
                    }else if(id===101){
                         this.characteristic=response.body
                    }
             }, (response) => {
                console.log('请求不到数据');
             });
        }
        
    }
}
</script>
