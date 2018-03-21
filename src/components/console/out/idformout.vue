<!-- 设备属性控制台 -->
<template>
    <div class="console-item-wrapper console-outitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper" v-show="selectedArr.length!==0">
                    <label>{{listLabel}}</label><span v-for="item in selectedArr">{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedMD5Arr.length!=0">
                    <label>{{md5Label}}</label><span v-for="item in selectedMD5Arr">{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedsheArr.length!=0">
                    <label>{{sheLabel}}</label><span v-for="item in selectedsheArr">{{item.name}}</span>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title: ({idFormOutConsole}) => idFormOutConsole.title,
            listLabel:({idFormOutForm})=>idFormOutForm.listLabel,
            md5Label:({idFormOutForm})=>idFormOutForm.md5Label,
            sheLabel:({idFormOutForm})=>idFormOutForm.sheLabel,
            selectedArr:({idFormOutForm})=>idFormOutForm.selectedArr,
            selectedMD5Arr:({idFormOutForm})=>idFormOutForm.selectedMD5Arr,
            selectedsheArr:({idFormOutForm})=>idFormOutForm.selectedsheArr,
        }
    }
}
</script>
