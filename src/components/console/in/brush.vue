<!-- ID控制台 -->
<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper"v-show="selectedText!==0">
                    <label>{{listLabel}}</label><span>{{selectedText}}</span>
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
            title:({brushConsole})=>brushConsole.title,
            listLabel:({brushForm})=>brushForm.listLabel,
            selectedText:({brushForm})=>brushForm.selectedText,

        }
    }
}
</script>
