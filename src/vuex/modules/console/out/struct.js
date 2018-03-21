import {
	SWITCH_STRUCTCONSOLE
} from '../../../mutation-types';

const state = {
	title: '设备属性统计',
	//false关闭|true打开
	switch: false, 
}

const mutations = {
	[SWITCH_STRUCTCONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}