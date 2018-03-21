<!-- 地域行为控制台 -->
<template>
    <div class="console-item-wrapper console-putitem-wrapper">
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
            title: ({putRegionConsole}) => putRegionConsole.title,
            regionTypeLabel:({putRegionForm})=>putRegionForm.regionTypeLabel,
            selectedRegionType:({putRegionForm})=>putRegionForm.selectedRegionType,
            showDateType:({putRegionForm})=>putRegionForm.showDateType,
            locaDateInfo:({putRegionForm})=>putRegionForm.locaDateInfo,
            selectedDateType:({putRegionForm})=>putRegionForm.selectedDateType,
            selectedStartDate:({putRegionForm})=>putRegionForm.selectedStartDate,
            selectedEndDate:({putRegionForm})=>putRegionForm.selectedEndDate,
            areaTypeLabel:({putRegionForm})=>putRegionForm.areaTypeLabel,
            selectedAreaType:({putRegionForm})=>putRegionForm.selectedAreaType,
        }
    }
}
</script>
