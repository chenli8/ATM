<!-- ID控制台 -->
<template>
    <div class="console-item-wrapper console-outitem-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{listLabel}}</label><span>{{selectedId.name}}</span>
                </div>
                 <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" >
                    <label>{{locaDateInfo.dateLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedFilterAreaList.length!==0">
                    <label>{{filterAreaLabel}}</label><span v-for="item in selectedFilterAreaList" >{{item.name}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="selectedFilterPlaceList.length!==0">
                    <label>{{filterPlaceLabel}}</label><span v-for="item in selectedFilterPlaceList" >{{item.name}}</span>
                </div>
                 <div class="fieldset-item-wrapper" v-if='radius.length!==0'>
                    <label>{{radiustLabel}}</label><span>{{radius}}</span>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>

export default {
    components: {
    },
    vuex: {
        getters: {
            title:({placeConsole})=>placeConsole.title,
            listLabel:({placeForm})=>placeForm.listLabel,
            selectedId:({placeForm})=>placeForm.selectedId,
            locaDateInfo:({placeForm})=>placeForm.locaDateInfo,
            selectedDateType:({placeForm})=>placeForm.selectedDateType,
            selectedStartDate:({placeForm})=>placeForm.selectedStartDate,
            filterAreaLabel:({placeForm})=>placeForm.filterAreaLabel,
            selectedFilterAreaList:({placeForm})=>placeForm.selectedFilterAreaList,
            filterPlaceLabel:({placeForm})=>placeForm.filterPlaceLabel,
            selectedFilterPlaceList:({placeForm})=>placeForm.selectedFilterPlaceList,
            radiustLabel:({placeForm})=>placeForm.radiustLabel,
            radius:({placeForm})=>placeForm.radius,
        }
    }
}
</script>
