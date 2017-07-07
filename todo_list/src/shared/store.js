import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  calendarType: {}
}

// define the possible mutations that can be applied to our state
const mutations = {
	CHANGE_TYPE (type) {
		state.calendarType.type = type
	}
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations
})