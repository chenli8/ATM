<!-- 应用筛选控制台 -->
<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{behaviorTypeLabel}}</label><span >{{selectedBehaviorType.name}}</span>
                </div>
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
            </div>
        </fieldset>
    </div>
</template>
<script>

export default {
    vuex: {
        getters: {
            title: ({appTypeConsole}) => appTypeConsole.title,
            behaviorTypeLabel:({appTypeForm})=>appTypeForm.behaviorTypeLabel,
            selectedBehaviorType:({appTypeForm})=>appTypeForm.selectedBehaviorType,
            locaDateInfo:({appTypeForm})=>appTypeForm.locaDateInfo,
            selectedDateType:({appTypeForm})=>appTypeForm.selectedDateType,
            selectedStartDate:({appTypeForm})=>appTypeForm.selectedStartDate,
            selectedEndDate:({appTypeForm})=>appTypeForm.selectedEndDate,
            appQueryTypeLabel:({appTypeForm})=>appTypeForm.appQueryTypeLabel,
            selectedFilterAppList:({appTypeForm})=>appTypeForm.selectedFilterAppList,
        }
    }
}
</script>
