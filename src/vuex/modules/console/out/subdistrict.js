import {
	SWITCH_SUBDISTRICTCONSOLE
} from '../../../mutation-types';

const state = {
	title: '小区明细',
	//false关闭|true打开
	switch: false, 
}

const mutations = {
	[SWITCH_SUBDISTRICTCONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}