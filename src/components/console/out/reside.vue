<!-- ID控制台 -->
<template>
    <div class="console-item-wrapper console-putitem-wrapper">
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
                <div class="fieldset-item-wrapper" v-if='radius.length!==0'>
                    <label>{{radiustLabel}}</label><span>{{radius}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{groupByTypeLbel}}</label><span>{{groupByType.name}}</span>
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
            title:({resideConsole})=>resideConsole.title,
            listLabel:({resideForm})=>resideForm.listLabel,
            selectedId:({resideForm})=>resideForm.selectedId,
            locaDateInfo:({resideForm})=>resideForm.locaDateInfo,
            selectedDateType:({resideForm})=>resideForm.selectedDateType,
            selectedStartDate:({resideForm})=>resideForm.selectedStartDate,
            filterAreaLabel:({resideForm})=>resideForm.filterAreaLabel,
            selectedFilterAreaList:({resideForm})=>resideForm.selectedFilterAreaList,
            radiustLabel:({resideForm})=>resideForm.radiustLabel,
            radius:({resideForm})=>resideForm.radius,
            groupByTypeLbel:({resideForm})=>resideForm.groupByTypeLbel,
            groupByType:({resideForm})=>resideForm.groupByType,
        }
    }
}
</script>
