import {
	SWITCH_OUTPOIFILTERCONSOLE
} from '../../../mutation-types';

const state = {
	title: 'POI明细',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_OUTPOIFILTERCONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}