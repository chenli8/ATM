import {
	SWITCH_PUTPOIFILTERCONSOLE
} from '../../../mutation-types';

const state = {
	title: '统计POI',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_PUTPOIFILTERCONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}