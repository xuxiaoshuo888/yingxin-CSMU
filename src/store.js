import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        qjxx: {},
        token: Cookies.get('setToken') || '',
        stdInfo: Cookies.get('setStdInfo') || {},//用户基本信息
        planList: [],//环节信息
    },
    getters: {
        token: state => state.token,
        stdInfo: state => state.stdInfo,
        planList: state => state.planList
    },
    mutations: {
        setToken(state, data) {
            state.token = data
            Cookies.set('setToken', data)
        },
        setStdInfo(state, data) {
            state.stdInfo = data
            console.log(data)
            Cookies.set('setStdInfo', data)
        }
    },
    actions: {}
})
