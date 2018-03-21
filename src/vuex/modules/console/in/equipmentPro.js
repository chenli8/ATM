import {
    SWITCH_EQUIPMENTPROCONSOLE
} from '../../../mutation-types';

const state = {
    title: '设备属性筛选',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_EQUIPMENTPROCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}