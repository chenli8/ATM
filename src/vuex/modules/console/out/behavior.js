import {
	
	SWITCH_BEHAVIORCONSOLE
} from '../../../mutation-types';

const state = {
	title: 'APP统计',
	//false关闭|true打开
	switch: false, 
}

const mutations = {
	[SWITCH_BEHAVIORCONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}