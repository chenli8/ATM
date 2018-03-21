<!-- 位置条件控制台 -->
<template>
    <div class="console-item-wrapper console-outitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateLabel}}</label>
                    <label>{{locaDateInfo.startDateLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                    <label>{{locaDateInfo.endDateLabel}}</label><span v-show="selectedEndDate">{{selectedEndDate}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedTimeList.length!==0">
                    <label>{{timeLabel}}</label><span v-for="item in selectedTimeList">{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{locationTypeLabel}}</label><span >{{selectedLocationType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedLocationType.id!==3">
                    <label>{{coordinaryTypeLabel}}</label><span >{{selectedCoordinaryType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper"v-show="selectedFilterAreaList.length!==0">
                    <label>{{cityLabel}}</label><span v-for="item in selectedFilterAreaList" >{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="fileListname.length!==0">
                    <label>{{fileLabel}}</label>
                    <span v-for="item in fileListname" >{{item}}</span>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title:({putLocationConsole})=>putLocationConsole.title,
            locaDateInfo:({putLocationForm})=>putLocationForm.locaDateInfo,
            selectedDateType:({putLocationForm})=>putLocationForm.selectedDateType,
            selectedStartDate:({putLocationForm})=>putLocationForm.selectedStartDate,
            selectedEndDate:({putLocationForm})=>putLocationForm.selectedEndDate,
            locationTypeLabel:({putLocationForm})=>putLocationForm.locationTypeLabel,
            selectedLocationType:({putLocationForm})=>putLocationForm.selectedLocationType,
            coordinaryTypeLabel:({putLocationForm})=>putLocationForm.coordinaryTypeLabel,
            selectedCoordinaryType:({putLocationForm})=>putLocationForm.selectedCoordinaryType,
            timeLabel:({putLocationForm})=>putLocationForm.timeLabel,
            selectedTimeList:({putLocationForm})=>putLocationForm.selectedTimeList,
            fileLabel:({putLocationForm})=>putLocationForm.fileLabel,
            fileListname:({putLocationForm})=>putLocationForm.fileListname,
            cityLabel:({putLocationForm})=>putLocationForm.cityLabel,
            selectedFilterAreaList:({putLocationForm})=>putLocationForm.selectedFilterAreaList,
        }
    }
}
</script>
