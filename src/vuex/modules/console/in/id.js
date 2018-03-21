import {
	SWITCH_IDCONSOLE
} from '../../../mutation-types';

const state = {
	title: 'ID匹配条件',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_IDCONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}