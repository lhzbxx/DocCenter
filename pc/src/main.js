import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Login from 'components/Login.vue'

Vue.use(Router)

const router = new Router({
  history: false,
  saveScrollPosition: true
})

router.map({
  '/login': {
    component: Login
  },
  '/': {
    component: App
  }
})

var token

router.beforeEach(function (transition) {
  if (!token) {
    router.go('/login')
  }
  transition.next()
})

router.afterEach(function (transition) {
})

router.start(App, 'app')
