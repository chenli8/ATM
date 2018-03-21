import Vuex from 'vuex';
import idForm from './modules/form/in/id';
import idConsole from './modules/console/in/id';
import locationForm from './modules/form/in/location';
import locationConsole from './modules/console/in/location';
import equipmentForm from './modules/form/out/equipment';
import equipmentConsole from './modules/console/out/equipment';
import equipmentProForm from './modules/form/in/equipmentPro';
import equipmentProConsole from './modules/console/in/equipmentPro';
import regionForm from './modules/form/in/region';
import regionConsole from './modules/console/in/region';
import tagForm from './modules/form/in/tag';
import tagConsole from './modules/console/in/tag';
import appForm from './modules/form/in/app';
import appConsole from './modules/console/in/app';
import appTypeForm from './modules/form/in/appType';
import appTypeConsole from './modules/console/in/appType';
import outRegionForm from './modules/form/out/outregion';
import outRegionConsole from './modules/console/out/outregion';
import outTagForm from './modules/form/out/outtag';
import outTagConsole from './modules/console/out/outtag';
import brushForm from './modules/form/in/brush';
import brushConsole from './modules/console/in/brush';
import idFormOutForm from './modules/form/out/idformout';
import idFormOutConsole from './modules/console/out/idformout';
import structForm from './modules/form/out/struct';
import structConsole from './modules/console/out/struct';
import behaviorForm from './modules/form/out/behavior';
import behaviorConsole from './modules/console/out/behavior';
import putRegionForm from './modules/form/out/putregion';
import putRegionConsole from './modules/console/out/putregion';
import putTagForm from './modules/form/out/puttag';
import putTagConsole from './modules/console/out/puttag';
import outBehaviorForm from './modules/form/out/outbehavior';
import outBehaviorConsole from './modules/console/out/outbehavior';
import outLocationForm from './modules/form/out/outlocation';
import outLocationConsole from './modules/console/out/outlocation';
import putLocationForm from './modules/form/out/putlocation';
import putLocationConsole from './modules/console/out/putlocation';
import hotForm from './modules/form/out/hot';
import hotConsole from './modules/console/out/hot';
import activeForm from './modules/form/in/active';
import activeConsole from './modules/console/in/active';
import outActiveForm from './modules/form/out/outactive';
import outActiveConsole from './modules/console/out/outactive';
import outPoiForm from './modules/form/out/poi';
import outPoiConsole from './modules/console/out/poi';
import separatingForm from './modules/form/out/separating';
import outSeparatingConsole from './modules/console/out/separating';
import poiFilterForm from './modules/form/in/poiFilter';
import poiFilterConsole from './modules/console/in/poiFilter';
import outPoiFilterForm from './modules/form/out/outpoiFilter';
import outPoiFilterConsole from './modules/console/out/outpoiFilter';
import putPoiFilterForm from './modules/form/out/putpoiFilter';
import putPoiFilterConsole from './modules/console/out/putpoiFilter';
import digPoiFilterForm from './modules/form/out/digpoiFilter';
import digPoiFilterConsole from './modules/console/out/digpoiFilter';
import ghettoForm from './modules/form/in/ghetto';
import ghettoConsole from './modules/console/in/ghetto';
import placeForm from './modules/form/out/place';
import placeConsole from './modules/console/out/place';
import resideForm from './modules/form/out/reside';
import resideConsole from './modules/console/out/reside';
import subdistrictForm from './modules/form/out/subdistrict';
import subdistrictConsole from './modules/console/out/subdistrict';
import putSubdistrictForm from './modules/form/out/putsubdistrict';
import putSubdistrictConsole from './modules/console/out/putsubdistrict';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
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
    separatingForm,
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
  }
});