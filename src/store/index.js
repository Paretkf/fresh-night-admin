import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyBc7iBXZwbRemlDM9UUR8fMCoPp8p_Dqmc',
  authDomain: 'fitm-freshy-night.firebaseapp.com',
  databaseURL: 'https://fitm-freshy-night.firebaseio.com',
  projectId: 'fitm-freshy-night',
  storageBucket: 'fitm-freshy-night.appspot.com',
  messagingSenderId: '79766181497'
}
let app = firebase.initializeApp(config)

let db = app.database()
let scoreRef = db.ref('score')

Vue.use(Vuex)

const state = {
  score: {}
}

const actions = {
  updateScore ({commit}, payload) {
    scoreRef.child(`/G0/part1/referee1/${payload.index}`).set(payload.score)
    // commit('UPDATE_SCORE', payload)
  },
  bindscoreRef: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('score', scoreRef)
  }),
  unbindscoreRef: firebaseAction(({ unbindFirebaseRef }) => {
    unbindFirebaseRef('score')
  })
}

const mutations = {
  ...firebaseMutations
  // UPDATE_SCORE (state, payload) {
  //   state.score.G0.part1.referee1[payload.index] = payload.score
  // }
}

const getters = {
  score: state => state.score
}

const modules = {
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})
