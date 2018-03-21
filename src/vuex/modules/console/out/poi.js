import {
    
    SWITCH_OUTPOICONSOLE
} from '../../../mutation-types';

const state = {
    title: '输出POI',
    //false关闭|true打开
    switch: false, 
}

const mutations = {
    [SWITCH_OUTPOICONSOLE](state, sw) {
        state.switch = sw;
    }
}

export default {
    state,
    mutations
}