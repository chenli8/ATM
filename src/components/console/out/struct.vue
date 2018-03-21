<!-- ID控制台 -->
<template>
    <div class="console-item-wrapper console-putitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{selectedLabel}}</label>
                    <span v-show="selectedText!=''">{{selectedText}}</span>
                </div>
                
            </div>
        </fieldset>
    </div>
</template>
<script>

export default {
    components: {
    },
    vuex: {
        getters: {
            title:({structConsole})=>structConsole.title,
            selectedLabel:({structForm})=>structForm.selectedLabel,
            selectedText:({structForm})=>structForm.selectedText,
            fileLabel:({structForm})=>structForm.fileLabel,
            fileList:({structForm})=>structForm.fileList,
        }
    }
}
</script>
