import {
	SWITCH_PUTLOCATIONCONSOLE
} from '../../../mutation-types';

const state = {
	title: '圈中位置',
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