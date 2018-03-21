<!-- 设备属性筛选控制台 -->
<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{selectedLabel}}</label><span v-for="item in selectedList">{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-for="item in selectedList">
                    <label>{{item.name}}</label>
                    <span v-for="obj in selectedFilterList[filterListIndexs[item.id]]">{{obj.name}}</span>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title: ({equipmentProConsole}) => equipmentProConsole.title,
            filterListIndexs:({equipmentProForm})=>equipmentProForm.filterListIndexs,
            selectedLabel:({equipmentProForm})=>equipmentProForm.selectedLabel,
            selectedList:({equipmentProForm})=>equipmentProForm.selectedList,
            selectedFilterList:({equipmentProForm})=>equipmentProForm.selectedFilterList,
        }
    }
}
</script>
