import {
    SWITCH_OUTREGIONCONSOLE
} from '../../../mutation-types';

const state = {
    title: '行政区划',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_OUTREGIONCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}