<!-- 应用筛选控制台 -->
<template>
    <div class="console-item-wrapper console-outitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{locaDateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{locaDateInfo.dateLabel}}</label>
                    <label>{{locaDateInfo.startDateLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                    <label>{{locaDateInfo.endDateLabel}}</label><span v-show="selectedEndDate">{{selectedEndDate}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{appQueryTypeLabel}}</label><span v-for="item in selectedFilterAppList" >{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper"v-show="selectedFilterAreaList.length!==0">
                    <label>{{cityLabel}}</label><span v-for="item in selectedFilterAreaList" >{{item.name}}</span>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>

export default {
    vuex: {
        getters: {
            title: ({hotConsole}) => hotConsole.title,
            locaDateInfo:({hotForm})=>hotForm.locaDateInfo,
            selectedDateType:({hotForm})=>hotForm.selectedDateType,
            selectedStartDate:({hotForm})=>hotForm.selectedStartDate,
            selectedEndDate:({hotForm})=>hotForm.selectedEndDate,
            appQueryTypeLabel:({hotForm})=>hotForm.appQueryTypeLabel,
            selectedFilterAppList:({hotForm})=>hotForm.selectedFilterAppList,
            cityLabel:({hotForm})=>hotForm.cityLabel,
            selectedFilterAreaList:({hotForm})=>hotForm.selectedFilterAreaList,
        }
    }
}
</script>
