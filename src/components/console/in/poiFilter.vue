<!-- 位置条件控制台 -->
<template>
    <div class="console-item-wrapper">
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
                <div class="fieldset-item-wrapper" v-if="workingDayType">
                    <label>{{workingDaylabel}}</label><span >{{workingDayType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedTimeList.length!==0">
                    <label>{{timeLabel}}</label><span v-for="item in selectedTimeList">{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="cityValue.length!==0">
                    <label>{{cityLabel}}</label><span >{{cityValue.name}}</span>
                </div>
                <div class="fieldset-item-wrapper"v-show="tagListSelected.length!==0">
                    <label>{{tagLabel}}</label><span v-for="item in tagListSelected" >{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectivityId.id===2">
                    <label>{{locationTypeLabel}}</label><span >{{selectedLocationType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedLocationType.id!==3&&selectivityId.id===2">
                    <label>{{coordinaryTypeLabel}}</label><span >{{selectedCoordinaryType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper"v-show="selectedFilterAreaList.length!==0">
                    <label>{{poilabel}}</label><span v-for="item in selectedFilterAreaList" >{{item.name}}</span>
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
            title:({poiFilterConsole})=>poiFilterConsole.title,
            locaDateInfo:({poiFilterForm})=>poiFilterForm.locaDateInfo,
            selectedDateType:({poiFilterForm})=>poiFilterForm.selectedDateType,
            selectedStartDate:({poiFilterForm})=>poiFilterForm.selectedStartDate,
            selectedEndDate:({poiFilterForm})=>poiFilterForm.selectedEndDate,
            locationTypeLabel:({poiFilterForm})=>poiFilterForm.locationTypeLabel,
            selectedLocationType:({poiFilterForm})=>poiFilterForm.selectedLocationType,
            coordinaryTypeLabel:({poiFilterForm})=>poiFilterForm.coordinaryTypeLabel,
            selectedCoordinaryType:({poiFilterForm})=>poiFilterForm.selectedCoordinaryType,
            timeLabel:({poiFilterForm})=>poiFilterForm.timeLabel,
            selectedTimeList:({poiFilterForm})=>poiFilterForm.selectedTimeList,
            fileLabel:({poiFilterForm})=>poiFilterForm.fileLabel,
            fileListname:({poiFilterForm})=>poiFilterForm.fileListname,
            cityLabel:({poiFilterForm})=>poiFilterForm.cityLabel,
            selectedFilterAreaList:({poiFilterForm})=>poiFilterForm.selectedFilterAreaList,
            tagLabel:({poiFilterForm})=>poiFilterForm.tagLabel,
            tagListSelected:({poiFilterForm})=>poiFilterForm.tagListSelected,
            workingDaylabel:({poiFilterForm})=>poiFilterForm.workingDaylabel,
            workingDayType:({poiFilterForm})=>poiFilterForm.workingDayType,
            poilabel:({poiFilterForm})=>poiFilterForm.poilabel,
            cityValue:({poiFilterForm})=>poiFilterForm.cityValue,
            selectivityId:({poiFilterForm})=>poiFilterForm.selectivityId,
        }
    }

    
}
</script>
