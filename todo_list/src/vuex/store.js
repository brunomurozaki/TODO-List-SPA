// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
  calendar: {}
}

// define the possible mutations that can be applied to our state
const mutations = {
  CHANGE_TYPE (type){
    state.calendar.type = type
  }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations
})