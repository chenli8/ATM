import {
	SWITCH_BRUSHTYPECONSOLE
} from '../../../mutation-types';

const state = {
	title: '过滤刷量匹配条件',
	//false关闭|true打开
	switch: false, 
}

const mutations = {//设置控制台关闭
	[SWITCH_BRUSHTYPECONSOLE](state, sw) {
		state.switch = sw;
	}
}

export default {
	state,
	mutations
}