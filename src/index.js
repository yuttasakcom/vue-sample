import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      store,
      router,
      render: h => h(App)
    })
  }
})
