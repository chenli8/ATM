import {
    SWITCH_REGIONCONSOLE
} from '../../../mutation-types';

const state = {
    title: '行政区划筛选',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_REGIONCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}