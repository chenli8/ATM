<template>
    <div>
      
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{listLabel}}</span>
            </p>
            <Checkbox-group :model="[]">
                <Checkbox :value="item.id" @change="upadateIdformoutFormSelected(item)" class="vertical" v-for="item in list">{{item.name}}</Checkbox>
            </Checkbox-group>
        </div>
       <!-- <div class="form-wrapper">
           <p class="head-wrapper"> 
               <span class="title-wrapper">{{md5Label}}</span>
           </p>
           <Checkbox-group :model="[]">
               <Checkbox :value="item.id" @change="upadateIdformoutFormSelected(item)" class="vertical" v-for="item in md5List">{{item.name}}</Checkbox>
           </Checkbox-group>
       </div> -->
        <div class="form-wrapper">
           <p class="head-wrapper">
               <span class="title-wrapper">{{sheLabel}}</span>
           </p>
           <Checkbox-group :model="[]">
               <Checkbox :value="item.id" @change="upadateIdformoutFormSelected(item)" class="vertical" v-for="item in sheList">{{item.name}}</Checkbox>
           </Checkbox-group>
       </div>
    </div>
</template>
<script>

import {upadateIdformoutFormSelected} from '../../../vuex/actions';
export default {
    components: {
    },
    vuex: {
        getters: {
            selectedIds:({idFormOutForm})=>idFormOutForm.selectedIds,
            listLabel:({idFormOutForm})=>idFormOutForm.listLabel,
            list:({idFormOutForm})=>idFormOutForm.deviceList,
            md5Label:({idFormOutForm})=>idFormOutForm.md5Label,
            md5List:({idFormOutForm})=>idFormOutForm.md5DeviceList,
            sheLabel:({idFormOutForm})=>idFormOutForm.sheLabel,
            sheList:({idFormOutForm})=>idFormOutForm.sheList,
        },
        actions:{
            upadateIdformoutFormSelected
        }
    }
}
</script>
