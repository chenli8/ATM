<!-- 位置条件控制台 -->
<template>
    <div class="console-item-wrapper console-putitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{behaviorTypeLabel}}</label><span >{{selectedBehaviorType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{groupTypeLabel}}</label><span >{{groupType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateLabel}}</label>
                    <label>{{locaDateInfo.startDateLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                    <label>{{locaDateInfo.endDateLabel}}</label><span v-show="selectedEndDate">{{selectedEndDate}}</span>
                </div>             
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title:({outActiveConsole})=>outActiveConsole.title,
            locaDateInfo:({outActiveForm})=>outActiveForm.locaDateInfo,
            selectedDateType:({outActiveForm})=>outActiveForm.selectedDateType,
            selectedStartDate:({outActiveForm})=>outActiveForm.selectedStartDate,
            selectedEndDate:({outActiveForm})=>outActiveForm.selectedEndDate,
            behaviorTypeLabel:({outActiveForm})=>outActiveForm.behaviorTypeLabel,
            selectedBehaviorType:({outActiveForm})=>outActiveForm.selectedBehaviorType,
            groupTypeLabel:({outActiveForm})=>outActiveForm.groupTypeLabel, 
            groupType:({outActiveForm})=>outActiveForm.groupType
       }
    }
}
</script>
