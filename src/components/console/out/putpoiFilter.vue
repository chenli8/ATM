<!-- 位置条件控制台 -->
<template>
    <div class="console-item-wrapper console-putitem-wrapper">
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
            title:({putPoiFilterConsole})=>putPoiFilterConsole.title,
            locaDateInfo:({putPoiFilterForm})=>putPoiFilterForm.locaDateInfo,
            selectedDateType:({putPoiFilterForm})=>putPoiFilterForm.selectedDateType,
            selectedStartDate:({putPoiFilterForm})=>putPoiFilterForm.selectedStartDate,
            selectedEndDate:({putPoiFilterForm})=>putPoiFilterForm.selectedEndDate,
            locationTypeLabel:({putPoiFilterForm})=>putPoiFilterForm.locationTypeLabel,
            selectedLocationType:({putPoiFilterForm})=>putPoiFilterForm.selectedLocationType,
            coordinaryTypeLabel:({putPoiFilterForm})=>putPoiFilterForm.coordinaryTypeLabel,
            selectedCoordinaryType:({putPoiFilterForm})=>putPoiFilterForm.selectedCoordinaryType,
            timeLabel:({putPoiFilterForm})=>putPoiFilterForm.timeLabel,
            selectedTimeList:({putPoiFilterForm})=>putPoiFilterForm.selectedTimeList,
            fileLabel:({putPoiFilterForm})=>putPoiFilterForm.fileLabel,
            fileListname:({putPoiFilterForm})=>putPoiFilterForm.fileListname,
            cityLabel:({putPoiFilterForm})=>putPoiFilterForm.cityLabel,
            selectedFilterAreaList:({putPoiFilterForm})=>putPoiFilterForm.selectedFilterAreaList,
            tagLabel:({putPoiFilterForm})=>putPoiFilterForm.tagLabel,
            tagListSelected:({putPoiFilterForm})=>putPoiFilterForm.tagListSelected,
            workingDaylabel:({putPoiFilterForm})=>putPoiFilterForm.workingDaylabel,
            workingDayType:({putPoiFilterForm})=>putPoiFilterForm.workingDayType,
            poilabel:({putPoiFilterForm})=>putPoiFilterForm.poilabel,
            cityValue:({putPoiFilterForm})=>putPoiFilterForm.cityValue,
            selectivityId:({putPoiFilterForm})=>putPoiFilterForm.selectivityId,
        }
    }

    
}
</script>
