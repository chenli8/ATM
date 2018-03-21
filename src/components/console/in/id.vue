<!-- ID控制台 -->
<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{selectedLabel}}</label>
                    <span v-show="selectedText!=''">{{selectedText}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="fileListname.length!==0">
                    <label>{{fileLabel}}</label>
                    <span v-for="item in fileListname" track-by="$index">{{item}}</span>
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
            title:({idConsole})=>idConsole.title,
            selectedLabel:({idForm})=>idForm.selectedLabel,
            selectedText:({idForm})=>idForm.selectedText,
            fileLabel:({idForm})=>idForm.fileLabel,
            fileListname:({idForm})=>idForm.fileListname,
        }
    }
}
</script>
