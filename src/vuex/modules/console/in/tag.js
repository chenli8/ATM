import {
    SWITCH_TAGCONSOLE
} from '../../../mutation-types';

const state = {
    title: '标签筛选',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_TAGCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}