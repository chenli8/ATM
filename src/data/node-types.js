/**
 * 左侧节点集合 
 * @param {[Number]} [key] [GoJS key用来标示界面节点,当对节点进行操作时,如果key值(GoJs自动修改此属性)为负数说明有多个相同的节点]
 * @param {[String]} [formName] [与vuex/modules/form/*.js内的formName属性一致]
 * @type {Array}
 */
export const inNodes = [
{
    key: 101,
    id: 101,
    formName: 'idForm',
    category: 'in',
    text: 'ID匹配',
    eventType: 1,
    eventDimension: 1,
    item: 'ID匹配',
    geo: "user"
}, {
    key: 102,
    id: 102,
    formName: 'locationForm',
    category: 'in',
    text: '位置',
    eventType: 1,
    eventDimension: 1,
    item: '位置',
    geo: "location2"
}, {
    key: 103,
    id: 103,
    formName: 'equipmentProForm',
    category: 'in',
    text: '设备属性',
    eventType: 1,
    eventDimension: 1,
    item: '设备属性',
    geo: "cogs"
}, {
    key: 104,
    id: 104,
    formName: 'regionForm',
    category: 'in',
    text: '行政区划',
    eventType: 1,
    eventDimension: 1,
    item: '行政区划',
    geo:"office"
}, {
    key: 105,
    id: 105,
    formName: 'tagForm',
    category: 'in',
    text: '标签',
    eventType: 1,
    eventDimension: 1,
    item: '标签',
    geo:"diamonds"
}, {
    key: 106,
    id: 106,
    formName: 'appForm',
    category: 'in',
    text: '应用筛选',
    eventType: 1,
    eventDimension: 1,
    item: '应用筛选',
    geo:"feed"
}, {
    key: 107,
    id: 107,
    formName: 'appTypeForm',
    category: 'in',
    text: '应用分类',
    eventType: 1,
    eventDimension: 1,
    item: '应用分类',
    geo:"list2"
},{
    key: 108,
    id: 108,
    formName: 'brushForm',
    category: 'in',
    text: '过滤刷量',
    eventType: 1,
    eventDimension: 1,
    item: '过滤刷量',
    geo:"filter"
},{
    key: 109,
    id: 109,
    formName: 'poiFilterForm',
    category: 'in',
    text: '筛选POI',
    eventType: 1,
    eventDimension: 1,
    item: '筛选POI',
    geo: "spades"
},
{
    key: 110,
    id: 110,
    formName: 'activeForm',
    category: 'in',
    text: '活跃设备',
    eventType: 1,
    eventDimension: 1,
    item: '活跃设备',
    geo: "box-remove"
},
{
    key: 111,
    id: 111,
    formName: 'ghettoForm',
    category: 'in',
    text: '工作地居住地',
    eventType: 1,
    eventDimension: 1,
    item: '工作地居住地',
    geo: "clubs"
}
];

export const outDetail = [
// {
//     key: 214,
//     id: 214,
//     formName: 'poiFormoutForm',
//     category: 'out',
//     eventType: 1,
//     eventDimension: 8,
//     text: '输出POI',
//     item: '输出POI',
//     geo:"earth"
// },
{
    key: 201,
    id: 201,
    formName: 'idformoutForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: '设备ID/属性',
    item: '设备ID/属性',
    geo: "cogs"
},{
    key: 202,
    id: 202,
    formName: 'outRegionForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: '行政区划',
    item: '行政区划',
    geo: "zoomout"
},{
    key: 203,
    id: 203,
    formName: 'outTagForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: '标签明细',
    item: '标签明细',
    geo:"windows8"
},{
    key: 204,
    id: 204,
    formName: 'outBehaviorForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: 'APP明细',
    item: 'APP明细',
    geo:"apple"
},{
    key: 205,
    id: 205,
    formName: 'outLocationForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: '输出位置',
    item: '输出位置',
    geo:"exit"
},{
    key: 206,
    id: 206,
    formName: 'putLocationForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: '圈中位置',
    item: '圈中位置',
    geo:"crop"
},{
    key: 207,
    id: 207,
    formName: 'hotForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: '热力图',
    item: '热力图',
    geo:"earth"
},{
    key: 208,
    id: 208,
    formName: 'outpoiFilterForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: 'POI明细',
    item: 'POI明细',
    geo:"history"
},{
    key: 209,
    id: 209,
    formName: 'placeForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: '工作地居住地',
    item: '工作地居住地',
    geo: "lab"
},{
    key: 210,
    id: 210,
    formName: 'subdistrictForm',
    category: 'out',
    eventType: 1,
    eventDimension: 8,
    text: '小区明细',
    item: '小区明细',
    geo:"download"
}]

export const outStatistics = [
{
    key: 301,
    id: 301,
    formName: 'structForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: '设备属性统计',
    item: '设备属性统计',
    geo: "file"
},{
    key: 302,
    id: 302,
    formName: 'putRegionForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: '行政区划统计',
    item: '行政区划统计',
    geo: "bars2"
},{
    key: 303,
    id: 303,
    formName: 'putTagForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: '标签统计',
    item: '标签统计',
    geo:"bars"
},{
    key: 304,
    id: 304,
    formName: 'behaviorForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: 'APP统计',
    item: 'APP统计',
    geo:"android"
},{
    key: 305,
    id: 305,
    formName: 'separatingForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: '筛选设备统计',
    item: '筛选设备统计',
    geo:"cogs"
},{
    key: 306,
    id: 306,
    formName: 'putpoiFilterForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: 'POI统计',
    item: 'POI统计',
    geo: "droplet"
},{
    key: 306,
    id: 306,
    formName: 'digpoiFilterForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: 'POI分类统计',
    item: 'POI分类统计',
    geo: "home"
},
{
    key: 307,
    id: 307,
    formName: 'outActiveForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: '活跃统计',
    item: '活跃统计',
    geo: "cog"
},{
    key: 308,
    id: 308,
    formName: 'resideForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: '工作地居住地',
    item: '工作地居住地',
    geo: "tree"
},{
    key: 309,
    id: 309,
    formName: 'putsubdistrictForm',
    category: 'out',
    eventType: 1,
    eventDimension: 7,
    text: '小区统计',
    item: '小区统计',
    geo:"heart"
}]
