
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
            title:({subdistrictConsole})=>subdistrictConsole.title,
            dateInfo:({subdistrictForm})=>subdistrictForm.dateInfo,
            selectedDateType:({subdistrictForm})=>subdistrictForm.selectedDateType,
            selectedStartDate:({subdistrictForm})=>subdistrictForm.selectedStartDate,
            selectedEndDate:({subdistrictForm})=>subdistrictForm.selectedEndDate,
            selectedLocationType:({subdistrictForm})=>subdistrictForm.selectedLocationType,
            appQueryTypeLabel:({subdistrictForm})=>subdistrictForm.appQueryTypeLabel,
            selectedFilterAppList:({subdistrictForm})=>subdistrictForm.selectedFilterAppList
         }
    }
}
</script>
