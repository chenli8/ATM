import {
    SWITCH_OUTTAGCONSOLE
} from '../../../mutation-types';

const state = {
    title: '标签明细',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_OUTTAGCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}