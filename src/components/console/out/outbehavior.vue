
<template>
    <div class="console-item-wrapper console-outitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper" >
                    <label>{{dateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{dateInfo.dateLabel}}</label>
                    <span v-show="selectedStartDate">{{selectedStartDate}}</span>
                    <label v-show="false">{{dateInfo.endDateLabel}}</label><span v-show="false">{{selectedEndDate}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{timeLabel}}</label><span >{{selectedCoordinaryType.name}}</span>
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
            title:({outBehaviorConsole})=>outBehaviorConsole.title,
            dateInfo:({outBehaviorForm})=>outBehaviorForm.dateInfo,
            selectedDateType:({outBehaviorForm})=>outBehaviorForm.selectedDateType,
            selectedStartDate:({outBehaviorForm})=>outBehaviorForm.selectedStartDate,
            selectedEndDate:({outBehaviorForm})=>outBehaviorForm.selectedEndDate,
            selectedLocationType:({outBehaviorForm})=>outBehaviorForm.selectedLocationType,
            timeLabel:({outBehaviorForm})=>outBehaviorForm.timeLabel,
            selectedCoordinaryType:({outBehaviorForm})=>outBehaviorForm.selectedCoordinaryType,
            appQueryTypeLabel:({outBehaviorForm})=>outBehaviorForm.appQueryTypeLabel,
            selectedFilterAppList:({outBehaviorForm})=>outBehaviorForm.selectedFilterAppList
         }
    }
}
</script>
