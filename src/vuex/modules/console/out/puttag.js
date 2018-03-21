import {
    SWITCH_PUTTAGCONSOLE
} from '../../../mutation-types';

const state = {
    title: '标签统计',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_PUTTAGCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}