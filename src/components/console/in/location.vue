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
            title:({locationConsole})=>locationConsole.title,
            locaDateInfo:({locationForm})=>locationForm.locaDateInfo,
            selectedDateType:({locationForm})=>locationForm.selectedDateType,
            selectedStartDate:({locationForm})=>locationForm.selectedStartDate,
            selectedEndDate:({locationForm})=>locationForm.selectedEndDate,
            locationTypeLabel:({locationForm})=>locationForm.locationTypeLabel,
            selectedLocationType:({locationForm})=>locationForm.selectedLocationType,
            coordinaryTypeLabel:({locationForm})=>locationForm.coordinaryTypeLabel,
            selectedCoordinaryType:({locationForm})=>locationForm.selectedCoordinaryType,
            timeLabel:({locationForm})=>locationForm.timeLabel,
            selectedTimeList:({locationForm})=>locationForm.selectedTimeList,
            fileLabel:({locationForm})=>locationForm.fileLabel,
            fileListname:({locationForm})=>locationForm.fileListname,
            cityLabel:({locationForm})=>locationForm.cityLabel,
            selectedFilterAreaList:({locationForm})=>locationForm.selectedFilterAreaList,
        }
    }

    
}
</script>
