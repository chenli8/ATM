<template>
	<div class="atm-ide">
		<!--内容头部-->
		<div class="top-wrapper">
            <i-button type="primary" @click="projectsubmit"  size="small" class="delivery-mar">创建项目</i-button>
            <i-input :value.sync="projectVal" size="small" placeholder="请输入项目名称..." style="width: 300px;margin-right:15px" ></i-input>
			<label for="">选择项目名称</label>    
			<i-select :model.sync="model1" style="width:200px" size="small">
                 <i-option v-for="item in cityList" :value="item.id" :key="item.id"> {{  item.name  }}</i-option>
			</i-select>
			<label for="">作业名称</label>
			<i-input :value.sync="value" placeholder="请输入..." style="width: 300px" size="small"></i-input>
		</div>
		<div class="clearfix content">
			<!-- 左侧百叶窗 -->
			<div class="left-wrapper fl">
				<Collapse active-key="accordion-in" accordion @on-change="activeAccordion">
					<Panel key="accordion-in">
						筛选条件
						<div id="accordion-in" slot="content" class="accordion-wrapper"></div>
					</Panel>
					<Panel key="accordion-out">
						输出明细
						<div id="accordion-out" slot="content" class="accordion-wrapper"></div>
					</Panel>
					<Panel key="accordion-out-s">
						输出统计
						<div id="accordion-out-s" slot="content" class="accordion-wrapper"></div>
					</Panel>
				</Collapse>
			</div>
			<!-- 中间区域 -->
			<div class="main-wrapper fl">
				<div class="main-up-wrapper clearfix">
					<Card dis-hover class="fl">
						<p slot="title">
							<Icon type="ios-browsers-outline" size="18"></Icon>
							筛选条件区
							<a>
								<Icon type="help-circled"></Icon>
								<rd-tooltip>支持选择多个筛选条件，但每个筛选条件只能选择一次</rd-tooltip>
							</a>
						</p>
						<div id="mainCon-in" class="diagram-wrapper">
						</div>
					</Card>
					<Card dis-hover class="fl">
						<p slot="title">
							<Icon type="ios-browsers-outline" size="18"></Icon>
							输出条件区
							<a>
								<Icon type="help-circled"></Icon>
								<rd-tooltip>仅支持选择一个输出（输出明细或输出统计）条件</rd-tooltip>
							</a>
						</p>
						<div id="mainCon-out" class="diagram-wrapper">
						</div>
					</Card>
				</div>
				<Card dis-hover class="main-down-wrapper">
					<p slot="title">
						<Icon type="ios-paper-outline" size="18"></Icon>
						控制台
					</p>
					<!--v-show="operationActive" -->
					<i-button type="primary" slot="extra" @click="clearAll()" style="margin-right:8px" class="empty">清空</i-button>
					<i-button type="primary" slot="extra" @click="submitAll()" :disabled="endSubmit" class="presentment">提交</i-button>
					<div :id="CONSOLEDOMID" class="console-wrapper">
						<div>
							<span>已选筛选条件:</span>
							<id-console :id="idFormFormName+CONSOLE" v-if="idConsoleSwitch"></id-console>
							<location-console :id="locationFormFormName+CONSOLE" v-if="locationConsoleSwitch"></location-console>
							<equipment-pro-console :id="equipmentProFormFormName+CONSOLE" v-if="equipmentProConsoleSwitch"></equipment-pro-console>
							<region-console :id="regionFormFormName+CONSOLE" v-if="regionConsoleSwitch"></region-console>
							<tag-console :id="tagFormFormName+CONSOLE" v-if="tagConsoleSwitch"></tag-console>
							<app-console :id="appFormFormName+CONSOLE" :id="appFormFormName+CONSOLE" v-if="appConsoleSwitch"></app-console>
							<app-type-console :id="appTypeFormFormName+CONSOLE" v-if="appTypeConsoleSwitch"></app-type-console>
							<brush-console :id="brushFormFormName+CONSOLE" v-if="brushConsoleSwitch"></brush-console>
							<active-console :id="activeFormFormName+CONSOLE" v-if="activeConsoleSwitch"></active-console>
							<poi-Filter-console :id="poiFilterFormName+CONSOLE" v-if="poiFilterConsoleSwitch"></poi-Filter-console>
							<ghetto-console :id="ghettoFormForame+CONSOLE" v-if="ghettoConmNsoleSwitch"></ghetto-console>
						</div>

						<div>
							<span>已选输出条件:</span>
							<equipment-console :id="equipmentFormFormName+CONSOLE" v-if="equipmentConsoleSwitch"></equipment-console>
							<out-region-console :id="outRegionFormFormName+CONSOLE" v-if="outRegionConsoleSwitch"></out-region-console>
							<out-tag-console :id="outTagFormFormName+CONSOLE" v-if="outTagConsoleSwitch"></out-tag-console>
							<id-form-out-console :id="idFormOutFormFormName+CONSOLE" v-if="idFormOutConsoleSwitch"></id-form-out-console>
							<struct-console :id="structFormFormName+CONSOLE" v-if="structConsoleSwitch"></struct-console>
							<behavior-console :id="behaviorFormFormName+CONSOLE" v-if="behaviorConsoleSwitch"></behavior-console>
							<put-region-console :id="putRegionFormFormName+CONSOLE" v-if="putRegionConsoleSwitch"></put-region-console>
							<put-tag-console :id="putTagFormFormName+CONSOLE" v-if="putTagConsoleSwitch"></put-tag-console>
							<out-behavior-console :id="outBehaviorFormFormName+CONSOLE" v-if="outBehaviorConsoleSwitch"></out-behavior-console>
							<out-location-console :id="outLocationFormFormName+CONSOLE" v-if="outLocationConsoleSwitch"></out-location-console>
							<put-location-console :id="putLocationFormFormName+CONSOLE" v-if="putLocationConsoleSwitch"></put-location-console>
							<hot-console :id="hotFormFormName+CONSOLE" v-if="hotConsoleSwitch"></hot-console>
							<out-active-console :id="outActiveFormFormName+CONSOLE" v-if="outActiveConsoleSwitch"></out-active-console>
							<out-Poi-console :id="outPoiFormFormName+CONSOLE" v-if="outPoiConsoleSwitch"></out-Poi-console>
							<out-Separating-console :id="outSeparatingFormName+CONSOLE" v-if="outSeparatingConsoleSwitch"></out-Separating-console>
							<out-poi-Filter-console :id="outPoiFilterFormName+CONSOLE" v-if="outPoiFilterConsoleSwitch"></out-poi-Filter-console>
							<put-poi-Filter-console :id="putPoiFilterFormName+CONSOLE" v-if="putPoiFilterConsoleSwitch"></put-poi-Filter-console>
							<place-console :id="placeFormForame+CONSOLE" v-if="placeConmNsoleSwitch"></place-console>
							<reside-console :id="resideFormForame+CONSOLE" v-if="resideConmNsoleSwitch"></reside-console>
							<dig-poi-filter-console :id="digPoiFilterFormName+CONSOLE" v-if="digPoiFilterConsoleSwitch"></dig-poi-filter-console>
							<subdistrict-console :id="subdistrictFormForame+CONSOLE" v-if="subdistrictConmNsoleSwitch"></subdistrict-console>
							<put-subdistrict-console :id="putSubdistrictFormForame+CONSOLE" v-if="putSubdistrictConmNsoleSwitch"></put-subdistrict-console>
						</div>
					</div>
				</Card>
			</div>
			<!--右侧表单 -->
			<Card dis-hover class="fl right-wrapper">
				<p slot="title">
					<Icon type="ios-compose-outline" size="18"></Icon>
					表单
				</p>
				<div v-show="idFormFormName===selectedFormName">
					<id-form v-if="formList.indexOf(idFormFormName)!==-1"></id-form>
				</div>
				<div v-show="locationFormFormName===selectedFormName">
					<location-form v-if="formList.indexOf(locationFormFormName)!==-1"></location-form>
				</div>
				<div v-show="equipmentProFormFormName===selectedFormName">
					<equipment-pro-form v-if="formList.indexOf(equipmentProFormFormName)!==-1"></equipment-pro-form>
				</div>
				<div v-show="equipmentFromFormName===selectedFormName">
					<equipment-form v-if="formList.indexOf(equipmentFromFormName)!==-1"></equipment-form>
				</div>
				<div v-show="regionFormFormName===selectedFormName">
					<region-form v-if="formList.indexOf(regionFormFormName)!==-1"></region-form>
				</div>
				<div v-show="tagFormFormName===selectedFormName">
					<tag-form v-if="formList.indexOf(tagFormFormName)!==-1"></tag-form>
				</div>
				<div v-show="appFormFormName===selectedFormName">
					<app-form v-if="formList.indexOf(appFormFormName)!==-1"></app-form>
				</div>
				<div v-show="appTypeFormFormName===selectedFormName">
					<app-type-form v-if="formList.indexOf(appTypeFormFormName)!==-1"></app-type-form>
				</div>
				<div v-show="outRegionFormFormName===selectedFormName">
					<out-region-form v-if="formList.indexOf(outRegionFormFormName)!==-1"></out-region-form>
				</div>
				<div v-show="outTagFormFormName===selectedFormName">
					<out-tag-form v-if="formList.indexOf(outTagFormFormName)!==-1"></out-tag-form>
				</div>
				<div v-show="brushFormFormName===selectedFormName">
					<brush-form v-if="formList.indexOf(brushFormFormName)!==-1"></brush-form>
				</div>
				<div v-show="activeFormFormName===selectedFormName">
					<active-form v-if="formList.indexOf(activeFormFormName)!==-1"></active-form>
				</div>
				<!--  红色 -->
				<div v-show="idFormOutFormFormName==selectedFormName">
					<id-form-out-form v-if="formList.indexOf(idFormOutFormFormName)!==-1">
					</id-form-out-form>
				</div>
				<div v-show="structFormFormName===selectedFormName">

					<struct-Form v-if="formList.indexOf(structFormFormName)!==-1">
					</struct-Form>
				</div>
				<div v-show="behaviorFormFormName===selectedFormName">
					<behavior-form v-if="formList.indexOf(behaviorFormFormName)!==-1">
					</behavior-form>
				</div>
				<div v-show="putRegionFormFormName===selectedFormName">
					<put-region-form v-if="formList.indexOf(putRegionFormFormName)!==-1"></put-region-form>
				</div>
				<div v-show="putTagFormFormName===selectedFormName">
					<put-tag-form v-if="formList.indexOf(putTagFormFormName)!==-1"></put-tag-form>
				</div>
				<div v-show="outBehaviorFormFormName===selectedFormName">
					<out-behavior-form v-if="formList.indexOf(outBehaviorFormFormName)!==-1">
					</out-behavior-form>
				</div>
				<div v-show="outLocationFormFormName===selectedFormName">
					<out-Location-form v-if="formList.indexOf(outLocationFormFormName)!==-1">
					</out-Location-form>
				</div>
				<div v-show="putLocationFormFormName===selectedFormName">
					<put-Location-form v-if="formList.indexOf(putLocationFormFormName)!==-1">
					</put-Location-form>
				</div>
				<div v-show="hotFormFormName===selectedFormName">
					<hot-form v-if="formList.indexOf(hotFormFormName)!==-1">
					</hot-form>
				</div>
				<div v-show="outActiveFormFormName===selectedFormName">
					<out-Active-form v-if="formList.indexOf(outActiveFormFormName)!==-1">
					</out-Active-form>
				</div>
				<div v-show="outPoiFormFormName===selectedFormName">
					<out-Poi-form v-if="formList.indexOf(outPoiFormFormName)!==-1">
					</out-Poi-form>
				</div>

				<div v-show="outSeparatingFormName===selectedFormName">
					<out-Separating-form v-if="formList.indexOf(outSeparatingFormName)!==-1">
					</out-Separating-form>
				</div>
				<div v-show="poiFilterFormName===selectedFormName">
					<poi-Filter-form v-if="formList.indexOf(poiFilterFormName)!==-1">
					</poi-Filter-form>
				</div>
				<div v-show="outPoiFilterFormName===selectedFormName">
					<out-poi-Filter-form v-if="formList.indexOf(outPoiFilterFormName)!==-1">
					</out-poi-Filter-form>
				</div>
				<div v-show="putPoiFilterFormName===selectedFormName">
					<put-poi-Filter-form v-if="formList.indexOf(putPoiFilterFormName)!==-1">
					</put-poi-Filter-form>
				</div>
				<div v-show="digPoiFilterFormName===selectedFormName">
					<dig-poi-Filter-form v-if="formList.indexOf(digPoiFilterFormName)!==-1">
					</dig-poi-Filter-form>
				</div>
				<div v-show="ghettoFormForame===selectedFormName">
					<ghetto-form v-if="formList.indexOf(ghettoFormForame)!==-1"></ghetto-form>
				</div>
				<div v-show="placeFormForame===selectedFormName">
					<place-form v-if="formList.indexOf(placeFormForame)!==-1"></place-form>
				</div>
				<div v-show="resideFormForame===selectedFormName">
					<reside-form v-if="formList.indexOf(resideFormForame)!==-1"></reside-form>
				</div>
				<div v-show="subdistrictFormForame===selectedFormName">
					<subdistrict-form v-if="formList.indexOf(subdistrictFormForame)!==-1"></subdistrict-form>
				</div>
				<div v-show="putSubdistrictFormForame===selectedFormName">
					<put-subdistrict-form v-if="formList.indexOf(putSubdistrictFormForame)!==-1"></put-subdistrict-form>
				</div>
			</Card>
		</div>
	</div>
</template>
<script>
import { rdTooltip } from "radon-ui";
import { inNodes, outDetail, outStatistics } from "../data/node-types";
import bpmn from "../lib/gojs/bpmn";
import idForm from "./form/in/id.vue";
import idConsole from "./console/in/id.vue";
import locationForm from "./form/in/location.vue";
import locationConsole from "./console/in/location.vue";
import equipmentForm from "./form/out/equipment.vue";
import equipmentConsole from "./console/out/equipment.vue";
import equipmentProForm from "./form/in/equipmentPro.vue";
import equipmentProConsole from "./console/in/equipmentPro.vue";
import regionForm from "./form/in/region.vue";
import regionConsole from "./console/in/region.vue";
import tagForm from "./form/in/tag.vue";
import tagConsole from "./console/in/tag.vue";
import appForm from "./form/in/app.vue";
import appConsole from "./console/in/app.vue";
import appTypeForm from "./form/in/appType.vue";
import appTypeConsole from "./console/in/appType.vue";
import outRegionForm from "./form/out/outregion.vue";
import outRegionConsole from "./console/out/outregion.vue";
import outTagForm from "./form/out/outtag.vue";
import outTagConsole from "./console/out/outtag.vue";
import brushForm from "./form/in/brush.vue";
import brushConsole from "./console/in/brush.vue";
import idFormOutForm from "./form/out/idformout.vue";
import idFormOutConsole from "./console/out/idformout.vue";
import structForm from "./form/out/struct.vue";
import structConsole from "./console/out/struct.vue";
import behaviorForm from "./form/out/behavior.vue";
import behaviorConsole from "./console/out/behavior.vue";
import putRegionForm from "./form/out/putregion.vue";
import putRegionConsole from "./console/out/putregion.vue";
import putTagForm from "./form/out/puttag.vue";
import putTagConsole from "./console/out/puttag.vue";
import outBehaviorForm from "./form/out/outbehavior.vue";
import outBehaviorConsole from "./console/out/outbehavior.vue";
import outLocationForm from "./form/out/outlocation.vue";
import outLocationConsole from "./console/out/outlocation.vue";
import putLocationForm from "./form/out/putlocation.vue";
import putLocationConsole from "./console/out/putlocation.vue";
import hotForm from "./form/out/hot.vue";
import hotConsole from "./console/out/hot.vue";
import activeForm from "./form/in/active.vue";
import activeConsole from "./console/in/active.vue";
import outActiveForm from "./form/out/outactive.vue";
import outActiveConsole from "./console/out/outactive.vue";
import outPoiForm from "./form/out/poi.vue";
import outPoiConsole from "./console/out/poi.vue";
import outSeparatingForm from "./form/out/separating.vue";
import outSeparatingConsole from "./console/out/separating.vue";
import poiFilterForm from "./form/in/poiFilter.vue";
import poiFilterConsole from "./console/in/poiFilter.vue";
import outPoiFilterForm from "./form/out/outpoiFilter.vue";
import outPoiFilterConsole from "./console/out/outpoiFilter.vue";
import putPoiFilterForm from "./form/out/putpoiFilter.vue";
import putPoiFilterConsole from "./console/out/putpoiFilter.vue";
import digPoiFilterForm from "./form/out/digpoiFilter.vue";
import digPoiFilterConsole from "./console/out/digpoiFilter.vue";
import ghettoForm from "./form/in/ghetto.vue";
import ghettoConsole from "./console/in/ghetto.vue";
import placeForm from "./form/out/place.vue";
import placeConsole from "./console/out/place.vue";
import resideForm from "./form/out/reside.vue";
import resideConsole from "./console/out/reside.vue";
import subdistrictForm from "./form/out/subdistrict.vue";
import subdistrictConsole from "./console/out/subdistrict.vue";
import putSubdistrictForm from "./form/out/putsubdistrict.vue";
import putSubdistrictConsole from "./console/out/putsubdistrict.vue";
import {
  deleteIdForm,
  submitIdForm,
  switchIdConsolePanel,
  deleteLocationForm,
  submitLocationForm,
  switchLocationConsolePanel,
  deleteEquipmentForm,
  switchEquipmentConsolePanel,
  deleteEquipmentProForm,
  submitEquipmentProForm,
  switchEquipmentProConsolePanel,
  deleteRegionForm,
  submitRegionForm,
  switchRegionConsolePanel,
  deleteTagForm,
  submitTagForm,
  switchTagConsolePanel,
  deleteAppForm,
  submitAppForm,
  switchAppConsolePanel,
  deleteAppTypeForm,
  submitAppTypeForm,
  switchAppTypeConsolePanel,
  deleteOutRegionForm,
  submitOutRegionForm,
  switchOutRegionConsolePanel,
  deleteOutTagForm,
  submitOutTagForm,
  switchOutTagConsolePanel,
  deleteBrushForm,
  switchBrushTypeConsolePanel,
  submitBrushForm,
  upadateIdformoutFormSelected,
  deleteIdformoutForm,
  switchIdformoutConsolePanel,
  submitIdformoutForm,
  switchStructConsolePanel,
  deleteStructForm,
  submitStructForm,
  switchBehaviorConsolePanel,
  submitBehaviorForm,
  deleteBehaviorForm,
  deletePutRegionForm,
  submitPutRegionForm,
  switchPutRegionConsolePanel,
  deletePutTagForm,
  submitPutTagForm,
  switchPutTagConsolePanel,
  switchoutBehaviorConsolePanel,
  submitoutBehaviorForm,
  deleteoutBehaviorForm,
  deleteOutLocationForm,
  submitOutLocationForm,
  switchOutLocationConsolePanel,
  deletePutLocationForm,
  submitPutLocationForm,
  switchPutLocationConsolePanel,
  deleteHotForm,
  submitHotForm,
  switchHotConsolePanel,
  deleteActiveForm,
  submitActiveForm,
  switchActiveConsolePanel,
  deleteOutActiveForm,
  submitOutActiveForm,
  switchOutActiveConsolePanel,
  switchOutPoiConsolePanel, //poi
  deletePoiActiveForm,
  submitSeparatingForm,
  switchSeparatingConsolePanel,
  switchPoiFilterConsolePanel,
  submitPoiFilterForm,
  deletePoiFilterForm,
  switchOutPoiFilterConsolePanel,
  submitOutPoiFilterForm,
  deleteOutPoiFilterForm,
  switchPutPoiFilterConsolePanel,
  submitPutPoiFilterForm,
  deletePutPoiFilterForm,
  switchDigPoiFilterConsolePanel,
  submitDigPoiFilterForm,
  deleteDigPoiFilterForm,
  switchGhettoConsolePanel,
  deleteGhettoForm,
  submitGhettoForm,
  switchPlaceConsolePanel,
  deletePlaceForm,
  submitPlaceForm,
  switchResideConsolePanel,
  deleteResideForm,
  submitResideForm,
  switchSubdistrictConsolePanel,
  deleteSubdistrictForm,
  submitSubdistrictForm,
  switchPutSubdistrictConsolePanel,
  deletePutSubdistrictForm,
  submitPutSubdistrictForm
} from "../vuex/actions";

export default {
  components: {
    rdTooltip,
    idForm,
    idConsole,
    locationForm,
    locationConsole,
    equipmentForm,
    equipmentConsole,
    equipmentProForm,
    equipmentProConsole,
    regionForm,
    regionConsole,
    tagForm,
    tagConsole,
    appForm,
    appConsole,
    appTypeForm,
    appTypeConsole,
    outRegionForm,
    outRegionConsole,
    outTagForm,
    outTagConsole,
    brushForm,
    brushConsole,
    idFormOutForm,
    idFormOutConsole,
    structForm,
    structConsole,
    behaviorForm,
    behaviorConsole,
    putRegionForm,
    putRegionConsole,
    putTagForm,
    putTagConsole,
    outBehaviorForm,
    outBehaviorConsole,
    outLocationForm,
    outLocationConsole,
    putLocationForm,
    putLocationConsole,
    hotForm,
    hotConsole,
    activeForm,
    activeConsole,
    outActiveForm,
    outActiveConsole,
    outPoiForm,
    outPoiConsole,
    outSeparatingForm,
    outSeparatingConsole,
    poiFilterForm,
    poiFilterConsole,
    outPoiFilterForm,
    outPoiFilterConsole,
    putPoiFilterForm,
    putPoiFilterConsole,
    digPoiFilterForm,
    digPoiFilterConsole,
    ghettoForm,
    ghettoConsole,
    placeForm,
    placeConsole,
    resideForm,
    resideConsole,
    subdistrictForm,
    subdistrictConsole,
    putSubdistrictForm,
    putSubdistrictConsole
  },
  data() {
    return {
      //控制台表单id后缀
      CONSOLE: "console",
      CONSOLEDOMID: "console-wrapper",
      consoleDom: null,
      selectedFormName: "",
      bpmnData: null,
      endSubmit: false,
      email: "",
      intermediate: false, //圈中位置
      operationActive: false, //操作按钮是否显示
      projectVal: "",
      info: [
        {
          id: "mainCon-in",
          title: "输入区"
        },
        {
          id: "mainCon-out",
          title: "输出区"
        }
      ],
      accordionInfo: [
        {
          id: "accordion-in",
          nodeDataArray: inNodes
        },
        {
          id: "accordion-out",
          nodeDataArray: outDetail
        },
        {
          id: "accordion-out-s",
          nodeDataArray: outStatistics
        }
      ],
      // 存储所有表单集合(输入/输出)
      formList: [],
      cityList: [],
      model1:'',
      value: "",
      brushExclude: false
    };
  },
  vuex: {
    getters: {
      idFormFormName: ({ idForm }) => idForm.formName,
      idFormSubmitData: ({ idForm }) => idForm.submitData,
      idConsoleSwitch: ({ idConsole }) => idConsole.switch,
      locationFormFormName: ({ locationForm }) => locationForm.formName,
      locationFormSubmitData: ({ locationForm }) => locationForm.submitData,
      locationConsoleSwitch: ({ locationConsole }) => locationConsole.switch,
      equipmentFormFormName: ({ equipmentForm }) => equipmentForm.formName,
      equipmentConsoleSwitch: ({ equipmentConsole }) => equipmentConsole.switch,
      equipmentProFormFormName: ({ equipmentProForm }) =>
        equipmentProForm.formName,
      equipmentProSubmitData: ({ equipmentProForm }) =>
        equipmentProForm.submitData,
      equipmentProConsoleSwitch: ({ equipmentProConsole }) =>
        equipmentProConsole.switch,
      regionFormFormName: ({ regionForm }) => regionForm.formName,
      regionFormSubmitData: ({ regionForm }) => regionForm.submitData,
      regionConsoleSwitch: ({ regionConsole }) => regionConsole.switch,
      tagFormFormName: ({ tagForm }) => tagForm.formName,
      tagFormSubmitData: ({ tagForm }) => tagForm.submitData,
      tagConsoleSwitch: ({ tagConsole }) => tagConsole.switch,
      appFormFormName: ({ appForm }) => appForm.formName,
      appFormSubmitData: ({ appForm }) => appForm.submitData,
      appConsoleSwitch: ({ appConsole }) => appConsole.switch,
      appTypeFormFormName: ({ appTypeForm }) => appTypeForm.formName,
      appTypeFormSubmitData: ({ appTypeForm }) => appTypeForm.submitData,
      appTypeConsoleSwitch: ({ appTypeConsole }) => appTypeConsole.switch,
      outRegionFormFormName: ({ outRegionForm }) => outRegionForm.formName,
      outRegionFormSubmitData: ({ outRegionForm }) => outRegionForm.submitData,
      outRegionConsoleSwitch: ({ outRegionConsole }) => outRegionConsole.switch,
      outTagFormFormName: ({ outTagForm }) => outTagForm.formName,
      outTagFormSubmitData: ({ outTagForm }) => outTagForm.submitData,
      outTagConsoleSwitch: ({ outTagConsole }) => outTagConsole.switch,
      brushFormFormName: ({ brushForm }) => brushForm.formName,
      brushFromSubmitData: ({ brushForm }) => brushForm.submitData,
      brushConsoleSwitch: ({ brushConsole }) => brushConsole.switch,
      idFormOutFormFormName: ({ idFormOutForm }) => idFormOutForm.formName,
      idFormOutConsoleSwitch: ({ idFormOutConsole }) => idFormOutConsole.switch,
      idFormOutFormSubmitData: ({ idFormOutForm }) => idFormOutForm.submitData,
      structFormFormName: ({ structForm }) => structForm.formName,
      structConsoleSwitch: ({ structConsole }) => structConsole.switch,
      structFormSubmitData: ({ structForm }) => structForm.submitData,
      behaviorFormFormName: ({ behaviorForm }) => behaviorForm.formName,
      behaviorConsoleSwitch: ({ behaviorConsole }) => behaviorConsole.switch,
      behaviorFormSubmitData: ({ behaviorForm }) => behaviorForm.submitData,
      putRegionFormFormName: ({ putRegionForm }) => putRegionForm.formName,
      putRegionFormSubmitData: ({ putRegionForm }) => putRegionForm.submitData,
      putRegionConsoleSwitch: ({ putRegionConsole }) => putRegionConsole.switch,
      putTagFormFormName: ({ putTagForm }) => putTagForm.formName,
      putTagFormSubmitData: ({ putTagForm }) => putTagForm.submitData,
      putTagConsoleSwitch: ({ putTagConsole }) => putTagConsole.switch,
      outBehaviorFormFormName: ({ outBehaviorForm }) =>
        outBehaviorForm.formName,
      outBehaviorConsoleSwitch: ({ outBehaviorConsole }) =>
        outBehaviorConsole.switch,
      outBehaviorFormSubmitData: ({ outBehaviorForm }) =>
        outBehaviorForm.submitData,
      outLocationFormFormName: ({ outLocationForm }) =>
        outLocationForm.formName,
      outLocationFormSubmitData: ({ outLocationForm }) =>
        outLocationForm.submitData,
      outLocationConsoleSwitch: ({ outLocationConsole }) =>
        outLocationConsole.switch,
      putLocationFormFormName: ({ putLocationForm }) =>
        putLocationForm.formName,
      putLocationFormSubmitData: ({ putLocationForm }) =>
        putLocationForm.submitData,
      putLocationConsoleSwitch: ({ putLocationConsole }) =>
        putLocationConsole.switch,
      hotFormFormName: ({ hotForm }) => hotForm.formName,
      hotFormSubmitData: ({ hotForm }) => hotForm.submitData,
      hotConsoleSwitch: ({ hotConsole }) => hotConsole.switch,
      activeFormFormName: ({ activeForm }) => activeForm.formName,
      activeFormSubmitData: ({ activeForm }) => activeForm.submitData,
      activeConsoleSwitch: ({ activeConsole }) => activeConsole.switch,
      outActiveFormFormName: ({ outActiveForm }) => outActiveForm.formName,
      outActiveFormSubmitData: ({ outActiveForm }) => outActiveForm.submitData,
      outActiveConsoleSwitch: ({ outActiveConsole }) => outActiveConsole.switch,
      outPoiFormFormName: ({ outPoiForm }) => outPoiForm.formName,
      outPoiFormSubmitData: ({ outPoiForm }) => outPoiForm.submitData,
      outPoiConsoleSwitch: ({ outPoiConsole }) => outPoiConsole.switch,
      outSeparatingFormName: ({ separatingForm }) => separatingForm.formName,
      outSeparatingFormSubmitData: ({ separatingForm }) =>
        separatingForm.submitData,
      outSeparatingConsoleSwitch: ({ outSeparatingConsole }) =>
        outSeparatingConsole.switch,
      poiFilterFormName: ({ poiFilterForm }) => poiFilterForm.formName,
      poiFilterConsoleSwitch: ({ poiFilterConsole }) => poiFilterConsole.switch,
      poiFilterFormSubmitData: ({ poiFilterForm }) => poiFilterForm.submitData,
      outPoiFilterFormName: ({ outPoiFilterForm }) => outPoiFilterForm.formName,
      outPoiFilterConsoleSwitch: ({ outPoiFilterConsole }) =>
        outPoiFilterConsole.switch,
      outPoiFilterFormSubmitData: ({ outPoiFilterForm }) =>
        outPoiFilterForm.submitData,
      putPoiFilterFormName: ({ putPoiFilterForm }) => putPoiFilterForm.formName,
      putPoiFilterConsoleSwitch: ({ putPoiFilterConsole }) =>
        putPoiFilterConsole.switch,
      putPoiFilterFormSubmitData: ({ putPoiFilterForm }) =>
        putPoiFilterForm.submitData,
      digPoiFilterFormName: ({ digPoiFilterForm }) => digPoiFilterForm.formName,
      digPoiFilterConsoleSwitch: ({ digPoiFilterConsole }) =>
        digPoiFilterConsole.switch,
      digPoiFilterFormSubmitData: ({ digPoiFilterForm }) =>
        digPoiFilterForm.submitData,
      //
      ghettoFormForame: ({ ghettoForm }) => ghettoForm.formName,
      ghettoFormSubmitData: ({ ghettoForm }) => ghettoForm.submitData,
      ghettoConmNsoleSwitch: ({ ghettoConsole }) => ghettoConsole.switch,
      //
      placeFormForame: ({ placeForm }) => placeForm.formName,
      placeFormSubmitData: ({ placeForm }) => placeForm.submitData,
      placeConmNsoleSwitch: ({ placeConsole }) => placeConsole.switch,
      //
      resideFormForame: ({ resideForm }) => resideForm.formName,
      resideFormSubmitData: ({ resideForm }) => resideForm.submitData,
      resideConmNsoleSwitch: ({ resideConsole }) => resideConsole.switch,
      //
      subdistrictFormForame: ({ subdistrictForm }) => subdistrictForm.formName,
      subdistrictFormSubmitData: ({ subdistrictForm }) =>
        subdistrictForm.submitData,
      subdistrictConmNsoleSwitch: ({ subdistrictConsole }) =>
        subdistrictConsole.switch,
      //
      putSubdistrictFormForame: ({ putSubdistrictForm }) =>
        putSubdistrictForm.formName,
      putSubdistrictFormSubmitData: ({ putSubdistrictForm }) =>
        putSubdistrictForm.submitData,
      putSubdistrictConmNsoleSwitch: ({ putSubdistrictConsole }) =>
        putSubdistrictConsole.switch
    },
    actions: {
      switchIdConsolePanel,
      deleteIdForm,
      submitIdForm,
      switchLocationConsolePanel,
      deleteLocationForm,
      submitLocationForm,
      switchEquipmentConsolePanel,
      deleteEquipmentForm,
      switchEquipmentProConsolePanel,
      deleteEquipmentProForm,
      submitEquipmentProForm,
      deleteRegionForm,
      submitRegionForm,
      switchRegionConsolePanel,
      deleteTagForm,
      submitTagForm,
      switchTagConsolePanel,
      switchAppConsolePanel,
      deleteAppForm,
      submitAppForm,
      switchAppTypeConsolePanel,
      deleteAppTypeForm,
      submitAppTypeForm,
      deleteOutRegionForm,
      submitOutRegionForm,
      switchOutRegionConsolePanel,
      deleteOutTagForm,
      submitOutTagForm,
      switchOutTagConsolePanel,
      deleteBrushForm,
      switchBrushTypeConsolePanel,
      submitBrushForm,
      upadateIdformoutFormSelected,
      deleteIdformoutForm,
      switchIdformoutConsolePanel,
      submitIdformoutForm,
      switchStructConsolePanel,
      deleteStructForm,
      submitStructForm,
      switchBehaviorConsolePanel,
      submitBehaviorForm,
      deleteBehaviorForm,
      deletePutRegionForm,
      submitPutRegionForm,
      switchPutRegionConsolePanel,
      deletePutTagForm,
      submitPutTagForm,
      switchPutTagConsolePanel,
      switchoutBehaviorConsolePanel,
      submitoutBehaviorForm,
      deleteoutBehaviorForm,
      deleteOutLocationForm,
      submitOutLocationForm,
      switchOutLocationConsolePanel,
      deletePutLocationForm,
      submitPutLocationForm,
      switchPutLocationConsolePanel,
      deleteHotForm,
      submitHotForm,
      switchHotConsolePanel,
      deleteActiveForm,
      submitActiveForm,
      switchActiveConsolePanel,
      deleteOutActiveForm,
      submitOutActiveForm,
      switchOutActiveConsolePanel,
      switchOutPoiConsolePanel,
      deletePoiActiveForm,
      submitSeparatingForm,
      switchSeparatingConsolePanel,
      switchPoiFilterConsolePanel,
      submitPoiFilterForm,
      deletePoiFilterForm,
      switchOutPoiFilterConsolePanel,
      submitOutPoiFilterForm,
      deleteOutPoiFilterForm,
      deleteOutPoiFilterForm,
      switchPutPoiFilterConsolePanel,
      submitPutPoiFilterForm,
      deletePutPoiFilterForm,
      switchDigPoiFilterConsolePanel,
      submitDigPoiFilterForm,
      deleteDigPoiFilterForm,
      switchGhettoConsolePanel,
      deleteGhettoForm,
      submitGhettoForm,
      switchPlaceConsolePanel,
      deletePlaceForm,
      submitPlaceForm,
      switchResideConsolePanel,
      deleteResideForm,
      submitResideForm,
      switchSubdistrictConsolePanel,
      deleteSubdistrictForm,
      submitSubdistrictForm,
      switchPutSubdistrictConsolePanel,
      deletePutSubdistrictForm,
      submitPutSubdistrictForm
    }
  },
  ready() {
    this.init();
  },
  methods: {
    init() {
      this.getcookie();
      this.fetchData();
      this.job();
    },
    indexOfName(val){
        let flug=false;
        for(var i=0;i<this.cityList.length;i++){
           if(this.cityList[i].name==val){
               flug = true;
           }
        }
        return flug;
    },
    projectsubmit() {
      if (this.projectVal == "") {
        this.$Notice.warning({
          title: "创建项目",
          desc: "请输入要创建项目名称"
        });
      }
       else if (this.indexOfName(this.projectVal)) {
         this.$Notice.warning({
          title: "创建项目",
          desc: "项目名称重复"
        });
      } 
      else {
        let url = process.env.NODE_ENV.apiPath + "/jobManager/addProject";
        Vue.http
          .get(url, {
            params: {
              email: this.email,
              projectName: this.projectVal
            }
          })
          .then(
            response => {
              if (response.body.resultCode == 0) {
                this.$Notice.success({
                  title: "创建项目",
                  desc: "创建项目成功"
                });
                this.job(()=>{
                     this.model1=this.cityList[this.cityList.length-1].id;
                });
              } else {
                this.$Notice.error({
                  title: "创建项目",
                  desc: "创建项目失败！请重新创建"
                });
              }
            },
            response => {
              console.log("请求不到数据");
            }
          );
      }
    },
    getcookie() {
      function getCookie(name) {
        var arr,
          reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
        else return null;
      }
      let useremail = getCookie("useremail"),
        userpassword = getCookie("userpassword"),
        sessionemail = sessionStorage.getItem("sessionUser");
      if (useremail && userpassword) {
        this.email = useremail;
      } else if (sessionemail) {
        this.email = sessionemail;
      }
    },
    job(callback) {
      if (this.email) {
        let urlgo = process.env.NODE_ENV.apiPath + "/jobManager/getProjects";
        Vue.http
          .get(urlgo, {
            params: {
              email: this.email
            }
          })
          .then(
            response => {
              this.cityList = response.body;
              callback && callback();
            },
            response => {
              console.log("请求不到数据");
            }
          );
      }
    },
    fetchData() {
      let self = this;
      this.consoleDom = document.getElementById(this.CONSOLEDOMID);
      this.bpmnData = bpmn({
        info: self.info,
        callBack: self.callBack
      });
      this.bpmnData.initModel(self.accordionInfo[0]);
    },
    /**
     * 激活百叶窗
     * @param  {Arraylist} key [激活窗口的key]
     */
    activeAccordion(key) {
      if (key.length) {
        const self = this;
        for (let item of self.accordionInfo) {
          if (item.id === key[0]) {
            self.bpmnData.initModel(item);
            break;
          }
        }
      }
    },
    /**
     * 控制台滑动
     */
    scroll(selectedFormName) {
      const consoleFormDom = document.getElementById(
        selectedFormName + this.CONSOLE
      );
      if (this.consoleDom.scrollTop) {
        this.consoleDom.scrollTop =
          consoleFormDom.offsetTop - consoleFormDom.offsetHeight;
      }
    },
    callBack(obj) {
      let oldSelectedFormName = this.selectedFormName;
      this.bpmnData = obj;
      //显示选中节点对应表单
      this.selectedFormName = obj.selectedNode
        ? obj.selectedNode.data.formName
        : "";
      //存储用户选择的表单
      if (
        this.selectedFormName &&
        this.formList.indexOf(this.selectedFormName) === -1
      ) {
        this.formList.push(this.selectedFormName);
        //控制台对应显示面板
        switch (this.selectedFormName) {
          case this.idFormFormName:
            this.switchIdConsolePanel(true);
            break;
          case this.locationFormFormName:
            this.switchLocationConsolePanel(true);
            break;
          case this.equipmentFormFormName:
            this.switchEquipmentConsolePanel(true);
            break;
          case this.equipmentProFormFormName:
            this.switchEquipmentProConsolePanel(true);
            break;
          case this.regionFormFormName:
            this.switchRegionConsolePanel(true);
            break;
          case this.tagFormFormName:
            this.switchTagConsolePanel(true);
            break;
          case this.appFormFormName:
            this.switchAppConsolePanel(true);
            break;
          case this.appTypeFormFormName:
            this.switchAppTypeConsolePanel(true);
            break;
          case this.outRegionFormFormName:
            this.switchOutRegionConsolePanel(true);
            break;
          case this.outTagFormFormName:
            this.switchOutTagConsolePanel(true);
            break;
          case this.idFormOutFormFormName:
            this.switchIdformoutConsolePanel(true);
            break;
          case this.brushFormFormName:
            this.switchBrushTypeConsolePanel(true);
            this.brushExclude = true;
            break;
          case this.structFormFormName:
            this.switchStructConsolePanel(true);
            break;
          case this.behaviorFormFormName:
            this.switchBehaviorConsolePanel(true);
            break;
          case this.putRegionFormFormName:
            this.switchPutRegionConsolePanel(true);
            break;
          case this.putTagFormFormName:
            this.switchPutTagConsolePanel(true);
            break;
          case this.outBehaviorFormFormName:
            this.switchoutBehaviorConsolePanel(true);
            break;
          case this.outLocationFormFormName:
            this.switchOutLocationConsolePanel(true);
            break;
          case this.putLocationFormFormName:
            this.switchPutLocationConsolePanel(true);
            this.intermediate = true;
            break;
          case this.hotFormFormName:
            this.switchHotConsolePanel(true);
            break;
          case this.activeFormFormName:
            this.switchActiveConsolePanel(true);
            break;
          case this.outActiveFormFormName:
            this.switchOutActiveConsolePanel(true);
            break;
          case this.outPoiFormFormName:
            this.switchOutPoiConsolePanel(true);
            break;
          case this.outSeparatingFormName:
            this.switchSeparatingConsolePanel(true);
            break;
          case this.poiFilterFormName:
            this.switchPoiFilterConsolePanel(true);
            break;
          case this.outPoiFilterFormName:
            this.switchOutPoiFilterConsolePanel(true);
            break;
          case this.putPoiFilterFormName:
            this.switchPutPoiFilterConsolePanel(true);
            break;
          case this.digPoiFilterFormName:
            this.switchDigPoiFilterConsolePanel(true);
            break;
          case this.ghettoFormForame:
            this.switchGhettoConsolePanel(true);
            break;
          case this.placeFormForame:
            this.switchPlaceConsolePanel(true);
            break;
          case this.resideFormForame:
            this.switchResideConsolePanel(true);
            break;
          case this.subdistrictFormForame:
            this.switchSubdistrictConsolePanel(true);
            break;
          case this.putSubdistrictFormForame:
            this.switchPutSubdistrictConsolePanel(true);
            break;
        }
      } else if (
        oldSelectedFormName &&
        !this.bpmnData.selectedNode &&
        event.type === "keydown"
      ) {
        //如果存在则证明执行的是删除操作
        this.deleteNode(oldSelectedFormName);
      } else if (event.type === "") {
      }
    },
    deleteNode(formName) {
      if (formName) {
        switch (formName) {
          case this.idFormFormName:
            this.deleteIdForm();
            this.switchIdConsolePanel(false);
            break;
          case this.locationFormFormName:
            this.deleteLocationForm();
            this.switchLocationConsolePanel(false);
            break;
          case this.equipmentFormFormName:
            this.deleteEquipmentForm();
            this.switchEquipmentConsolePanel(false);
            break;
          case this.equipmentProFormFormName:
            this.deleteEquipmentProForm();
            this.switchEquipmentProConsolePanel(false);
            break;
          case this.regionFormFormName:
            this.deleteRegionForm();
            this.switchRegionConsolePanel(false);
            break;
          case this.tagFormFormName:
            this.deleteTagForm();
            this.switchTagConsolePanel(false);
            break;
          case this.appFormFormName:
            this.deleteAppForm();
            this.switchAppConsolePanel(false);
            break;
          case this.appTypeFormFormName:
            this.deleteAppTypeForm();
            this.switchAppTypeConsolePanel(false);
            break;
          case this.outRegionFormFormName:
            this.deleteOutRegionForm();
            this.switchOutRegionConsolePanel(false);
            break;
          case this.outTagFormFormName:
            this.deleteOutTagForm();
            this.switchOutTagConsolePanel(false);
            break;
          case this.brushFormFormName:
            this.deleteBrushForm();
            this.switchBrushTypeConsolePanel(false);
            this.brushExclude = false;
            break;
          case this.idFormOutFormFormName:
            this.deleteIdformoutForm();
            this.switchIdformoutConsolePanel(false);
            break;
          case this.structFormFormName:
            this.deleteStructForm();
            this.switchStructConsolePanel(false);
            break;
          case this.behaviorFormFormName:
            this.deleteBehaviorForm();
            this.switchBehaviorConsolePanel(false);
            break;
          case this.putRegionFormFormName:
            this.deletePutRegionForm();
            this.switchPutRegionConsolePanel(false);
            break;
          case this.putTagFormFormName:
            this.deletePutTagForm();
            this.switchPutTagConsolePanel(false);
            break;
          case this.outBehaviorFormFormName:
            this.deleteoutBehaviorForm();
            this.switchoutBehaviorConsolePanel(false);
            break;
          case this.outLocationFormFormName:
            this.deleteOutLocationForm();
            this.switchOutLocationConsolePanel(false);

            break;
          case this.putLocationFormFormName:
            this.deletePutLocationForm();
            this.switchPutLocationConsolePanel(false);
            this.intermediate = false;
            break;
          case this.hotFormFormName:
            this.deleteHotForm();
            this.switchHotConsolePanel(false);
            break;
          case this.activeFormFormName:
            this.deleteActiveForm();
            this.switchActiveConsolePanel(false);
            break;
          case this.outActiveFormFormName:
            this.deleteOutActiveForm();
            this.switchOutActiveConsolePanel(false);
            break;
          case this.outPoiFormFormName:
            this.deletePoiActiveForm();
            this.switchOutPoiConsolePanel(false);
            break;
          case this.outSeparatingFormName:
            //this.deletePoiActiveForm();
            this.switchSeparatingConsolePanel(false);
            break;
          case this.poiFilterFormName:
            this.deletePoiFilterForm();
            this.switchPoiFilterConsolePanel(false);
            break;
          case this.outPoiFilterFormName:
            this.deleteOutPoiFilterForm();
            this.switchOutPoiFilterConsolePanel(false);
            break;
          case this.putPoiFilterFormName:
            this.deletePutPoiFilterForm();
            this.switchPutPoiFilterConsolePanel(false);
            break;
          case this.digPoiFilterFormName:
            this.deleteDigPoiFilterForm();
            this.switchDigPoiFilterConsolePanel(false);
            break;
          case this.ghettoFormForame:
            this.deleteGhettoForm();
            this.switchGhettoConsolePanel(false);
            break;
          case this.placeFormForame:
            this.deletePlaceForm();
            this.switchPlaceConsolePanel(false);
            break;
          case this.resideFormForame:
            this.deleteResideForm();
            this.switchResideConsolePanel(false);
            break;
          case this.subdistrictFormForame:
            this.deleteSubdistrictForm();
            this.switchSubdistrictConsolePanel(false);
            break;
          case this.putSubdistrictFormForame:
            this.deletePutSubdistrictForm();
            this.switchPutSubdistrictConsolePanel(false);
            break;
        }
        this.formList.splice(this.formList.indexOf(formName), 1);
      } else {
        //取消界面选中节点
        this.bpmnData.deleteSelection();
      }
    },
    submitGo(Data) {
      let basePath = "jobManager/createJob",
        url = process.env.NODE_ENV.apiPath + basePath;
      Vue.http
        .post(
          url,
          {
            submitParamJson: JSON.stringify(Data),
            jobId: 0,
            submitType: 1
          },
          { emulateJSON: true }
        )
        .then(response => {
          if (response.body.resultCode == 0) {
            this.endSubmit = true;
            const self = this;
            Data.outputPath = "";
            window.upLoadPath = "";
            this.$Notice.success({ title: "提交成功", desc: "已提交成功" });
            this.clear();
            setTimeout(function() {
              self.endSubmit = false;
            }, 1000);
          } else {
            this.$Notice.error({ title: "提交失败", desc: "提交失败！" });
          }
        })
        .catch(console.log);
    },
    submitAll() {
      const self = this;
      let sub = "";
      let data = {
        name: this.value,
        outputPath: window.upLoadPath,
        projectId: this.model1,
        excludeCheatedIds: 0,
        conditions: []
      };
      //  let errorCount=0;
      let errorMsg = [];
      //获取所有选中表单的数据
      this.formList.forEach(function(item, index) {
        switch (item) {
          case self.idFormFormName:
            self.submitIdForm();
            if (self.idFormSubmitData.error) {
              errorMsg.push(self.idFormSubmitData.error);
            } else {
              data.conditions.push(self.idFormSubmitData);
            }
            break;
          case self.regionFormFormName:
            self.submitRegionForm();
            if (self.regionFormSubmitData.error) {
              errorMsg.push(self.regionFormSubmitData.error);
            } else {
              data.conditions.push(self.regionFormSubmitData);
            }
            break;
          case self.appFormFormName:
            self.submitAppForm();
            if (self.appFormSubmitData.error) {
              errorMsg.push(self.appFormSubmitData.error);
            } else {
              data.conditions.push(self.appFormSubmitData);
            }
            break;
          case self.appTypeFormFormName:
            self.submitAppTypeForm();
            self.submitLocationForm();
            if (self.appTypeFormSubmitData.error) {
              errorMsg.push(self.appTypeFormSubmitData.error);
            } else {
              data.conditions.push(self.appTypeFormSubmitData);
            }
            break;
          case self.locationFormFormName:
            self.submitLocationForm();
            if (self.locationFormSubmitData.error) {
              errorMsg.push(self.locationFormSubmitData.error);
            } else {
              data.conditions.push(self.locationFormSubmitData);
            }
            break;
          case self.tagFormFormName:
            self.submitTagForm();
            if (self.tagFormSubmitData.error) {
              errorMsg.push(self.tagFormSubmitData.error);
            } else {
              data.conditions.push(self.tagFormSubmitData);
            }
            break;
          case self.equipmentProFormFormName:
            self.submitEquipmentProForm();
            if (self.equipmentProSubmitData.error) {
              errorMsg.push(self.equipmentProSubmitData.error);
            } else {
              data.conditions.push(self.equipmentProSubmitData);
            }
            break;
          case self.outRegionFormFormName:
            self.submitOutRegionForm();
            if (self.outRegionFormSubmitData.error) {
              errorMsg.push(self.outRegionFormSubmitData.error);
            } else {
              data.conditions.push(self.outRegionFormSubmitData);
            }
            break;
          case self.outTagFormFormName:
            self.submitOutTagForm();
            if (self.outTagFormSubmitData.error) {
              errorMsg.push(self.outTagFormSubmitData.error);
            } else {
              data.conditions.push(self.outTagFormSubmitData);
            }
            break;
          case self.idFormOutFormFormName:
            self.submitIdformoutForm();
            if (self.idFormOutFormSubmitData.error) {
              errorMsg.push(self.idFormOutFormSubmitData.error);
            } else {
              data.conditions.push(self.idFormOutFormSubmitData);
            }
            break;
          case self.structFormFormName:
            self.submitStructForm();
            if (self.structFormSubmitData.error) {
              errorMsg.push(self.structFormSubmitData.error);
            } else {
              data.conditions.push(self.structFormSubmitData);
            }

            break;
          case self.behaviorFormFormName:
            self.submitBehaviorForm();
            if (self.behaviorFormSubmitData.error) {
              errorMsg.push(self.behaviorFormSubmitData.error);
            } else {
              data.conditions.push(self.behaviorFormSubmitData);
            }
            break;
          case self.putRegionFormFormName:
            self.submitPutRegionForm();
            if (self.putRegionFormSubmitData.error) {
              errorMsg.push(self.putRegionFormSubmitData.error);
            } else {
              data.conditions.push(self.putRegionFormSubmitData);
            }
            break;
          case self.putTagFormFormName:
            self.submitPutTagForm();
            if (self.putTagFormSubmitData.error) {
              errorMsg.push(self.putTagFormSubmitData.error);
            } else {
              data.conditions.push(self.putTagFormSubmitData);
            }

            break;
          case self.outBehaviorFormFormName:
            self.submitoutBehaviorForm();
            if (self.outBehaviorFormSubmitData.error) {
              errorMsg.push(self.outBehaviorFormSubmitData.error);
            } else {
              data.conditions.push(self.outBehaviorFormSubmitData);
            }
            break;
          case self.outLocationFormFormName:
            self.submitOutLocationForm();
            if (self.outLocationFormSubmitData.error) {
              errorMsg.push(self.outLocationFormSubmitData.error);
            } else {
              data.conditions.push(self.outLocationFormSubmitData);
            }
            break;
          case self.putLocationFormFormName:
            self.submitPutLocationForm();
            if (self.putLocationFormSubmitData.error) {
              errorMsg.push(self.putLocationFormSubmitData.error);
            } else {
              data.conditions.push(self.putLocationFormSubmitData);
            }
            break;
          case self.hotFormFormName:
            self.submitHotForm();
            if (self.hotFormSubmitData.error) {
              errorMsg.push(self.hotFormSubmitData.error);
            } else {
              data.conditions.push(self.hotFormSubmitData);
            }
            break;
          case self.activeFormFormName:
            self.submitActiveForm();
            if (self.activeFormSubmitData.error) {
              errorMsg.push(self.activeFormSubmitData.error);
            } else {
              data.conditions.push(self.activeFormSubmitData);
            }
            break;
          case self.outActiveFormFormName:
            self.submitOutActiveForm();
            if (self.outActiveFormSubmitData.error) {
              errorMsg.push(self.outActiveFormSubmitData.error);
            } else {
              data.conditions.push(self.outActiveFormSubmitData);
            }
            break;
          case self.outSeparatingFormName:
            self.submitSeparatingForm();
            data.conditions.push(self.outSeparatingFormSubmitData);
            break;
          case self.poiFilterFormName:
            self.submitPoiFilterForm();
            if (self.poiFilterFormSubmitData.error) {
              errorMsg.push(self.poiFilterFormSubmitData.error);
            } else {
              data.conditions.push(self.poiFilterFormSubmitData);
            }
            break;
          case self.outPoiFilterFormName:
            self.submitOutPoiFilterForm();
            if (self.outPoiFilterFormSubmitData.error) {
              errorMsg.push(self.outPoiFilterFormSubmitData.error);
            } else {
              data.conditions.push(self.outPoiFilterFormSubmitData);
            }
            break;
          case self.putPoiFilterFormName:
            self.submitPutPoiFilterForm();
            if (self.putPoiFilterFormSubmitData.error) {
              errorMsg.push(self.putPoiFilterFormSubmitData.error);
            } else {
              data.conditions.push(self.putPoiFilterFormSubmitData);
            }
            break;
          case self.digPoiFilterFormName:
            self.submitDigPoiFilterForm();
            if (self.digPoiFilterFormSubmitData.error) {
              errorMsg.push(self.digPoiFilterFormSubmitData.error);
            } else {
              data.conditions.push(self.digPoiFilterFormSubmitData);
            }
            break;
          case self.ghettoFormForame:
            self.submitGhettoForm();
            if (self.ghettoFormSubmitData.error) {
              errorMsg.push(self.ghettoFormSubmitData.error);
            } else {
              data.conditions.push(self.ghettoFormSubmitData);
            }
            break;
          case self.placeFormForame:
            self.submitPlaceForm();
            if (self.placeFormSubmitData.error) {
              errorMsg.push(self.placeFormSubmitData.error);
            } else {
              data.conditions.push(self.placeFormSubmitData);
            }
            break;
          case self.resideFormForame:
            self.submitResideForm();
            if (self.resideFormSubmitData.error) {
              errorMsg.push(self.resideFormSubmitData.error);
            } else {
              data.conditions.push(self.resideFormSubmitData);
            }
            break;
          case self.subdistrictFormForame:
            self.submitSubdistrictForm();
            if (self.subdistrictFormSubmitData.error) {
              errorMsg.push(self.subdistrictFormSubmitData.error);
            } else {
              data.conditions.push(self.subdistrictFormSubmitData);
            }
            break;
          case self.putSubdistrictFormForame:
            self.submitPutSubdistrictForm();
            if (self.putSubdistrictFormSubmitData.error) {
              errorMsg.push(self.putSubdistrictFormSubmitData.error);
            } else {
              data.conditions.push(self.putSubdistrictFormSubmitData);
            }
            break;
        }
      });
      self.submitBrushForm();
      this.operationActive =
        this.bpmnData.inDiagram.nodes.count &&
        this.bpmnData.outDiagram.nodes.count
          ? true
          : false;

      //提交按钮
      if (self.brushExclude) {
        data.excludeCheatedIds = self.brushFromSubmitData.excludeCheatedIds;
      } else {
        data.excludeCheatedIds = 0;
      }
      if (this.model1 == "") {
        this.$Message.info("请选择项目名称", 2);
      } else if (this.value == "") {
        this.$Message.info("请填写作业名称", 2);
      } else if (!this.intermediate) {
        if (this.operationActive == false) {
          this.$Message.info("输入和输出需同时选中", 2);
        } else if (errorMsg.length > 0) {
          this.$Message.info(errorMsg.join(), 3);
        } else {
          if (data.conditions.length == 0) {
            this.$Message.info("请完善信息", 2);
          } else {
            this.submitGo(data);
          }
        }
      } else if (data.conditions.length == 0) {
        this.$Message.info("请完善信息", 2);
      } else {
        if (errorMsg.length > 0) {
          this.$Message.info(errorMsg.join(), 3);
        } else {
          this.submitGo(data);
        }
      }
    },
    clear() {
      this.model1 = "";
      this.value = "";
      this.intermediate = false;
      let formList = JSON.stringify(this.formList);
      formList = JSON.parse(formList);
      formList.forEach((form, index) => {
        this.deleteNode(form);
      });
      this.bpmnData.inDiagram.clear();
      this.bpmnData.outDiagram.clear();
    },
    clearAll() {
      this.$Modal.confirm({
        title: "清空作业条件",
        content: "<p>您确认清空吗？</p>",
        onOk: () => {
          this.clear();
        }
      });
    }
  },
  watch: {
    selectedFormName: function(val, oldVal) {
      if (val) {
        this.scroll(val);
      }
    }
  },
  destroyed() {
    this.clear();
  }
};
</script>