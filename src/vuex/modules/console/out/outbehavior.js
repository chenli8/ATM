import {
	
	SWITCH_OUTBEHAVIORCONSOLE
} from '../../../mutation-types';

const state = {
	title: 'APP明细',
	//false关闭|true打开
	switch: false, 
}

const mutations = {
	[SWITCH_OUTBEHAVIORCONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}