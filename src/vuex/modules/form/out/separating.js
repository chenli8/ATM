import {
   SUBMIT_SEPARATINGFORM
} from '../../../mutation-types';
const state = {
    formName: 'separatingForm',
    title:'筛选设备统计',
    submitData:{},
}
const mutations = {
     [SUBMIT_SEPARATINGFORM](state) {
        state.submitData= {
            "expType":"outputStatics",
            "exps":[{
                "type":"deviceCount","expCode":"03033"
            }]
         }
    }
}
export default {
    state,
    mutations
}