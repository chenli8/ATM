<!-- 位置条件控制台 -->
<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{filterTypeLabel}}</label><span >{{selectedFilterTypeType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedFilterGhettoList.length!==0">
                    <label>{{cityListLabel}}</label><span v-for="item in selectedFilterGhettoList" >{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-if='radius.length!==0'>
                    <label>{{radiustLabel}}</label><span>{{radius}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{locationTypeLabel}}</label><span >{{selectedLocationType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedLocationType.id==1 || selectedLocationType.id==2">
                    <label>{{coordinaryTypeLabel}}</label><span >{{selectedCoordinaryType.name}}</span>
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
            title:({ghettoConsole})=>ghettoConsole.title,
            locaDateInfo:({ghettoForm})=>ghettoForm.locaDateInfo,
            selectedDateType:({ghettoForm})=>ghettoForm.selectedDateType,
            selectedStartDate:({ghettoForm})=>ghettoForm.selectedStartDate,
            selectedEndDate:({ghettoForm})=>ghettoForm.selectedEndDate,
            locationTypeLabel:({ghettoForm})=>ghettoForm.locationTypeLabel,
            selectedLocationType:({ghettoForm})=>ghettoForm.selectedLocationType,
            coordinaryTypeLabel:({ghettoForm})=>ghettoForm.coordinaryTypeLabel,
            selectedCoordinaryType:({ghettoForm})=>ghettoForm.selectedCoordinaryType,
            selectedTimeList:({ghettoForm})=>ghettoForm.selectedTimeList,
            fileLabel:({ghettoForm})=>ghettoForm.fileLabel,
            fileListname:({ghettoForm})=>ghettoForm.fileListname,

            filterTypeLabel:({ghettoForm})=>ghettoForm.filterTypeLabel,
            selectedFilterTypeType:({ghettoForm})=>ghettoForm.selectedFilterTypeType,
            cityListLabel:({ghettoForm})=>ghettoForm.cityListLabel,
            selectedFilterGhettoList:({ghettoForm})=>ghettoForm.selectedFilterGhettoList,
            radiustLabel:({ghettoForm})=>ghettoForm.radiustLabel,
            radius:({ghettoForm})=>ghettoForm.radius,
        }
    }

    
}
</script>
