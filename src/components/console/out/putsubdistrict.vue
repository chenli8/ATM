
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
            title:({putSubdistrictConsole})=>putSubdistrictConsole.title,
            dateInfo:({putSubdistrictForm})=>putSubdistrictForm.dateInfo,
            selectedDateType:({putSubdistrictForm})=>putSubdistrictForm.selectedDateType,
            selectedStartDate:({putSubdistrictForm})=>putSubdistrictForm.selectedStartDate,
            selectedEndDate:({putSubdistrictForm})=>putSubdistrictForm.selectedEndDate,
            selectedLocationType:({putSubdistrictForm})=>putSubdistrictForm.selectedLocationType,
            appQueryTypeLabel:({putSubdistrictForm})=>putSubdistrictForm.appQueryTypeLabel,
            selectedFilterAppList:({putSubdistrictForm})=>putSubdistrictForm.selectedFilterAppList
         }
    }
}
</script>
