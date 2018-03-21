import {
	
	SWITCH_OUTLOCATIONCONSOLE
} from '../../../mutation-types';

const state = {
	title: '输出位置',
	//false关闭|true打开
	switch: false, 
}

const mutations = {
	[SWITCH_OUTLOCATIONCONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}