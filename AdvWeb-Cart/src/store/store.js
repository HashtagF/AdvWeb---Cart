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
    productall: [],
    carts: {}
  },
  getters: {
    product: state => state.product,
    productall: state => state.productall,
    carts: state => state.carts
  },
  mutations: {
    setProduct (state, product) {
      state.product = product
    },
    setProductall (state, product) {
      state.productall = product
    },
    setCarts (state, carts) {
      state.carts = carts
    }
  },
  actions: {
    inputProduct (context, product) {
      db.ref('products').push(product)
    },
    showCarts (context) {
      db.ref('carts').on('value', (snapshot) => {
        context.commit('setCarts', snapshot.val())
      })
    },
    showProduct (context) {
      var ref = db.ref('products')
      ref.on('value', (snapshot) => {
        context.commit('setProductall', snapshot.val())
      })
    },
    updateStock (context, key) {
      if (context.state.productall[key].count === 0) {
        return 0
      } else {
        db.ref('products').child([key] + '/count').set(context.state.productall[key].count - 1)
        if (context.state.carts[key] == null) {
          db.ref('carts').child([key] + '/count').set(1)
          db.ref('carts').child([key] + '/price').set(context.state.productall[key].price)
          db.ref('carts').child('/total').set(1)
        } else {
          db.ref('carts').child([key] + '/count').set(context.state.carts[key].count + 1)
          db.ref('carts').child([key] + '/price').set(context.state.carts[key].price + context.state.productall[key].price)
          db.ref('carts').child('/total').set(context.state.carts.total + 1)
        }
      }
    }
  }
})
