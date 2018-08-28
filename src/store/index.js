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
  bindscoreRef: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('score', scoreRef)
  }),
  unbindscoreRef: firebaseAction(({ unbindFirebaseRef }) => {
    unbindFirebaseRef('score')
  })
}

const mutations = {
  ...firebaseMutations
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
