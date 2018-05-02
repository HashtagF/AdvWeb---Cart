import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDZiGEHS_dMBgz43QBCCdoKN5KX-Rulc6U',
  authDomain: 'vue-project-4a8f5.firebaseapp.com',
  databaseURL: 'https://vue-project-4a8f5.firebaseio.com',
  projectId: 'vue-project-4a8f5',
  storageBucket: 'vue-project-4a8f5.appspot.com',
  messagingSenderId: '232717547987'
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
    product: {}
  },
  getters: {
    product: state => state.product
  },
  mutations: {
    setProduct (state, product) {
      state.product = product
    }
  },
  actions: {
    inputProduct (context, product) {
      console.log(product)
      db.ref('products').push(product)
    }
  }
})
