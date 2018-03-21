<template>
    <div>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{tagLabel}}<a class="tittle-hint">(  提示：支持多选！)</a></span>
        </p>

        <vcheck-tree :data="tagList"  @change="updateOutTagFormSelected" ></vcheck-tree> 
      </div>     
    </div>
</template>

<script>
import {
        getOutTagFormData,
        updateOutTagFormSelected,
    } from '../../../vuex/actions';
import TdVcheckTree from '../../../lib/checktree/vcheckTree.vue';
export default {
   components: {
            TdVcheckTree,
    },
    ready(){
        if(!this.tagList.children){
            this.getOutTagFormData();
        }
    },
    vuex: {
        getters: {
            tagLabel:({outTagForm})=>outTagForm.tagLabel,
            tagList:({outTagForm})=>outTagForm.tagList
        },
        actions:{
            getOutTagFormData,
            updateOutTagFormSelected,
        }
    }
}
</script>
