import {
	SWITCH_GHETTOCONSOLE
} from '../../../mutation-types';

const state = {
	title: '工作地居住地',
	//false关闭|true打开
	switch: false, 
}
const mutations = {
	[SWITCH_GHETTOCONSOLE](state, sw) {
		state.switch = sw;
	},
}

export default {
	state,
	mutations,
}