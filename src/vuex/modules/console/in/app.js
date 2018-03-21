import {
    SWITCH_APPCONSOLE
} from '../../../mutation-types';

const state = {
    title: '应用筛选',
    //false关闭|true打开
    switch: false, 
}
const mutations = {
    [SWITCH_APPCONSOLE](state, sw) {
        state.switch = sw;
    },
}

export default {
    state,
    mutations,
}