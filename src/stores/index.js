import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, actions, getters } from './shared'

import counter from './modules/Counter'

Vue.use(Vuex)

const store = new Vuex.Store({
    /** Modules */
    modules: {
        counter
    },

    /** Shared Store */
    state,
    mutations,
    actions,
    getters,

    /** Configures */
    strict: process.env.NODE_ENV !== 'production'
})

export default store