import {
	SWITCH_SEPARATINGCONSOLE
} from '../../../mutation-types';

const state = {
	title: '筛选设备统计',
	//false关闭|true打开
	switch: false, 
}

const mutations = {
	[SWITCH_SEPARATINGCONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}