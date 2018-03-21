import {
	SWITCH_OUTACTIVECONSOLE
} from '../../../mutation-types';

const state = {
	title: '活跃统计',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_OUTACTIVECONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}