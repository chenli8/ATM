<template>
    <div>
      
        <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{listLabel}}</span>
            </p>
            <Radio-group :model="selectedId" >
                <Radio :value="item.id" class="vertical" @change="upadateStructFormSelected({id:item.id,text:item.name,label:listLabel})" v-for="item in list">{{item.name}}</Radio>
            </Radio-group>
           
        </div>
       
       
        
    </div>
</template>
<script>

import { rdUpload } from 'radon-ui';
import {upadateStructFormSelected} from '../../../vuex/actions';
export default {
    data(){
        return {
           
        }
    },
    components: {
        rdUpload,
    },
    vuex: {
        getters: {
            selectedId:({structForm})=>structForm.selectedId,
            listLabel:({structForm})=>structForm.listLabel,
            list:({structForm})=>structForm.list,
        },
        actions:{
            upadateStructFormSelected
            
        }
    },
    methods: {
       
    }
}
</script>
