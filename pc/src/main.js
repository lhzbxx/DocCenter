import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Index from 'components/Index.vue'
import Auth from 'components/Auth'

Vue.use(Router)

const router = new Router({
  history: false,
  saveScrollPosition: true
})

router.map({
  '/auth': {
    component: Auth
  },
  '/': {
    component: Index
  }
})

// var token

router.beforeEach(function (transition) {
  // if (!token) {
  //   // 验证是否登录
  //   router.go('/login')
  // }
  transition.next()
})

router.afterEach(function (transition) {
})

router.start(App, 'app')
