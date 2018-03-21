import {
	SWITCH_PUTSUBDISTRICTCONSOLE
} from '../../../mutation-types';

const state = {
	title: '小区统计',
	//false关闭|true打开
	switch: false, 
}

const mutations = {
	[SWITCH_PUTSUBDISTRICTCONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}