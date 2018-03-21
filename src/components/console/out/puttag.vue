<template>
    <div class="console-item-wrapper console-putitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
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
            title: ({putTagConsole}) => putTagConsole.title,
            tagLabel:({putTagForm})=>putTagForm.tagLabel,
            tagListSelected:({putTagForm})=>putTagForm.tagListSelected,
            
        }
    }
}
</script>
