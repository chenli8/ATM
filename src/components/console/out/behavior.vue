
<template>
    <div class="console-item-wrapper console-putitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper" >
                    <label>{{dateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{dateInfo.dateLabel}}</label>
                    <label>{{dateInfo.startDateLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                    <label>{{dateInfo.endDateLabel}}</label><span v-show="selectedEndDate">{{selectedEndDate}}</span>
                </div>
                <div class="fieldset-item-wrapper">
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
            title:({behaviorConsole})=>behaviorConsole.title,
            dateInfo:({behaviorForm})=>behaviorForm.dateInfo,
            selectedDateType:({behaviorForm})=>behaviorForm.selectedDateType,
            selectedStartDate:({behaviorForm})=>behaviorForm.selectedStartDate,
            selectedEndDate:({behaviorForm})=>behaviorForm.selectedEndDate,
            locationTypeLabel:({behaviorForm})=>behaviorForm.locationTypeLabel,
            timeLabel:({behaviorForm})=>behaviorForm.timeLabel,
            selectedCoordinaryType:({behaviorForm})=>behaviorForm.selectedCoordinaryType,
            appQueryTypeLabel:({behaviorForm})=>behaviorForm.appQueryTypeLabel,
            selectedFilterAppList:({behaviorForm})=>behaviorForm.selectedFilterAppList  
        }
    }
}
</script>
