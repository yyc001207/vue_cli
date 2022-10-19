// 创建Vuex最为核心的store
import Vue from 'vue'
import Vuex from 'vuex'

import countOptions from './count'
import perosnOptions from './person'
Vue.use(Vuex)


//创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: perosnOptions
    }
})