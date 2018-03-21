<template>
    <div>
       <div class="form-wrapper">
             <p class="head-wrapper">
                <span class="title-wrapper">{{listLabel}}</span>
            </p>
            <Radio-group :model="selectedId" >
                <Radio :value="item.id"   v-for="item in brushList" @change="upadateBrushForm({id:item.id,text:item.name})">{{item.name}}</Radio>
            </Radio-group>
        </div>

    </div>
</template>
<script>
import {upadateBrushForm} from '../../../vuex/actions';
export default {
    vuex: {
        getters: {
            selectedId:({brushForm})=>brushForm.selectedId,
            listLabel:({brushForm})=>brushForm.listLabel,
            brushList:({brushForm})=>brushForm.brushList,
        },
        actions:{
           upadateBrushForm
        }
    },
    methods: {
        
    }
}
</script>
