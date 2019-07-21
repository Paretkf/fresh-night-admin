import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const firebase = require('firebase/app')
require('firebase/database')
const config = {
  apiKey: 'AIzaSyBc7iBXZwbRemlDM9UUR8fMCoPp8p_Dqmc',
  authDomain: 'fitm-freshy-night.firebaseapp.com',
  databaseURL: 'https://fitm-freshy-night.firebaseio.com',
  projectId: 'fitm-freshy-night',
  storageBucket: 'fitm-freshy-night.appspot.com',
  messagingSenderId: '79766181497'
}
const app = firebase.initializeApp(config)

const db = app.database()
const scoreRef = db.ref('score')
const userRef = db.ref('referees')
Vue.use(Vuex)

const state = {
  score: {},
  userDB: [],
  user: {
    name: '',
    id: '',
    roles: ''
  },
  selectScore: [
    'B1',
    'G1',
    'INE'
  ]
}

const actions = {
  setSelectScore ({commit}, payload) {
    commit('SET_SELECT_SCORE', payload)
  },
  updateScore ({commit}, payload) {
    scoreRef.child(`/${payload.index}/score`).set(payload.score)
  },
  bindscoreRef: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('score', scoreRef)
  }),
  unbindscoreRef: firebaseAction(({ unbindFirebaseRef }) => {
    unbindFirebaseRef('score')
  }),
  binduserRef: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('userDB', userRef)
  }),
  unbinduserRef: firebaseAction(({ unbindFirebaseRef }) => {
    unbindFirebaseRef('userDB')
  }),
  editUserData ({commit}, payload) {
    userRef.child(payload['.key']).set({
      id: payload.id,
      name: payload.name,
      password: payload.password,
      roles: payload.roles
    })
  },
  async getUser ({commit}) {
    let results = []
    await userRef.on('child_added', async (snapshot) => {
      await results.push(snapshot.val())
    })
    return results
  },
  setUser ({commit}, payload) {
    commit('SET_USER', payload)
    sessionStorage.setItem('name', payload.name)
    sessionStorage.setItem('id', payload.id)
  },
  setSessionUser ({state}) {
    state.user.name = sessionStorage.getItem('name')
    state.user.id = sessionStorage.getItem('id')
  },
  addData ({commit}, payload) {
    const q1 = [
      {
        max: 35,
        name: 'ความคิดสร้างสรรค์ในการแสดง',
        score: 0
      },
      {
        max: 20,
        name: 'สีหน้าและความมั่นใจ',
        score: 0
      },
      {
        max: 15,
        name: 'สร้างความประทับใจให้ผู้รับชม',
        score: 0
      },
      {
        max: 15,
        name: 'การแสดงที่ต่อเนื่อง',
        score: 0
      },
      {
        max: 15,
        name: 'การแสดงออกอย่างเป็นธรรมชาติ',
        score: 0
      }
    ]
    const q2 = [
      {
        max: 20,
        name: 'การเดิน',
        score: 0
      },
      {
        max: 20,
        name: 'การยืน',
        score: 0
      },
      {
        max: 10,
        name: 'ความโดดเด่น',
        score: 0
      },
      {
        max: 30,
        name: 'การพูด',
        score: 0
      },
      {
        max: 10,
        name: 'สีหน้า',
        score: 0
      },
      {
        max: 10,
        name: 'ท่าทางการแสดงออก',
        score: 0
      }
    ]
    const q3 = [
      {
        max: 35,
        name: 'ตอบตรงประเด็น',
        score: 0
      },
      {
        max: 35,
        name: 'ตอบแบบมีไหวพริบแสดงถึงทัศนะคติที่ดี',
        score: 0
      },
      {
        max: 20,
        name: 'ตอบอย่างชัดเจนมีความมั่นใจ',
        score: 0
      },
      {
        max: 10,
        name: 'ลักษณะท่าทางในการตอบ',
        score: 0
      }
    ]
    let data = {
      part1: {
        referee1: q1,
        referee2: q1,
        referee3: q1
      },
      part2: {
        referee1: q2,
        referee2: q2,
        referee3: q2
      },
      part3: {
        referee1: q3,
        referee2: q3,
        referee3: q3
      }
    }
    scoreRef.child(`/${payload.sex}/${payload.name}/`).set(data)
  }
}

const mutations = {
  ...firebaseMutations,
  SET_USER (state, payload) {
    state.user.name = payload.name
    state.user.id = payload.id
  },
  SET_SELECT_SCORE (state, payload) {
    state.selectScore = payload
  }
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
