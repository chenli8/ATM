
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
                    <label>{{dateInfo.timeLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                    <label v-show="false">{{dateInfo.endDateLabel}}</label><span v-show="selectedEndDate">{{selectedEndDate}}</span>
                </div>
                <div class="fieldset-item-wrapper"v-show="selectedFilterAreaList.length!==0">
                    <label>{{cityLabel}}</label><span v-for="item in selectedFilterAreaList" >{{item.name}}</span>
                </div>   
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title:({outLocationConsole})=>outLocationConsole.title,
            dateInfo:({outLocationForm})=>outLocationForm.dateInfo,
            selectedDateType:({outLocationForm})=>outLocationForm.selectedDateType,
            selectedStartDate:({outLocationForm})=>outLocationForm.selectedStartDate,
            selectedEndDate:({outLocationForm})=>outLocationForm.selectedEndDate,
            cityLabel:({outLocationForm})=>outLocationForm.cityLabel,
            selectedFilterAreaList:({outLocationForm})=>outLocationForm.selectedFilterAreaList,
        }
    }
}
</script>
