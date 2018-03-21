<template>
    <div>
      <div class="form-wrapper">
         <p class="head-wrapper">
            <span class="title-wrapper">{{expression}}</span>
        </p>
            <Radio-group :model="selectedId" >
                <Radio :value="item.id"   v-for="item in tagExpressionList" @change="upadateExpressionForm({id:item.id,name:item.name})">{{item.name}}</Radio>
            </Radio-group>
      </div>
      <div class="form-wrapper">
        <p class="head-wrapper">
            <span class="title-wrapper">{{tagLabel}}<a class="tittle-hint">( 重要提示:选多个标签时，只能一个一个的勾选！)</a></span>
        </p>
        <pcheck-tree :data="tagList" @change="updateTagFormSelected" ></pcheck-tree> 
      </div>  
    </div>
</template>

<script>
import {
        getTagFormData,
        updateTagFormSelected,
        upadateExpressionForm,
    } from '../../../vuex/actions';
import TdPcheckTree from '../../../lib/checktree/pcheckTree.vue';
export default {
   components: {
    TdPcheckTree
    },
    ready(){
        if(!this.tagList.children){
            this.getTagFormData();
        }
    },
    vuex: {
        getters: {
            tagLabel:({tagForm})=>tagForm.tagLabel,
            tagList:({tagForm})=>tagForm.tagList,
            expression:({tagForm})=>tagForm.expression,
            tagExpressionList:({tagForm})=>tagForm.tagExpressionList,
            selectedId:({tagForm})=>tagForm.selectedId
        },
        actions:{
            getTagFormData,
            updateTagFormSelected,
            upadateExpressionForm
        }
    }
}
</script>
