import {
	SWITCH_ACTIVECONSOLE
} from '../../../mutation-types';

const state = {
	title: '活跃设备',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_ACTIVECONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}