<!-- 地域行为控制台 -->
<template>
    <div class="console-item-wrapper console-outitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper" >
                    <label>{{regionTypeLabel}}</label><span >{{selectedRegionType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="showDateType">
                    <label>{{locaDateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="showDateType">
                    <label>{{locaDateInfo.dateLabel}}</label>
                    <label>{{locaDateInfo.startDateLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                    <label>{{locaDateInfo.endDateLabel}}</label><span v-show="selectedEndDate">{{selectedEndDate}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{areaTypeLabel}}</label><span >{{selectedAreaType.name}}</span>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title: ({outRegionConsole}) => outRegionConsole.title,
            regionTypeLabel:({outRegionForm})=>outRegionForm.regionTypeLabel,
            selectedRegionType:({outRegionForm})=>outRegionForm.selectedRegionType,
            showDateType:({outRegionForm})=>outRegionForm.showDateType,
            locaDateInfo:({outRegionForm})=>outRegionForm.locaDateInfo,
            selectedDateType:({outRegionForm})=>outRegionForm.selectedDateType,
            selectedStartDate:({outRegionForm})=>outRegionForm.selectedStartDate,
            selectedEndDate:({outRegionForm})=>outRegionForm.selectedEndDate,
            areaTypeLabel:({outRegionForm})=>outRegionForm.areaTypeLabel,
            selectedAreaType:({outRegionForm})=>outRegionForm.selectedAreaType,
        }
    }
}
</script>
