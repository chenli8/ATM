import {
   SWITCH_PUTREGIONCONSOLE
} from '../../../mutation-types';

const state = {
    title: '行政区划统计',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_PUTREGIONCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}