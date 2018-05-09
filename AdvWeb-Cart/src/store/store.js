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
    product: {},
    productall: []
  },
  getters: {
    product: state => state.product,
    productall: state => state.productall
  },
  mutations: {
    setProduct (state, product) {
      state.product = product
    },
    setProductall (state, product) {
      state.productall = product
    }
  },
  actions: {
    inputProduct (context, product) {
      console.log(product)
      db.ref('products').push(product)
    },
    showProduct (context) {
      var ref = db.ref('products')
      ref.on('value', (snapshot) => {
        context.commit('setProductall', snapshot.val())
      })
    },
    updateStock (context, productCount) {
      console.log(productCount)
    }
  }
})
