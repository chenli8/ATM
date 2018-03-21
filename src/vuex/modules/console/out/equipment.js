import {
    SWITCH_EQUIPMENTCONSOLE
} from '../../../mutation-types';

const state = {
    title: '设备属性',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_EQUIPMENTCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}