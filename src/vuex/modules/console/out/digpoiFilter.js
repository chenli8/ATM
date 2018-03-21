import {
	SWITCH_DIGPOIFILTERCONSOLE
} from '../../../mutation-types';

const state = {
	title: 'POI分类统计',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_DIGPOIFILTERCONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}