<!-- 应用筛选控制台 -->
<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper">
                    <label>{{behaviorTypeLabel}}</label><span >{{selectedBehaviorType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{locaDateInfo.dateTypeLabel}}</label><span >{{selectedDateType.name}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{locaDateInfo.dateLabel}}</label>
                    <label>{{locaDateInfo.startDateLabel}}</label><span v-show="selectedStartDate">{{selectedStartDate}}</span>
                    <label>{{locaDateInfo.endDateLabel}}</label><span v-show="selectedEndDate">{{selectedEndDate}}</span>
                </div>
                <div class="fieldset-item-wrapper">
                    <label>{{expression}}</label><span >{{appExpressionName}}</span>
                </div>
                <section v-show='selectedIdSelectivity===1'>
                    <div class="fieldset-item-wrapper">
                        <label>{{appQueryTypeLabel}}</label><span >{{selectedAppQueryType.name}}</span>
                    </div>
                    <div class="fieldset-item-wrapper">
                        <label>{{filterAppLabel}}</label>
                        <p v-for="item in selectedFilterAppList">
                            <span>应用名称:{{item.appName}};</span>
                            <span>操作系统:{{item.platform}};</span>
                             <span>包名:{{item.packageName}};</span>
                             <span>哈希:{{item.hash}};</span>
                        </p>
                    </div>
                </section>
                <div class="fieldset-item-wrapper" v-show="selectedIdSelectivity===2">
                    <label>{{fileLabel}}</label>
                    <span v-for="item in fileListname" track-by="$index">{{item}}</span>
                </div>
            </div>
        </fieldset>
    </div>
</template>
<script>

export default {
    vuex: {
        getters: {
            title: ({appConsole}) => appConsole.title,
            behaviorTypeLabel:({appForm})=>appForm.behaviorTypeLabel,
            selectedBehaviorType:({appForm})=>appForm.selectedBehaviorType,
            locaDateInfo:({appForm})=>appForm.locaDateInfo,
            selectedDateType:({appForm})=>appForm.selectedDateType,
            selectedStartDate:({appForm})=>appForm.selectedStartDate,
            selectedEndDate:({appForm})=>appForm.selectedEndDate,
            filterAppLabel:({appForm})=>appForm.filterAppLabel,
            selectedFilterAppList:({appForm})=>appForm.selectedFilterAppList,
            appQueryTypeLabel:({appForm})=>appForm.appQueryTypeLabel,
            selectedAppQueryType:({appForm})=>appForm.selectedAppQueryType,
            selectedIdSelectivity:({appForm})=>appForm.selectedIdSelectivity,  
            fileLabel:({appForm})=>appForm.fileLabel,    
            fileListname:({appForm})=>appForm.fileListname,
            expression:({appForm})=>appForm.expression,
            appExpressionName:({appForm})=>appForm.appExpressionName
        }
    }
}
</script>
