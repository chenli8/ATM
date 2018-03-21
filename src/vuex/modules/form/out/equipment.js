import {
    UPDATE_EQUIPMENTFORM_SELECTED,
    DELETE_EQUIPMENTFORM
} from '../../../mutation-types';

//设备类型
const EQUIPMENTTYPE = ['normal', 'md5'];
const state = {
    formName: 'equipmentForm',
    //选中项
    selectedArr: [],
    //MD5设备选中项
    selectedMD5Arr: [],
    //设备ID-显示文字
    listLabel: '设备ID',
    //设备ID-集合
    list: [{
        id: 21,
        name: 'TDID',
        type: EQUIPMENTTYPE[0]
    }, {
        id: 31,
        name: 'MAC',
        type: EQUIPMENTTYPE[0]
    }, {
        id: 41,
        name: 'IMEI',
        type: EQUIPMENTTYPE[0]
    }, {
        id: 61,
        name: 'IDFA',
        type: EQUIPMENTTYPE[0]
    }, {
        id: 71,
        name: 'AndroidID',
        type: EQUIPMENTTYPE[0]
    }, {
        id: 81,
        name: 'IMSI',
        type: EQUIPMENTTYPE[0]
    }],
    //MD5设备ID-显示文字
    md5Label: 'MD5设备ID',
    //MD5设备ID-集合
    md5List: [{
        id: 32,
        name: 'MAC',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 33,
        name: 'MAC(大写)',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 42,
        name: 'IMEI',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 43,
        name: 'IMEI(大写)',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 44,
        name: '截取前14位IMEI',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 51,
        name: 'PhoneNumber',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 62,
        name: 'IDFA',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 63,
        name: 'IDFA(大写)',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 72,
        name: 'AndroidID',
        type: EQUIPMENTTYPE[1]
    }, {
        id: 73,
        name: 'AndroidID(大写)',
        type: EQUIPMENTTYPE[1]
    }]
}

const mutations = {
    [UPDATE_EQUIPMENTFORM_SELECTED](state, item) {
        //正常设备
        if (item.type === EQUIPMENTTYPE[0]) {
            if (!state.selectedArr.length) {
                state.selectedArr.push(item);
            } else {
                let index = 0,
                    selectedIndex = -1;
                for (let it of state.selectedArr) {
                    if (it.id === item.id) {
                        selectedIndex = index;
                        break;
                    }
                    index++;
                }
                //存在则取消选中项
                selectedIndex === -1 ? state.selectedArr.push(item) : state.selectedArr.splice(selectedIndex, 1);
            }
        } else {
            if (!state.selectedMD5Arr.length) {
                state.selectedMD5Arr.push(item);
            } else {
                let index = 0,
                    selectedIndex = -1;
                for (let it of state.selectedMD5Arr) {
                    if (it.id === item.id) {
                        selectedIndex = index;
                        break;
                    }
                    index++;
                }
                //存在则取消选中项
                selectedIndex === -1 ? state.selectedMD5Arr.push(item) : state.selectedMD5Arr.splice(selectedIndex, 1);
            }
        }
    },
    [DELETE_EQUIPMENTFORM](state) {
        state.selectedArr = [];
        state.selectedMD5Arr = [];
    }
}

export default {
    state,
    mutations,
}