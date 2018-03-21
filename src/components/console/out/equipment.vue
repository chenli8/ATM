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
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title: ({equipmentConsole}) => equipmentConsole.title,
            listLabel:({equipmentForm})=>equipmentForm.listLabel,
            md5Label:({equipmentForm})=>equipmentForm.md5Label,
            selectedArr:({equipmentForm})=>equipmentForm.selectedArr,
            selectedMD5Arr:({equipmentForm})=>equipmentForm.selectedMD5Arr,
        }
    }
}
</script>
