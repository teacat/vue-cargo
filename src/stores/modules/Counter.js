import { api } from '@/api/modules/Counter'

/**
 * State
 */

const state = {
    total: 0
}

/**
 * Mutations
 */

const mutations = {
    // INCREMENT 會將計數器遞加。
    INCREMENT(state) {
        state.total++
    },

    // SET_TO 會將計數器設置成指定的數字。
    SET_TO(state, payload) {
        if (payload !== undefined) {
            state.total = payload.count
        }
    }
}

/**
 * Actions
 */

const actions = {
    // set 會將計數器設置成指定的數字。
    set({ commit }, count) {
        commit('SET_TO', { count })
    },

    // increment 會將計數器遞加。
    increment({ commit }) {
        commit('INCREMENT')
    },

    // fetchCount 會取得遠端的計數器資料。
    fetchCount({ commit }) {
        api.getCount((resp) => {
            commit('SET_TO', resp.body)
        })
    }
}

/**
 * Getters
 */

const getters = {
    total: state => state.total
}

/**
 * Export
 */

export default { namespaced: true, state, mutations, actions, getters }