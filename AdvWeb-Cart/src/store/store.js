import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router/index'

let config = {
  apiKey: 'AIzaSyDLfM_hgjwzB9VAuso7gIkYnPq4OuCfAJE',
  authDomain: 'drawsomething-21394.firebaseapp.com',
  databaseURL: 'https://drawsomething-21394.firebaseio.com',
  projectId: 'drawsomething-21394',
  storageBucket: 'drawsomething-21394.appspot.com',
  messagingSenderId: '948399402337'
}
var firebaseApp = firebase.initializeApp(config)
let provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})
var db = firebaseApp.database()
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    setReady (state) {
      state.isReady = true
    }
  },
  actions: {
    init ({ commit, dispatch, bindFirebaseRef }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.uid) {
          let profile = {
            name: user.displayName,
            picture: user.photoURL,
            fb: user.providerData[0]
          }
          commit('setKeyplayer', user.uid)
          commit('setUser', profile)
          router.push('/lobby')
        } else {
          commit('setUser', null)
          router.push('/login')
          commit('setReady')
        }
      })
    }
  }
})
