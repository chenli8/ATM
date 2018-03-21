<template>
    <div class="console-item-wrapper console-outitem-wrapper">
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
            title: ({outTagConsole}) => outTagConsole.title,
            tagLabel:({outTagForm})=>outTagForm.tagLabel,
            tagListSelected:({outTagForm})=>outTagForm.tagListSelected,
            
        }
    }
}
</script>
