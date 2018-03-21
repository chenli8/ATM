import {
	SWITCH_PUTLOCATIONCONSOLE
} from '../../../mutation-types';

const state = {
	title: '筛选条件',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_PUTLOCATIONCONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}