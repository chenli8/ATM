import {
    SWITCH_HOTCONSOLE
} from '../../../mutation-types';

const state = {
    title: '输出热力图统计',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_HOTCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}