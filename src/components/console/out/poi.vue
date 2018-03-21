<!-- 设备属性控制台 -->
<template>
    <div class="console-item-wrapper">
        <fieldset>
            <legend>{{title}}</legend>
            <div class="fieldset-wrapper">
                <div class="fieldset-item-wrapper" v-show="listConnect.length!==0">
                    <label>{{listLabel}}</label><span>{{listConnect}}</span>
                </div>
                
                <div class="fieldset-item-wrapper" v-show="coordinateText.length!=0">
                    <label>{{coordinateLabel}}</label><span>{{coordinateText}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="inquiryText.length!=0">
                    <label>{{inquiry}}</label><span>{{inquiryText}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="withinText.length!=0">
                    <label>{{within}}</label><span>{{withinText}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="Province.length!=0 || City.length!=0 || Area.length!=0" >
                     <label>{{district}}</label>
                        <span v-show="Province.length!=0">省：{{Province}}</span>
                        <span v-show="City.length!=0">市：{{City}}</span>
                        <span v-show="Area.length!=0">区：{{Area}}</span>
                </div>
                <div class="fieldset-item-wrapper" v-show="timePericopeArr.length!=0">
                    <label class="fieldset-item-wrapper-poi-label">{{timePericope}}</label>
                    <section class='fieldset-item-wrapper-poi'>
                        <div v-for="item in timePericopeArr" >
                           <span>开始：{{item.hour}}</span>
                           <span>结束：{{item.end}}</span>
                        </div>
                    </section>
                </div>
                <div class="fieldset-item-wrapper" v-show="peripheryRadiuNumber.length!=0" style="clear:both">
                    <label>{{peripheryRadius}}</label><span>{{peripheryRadiuNumber}}</span>
                </div>
                <div class="fieldset-item-wrapper"v-show="poiListSelected.length!==0">
                    <label>{{inquiryConnect}}</label><span v-for="item in poiListSelected" >{{item.name}}</span>
                </div>
                
            </div>
        </fieldset>
    </div>
</template>
<script>
export default {
    vuex: {
        getters: {
            title: ({outPoiConsole}) => outPoiConsole.title,
            listLabel:({outPoiForm})=>outPoiForm.listLabel,
            listConnect:({outPoiForm})=>outPoiForm.listConnect,
            coordinateText:({outPoiForm})=>outPoiForm.coordinateText,
            coordinateLabel:({outPoiForm})=>outPoiForm.coordinateLabel,
            inquiryText:({outPoiForm})=>outPoiForm.inquiryText,
            inquiry:({outPoiForm})=>outPoiForm.inquiry,
            withinText:({outPoiForm})=>outPoiForm.withinText,
            within:({outPoiForm})=>outPoiForm.within,
            district:({outPoiForm})=>outPoiForm.district,
            Province:({outPoiForm})=>outPoiForm.Province,//省
            City:({outPoiForm})=>outPoiForm.City,//市
            Area:({outPoiForm})=>outPoiForm.Area,//区
            timePericope:({outPoiForm})=>outPoiForm.timePericope,
            inquiryConnect:({outPoiForm})=>outPoiForm.inquiryConnect,
            timePericopeArr:({outPoiForm})=>outPoiForm.timePericopeArr,
            peripheryRadius:({outPoiForm})=>outPoiForm.peripheryRadius,
            peripheryRadiuNumber:({outPoiForm})=>outPoiForm.peripheryRadiuNumber,
            poiListSelected:({outPoiForm})=>outPoiForm.poiListSelected,
        }
    }
}
</script>
