<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper"v-show="tagExpressionName.length!==0">
                    <label>{{expression}}</label><span>{{tagExpressionName}}</span>
                </div>
                <div class="fieldset-item-wrapper"v-show="tagListSelected.length!==0">
                    <label>{{tagLabel}}</label><span v-for="item in tagListSelected" >{{item.name}}</span>
                </div>
                
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title: ({tagConsole}) => tagConsole.title,
            tagLabel:({tagForm})=>tagForm.tagLabel,
            tagListSelected:({tagForm})=>tagForm.tagListSelected,
            expression:({tagForm})=>tagForm.expression,
            tagExpressionName:({tagForm})=>tagForm.tagExpressionName,
        }
    }
}
</script>
