import {
    
    SWITCH_IDFORMOUTCONSOLE
} from '../../../mutation-types';

const state = {
    title: '设备ID/属性',
    //false关闭|true打开
    switch: false, 
}

const mutations = {
    [SWITCH_IDFORMOUTCONSOLE](state, sw) {
        state.switch = sw;
    }
}

export default {
    state,
    mutations
}