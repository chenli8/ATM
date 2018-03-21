import {
	SWITCH_POIFILTERCONSOLE
} from '../../../mutation-types';

const state = {
	title: '筛选POI',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_POIFILTERCONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}