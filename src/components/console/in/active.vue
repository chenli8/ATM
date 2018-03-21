<!-- 位置条件控制台 -->
<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{behaviorTypeLabel}}</label><span >{{selectedBehaviorType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show='async'>
                    <label>{{activeBehaviorLabel}}</label><span >{{activeBehaviorType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                 <div class="fieldset-item-wrapper" v-show="selectedTimeList.length!==0">
                    <label>{{timeLabel}}</label><span v-for="item in selectedTimeList">{{item.name}}</span>
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
            title:({activeConsole})=>activeConsole.title,
            locaDateInfo:({activeForm})=>activeForm.locaDateInfo,
            selectedDateType:({activeForm})=>activeForm.selectedDateType,
            selectedStartDate:({activeForm})=>activeForm.selectedStartDate,
            selectedEndDate:({activeForm})=>activeForm.selectedEndDate,
            timeLabel:({activeForm})=>activeForm.timeLabel,
            selectedTimeList:({activeForm})=>activeForm.selectedTimeList,
            behaviorTypeLabel:({activeForm})=>activeForm.behaviorTypeLabel,
            selectedBehaviorType:({activeForm})=>activeForm.selectedBehaviorType,
            //
            activeBehaviorLabel:({activeForm})=>activeForm.activeBehaviorLabel,
            activeBehaviorType:({activeForm})=>activeForm.activeBehaviorType,
            async:({activeForm})=>activeForm.async,
        }
    }
}
</script>
