import {
	SWITCH_LOCATIONCONSOLE
} from '../../../mutation-types';

const state = {
	title: '位置条件',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_LOCATIONCONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}