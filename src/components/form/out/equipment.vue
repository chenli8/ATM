<template>
    <div>
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{listLabel}}</span>
            </p>
            <Checkbox-group :model="[]">
                <Checkbox :value="item.id" @change="upadateEquipmentFormSelected(item)" class="vertical" v-for="item in list">{{item.name}}</Checkbox>
            </Checkbox-group>
        </div>
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{md5Label}}</span>
            </p>
            <Checkbox-group :model="[]">
                <Checkbox :value="item.id" @change="upadateEquipmentFormSelected(item)" class="vertical" v-for="item in md5List">{{item.name}}</Checkbox>
            </Checkbox-group>
        </div>
    </div>
</template>
<script>

import {upadateEquipmentFormSelected} from '../../../vuex/actions';

export default {
    components: {
     
    },
    vuex: {
        getters: {
            selectedIds:({equipmentForm})=>equipmentForm.selectedIds,
            listLabel:({equipmentForm})=>equipmentForm.listLabel,
            list:({equipmentForm})=>equipmentForm.list,
            md5Label:({equipmentForm})=>equipmentForm.md5Label,
            md5List:({equipmentForm})=>equipmentForm.md5List,
        },
        actions:{
            upadateEquipmentFormSelected
        }
    }
}
</script>
