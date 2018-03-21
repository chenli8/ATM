import {
    SWITCH_APPTYPECONSOLE
} from '../../../mutation-types';

const state = {
    title: '应用分类筛选',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_APPTYPECONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}