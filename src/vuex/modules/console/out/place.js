import {
	SWITCH_PLACECONSOLE
} from '../../../mutation-types';

const state = {
	title: '工作地居住地',
	//false关闭|true打开
	switch: false, 
}

const mutations = {//设置控制台关闭
	[SWITCH_PLACECONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}