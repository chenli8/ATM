<!-- 地域行为控制台 -->
<template>
    <div class="console-item-wrapper">
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
                <div class="fieldset-item-wrapper"v-show="selectedFilterAreaList.length!==0">
                    <label>{{filterAreaLabel}}</label><span v-for="item in selectedFilterAreaList" >{{item.name}}</span>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title: ({regionConsole}) => regionConsole.title,
            regionTypeLabel:({regionForm})=>regionForm.regionTypeLabel,
            selectedRegionType:({regionForm})=>regionForm.selectedRegionType,
            showDateType:({regionForm})=>regionForm.showDateType,
            locaDateInfo:({regionForm})=>regionForm.locaDateInfo,
            selectedDateType:({regionForm})=>regionForm.selectedDateType,
            selectedStartDate:({regionForm})=>regionForm.selectedStartDate,
            selectedEndDate:({regionForm})=>regionForm.selectedEndDate,
            areaTypeLabel:({regionForm})=>regionForm.areaTypeLabel,
            selectedAreaType:({regionForm})=>regionForm.selectedAreaType,
            filterAreaLabel:({regionForm})=>regionForm.filterAreaLabel,
            selectedFilterAreaList:({regionForm})=>regionForm.selectedFilterAreaList,
        }
    }
}
</script>
