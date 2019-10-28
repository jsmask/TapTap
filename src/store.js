import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const { Store } = Vuex;

const types = {
  SET_USER: "SET_USER"
}

const state = {
  user: null
}

const getters = {
  user: state => state.user
}

const mutations = {
  [types.SET_USER](state, user) {
    if (user) state.user = user;
    else state.user = null;
  }
}

const actions = {
  setUser: ({ commit }, user) => {
    new Promise(resolve => {
      commit(types.SET_USER, user);
      resolve()
    })
  }
}

export default new Store({
  state,
  getters,
  mutations,
  actions
})
