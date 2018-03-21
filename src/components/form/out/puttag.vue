<template>
    <div>
   
        <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{tagLabel}}<a class="tittle-hint">( 提示：支持多选！)</a></span>
        </p>
        <vcheck-tree :data="tagList"  @change="updatePutTagFormSelected" ></vcheck-tree> 
      </div>     
    </div>
</template>

<script>
import {
        getPutTagFormData,
        updatePutTagFormSelected,
    } from '../../../vuex/actions';
import TdVcheckTree from '../../../lib/checktree/vcheckTree.vue';
export default {
   components: {
     TdVcheckTree,
    },
    ready(){
        if(!this.tagList.children){
            this.getPutTagFormData();
        }
    },
    vuex: {
        getters: {
            tagLabel:({putTagForm})=>putTagForm.tagLabel,
            tagList:({putTagForm})=>putTagForm.tagList
        },
        actions:{
            getPutTagFormData,
            updatePutTagFormSelected,
        }
    }
}
</script>
