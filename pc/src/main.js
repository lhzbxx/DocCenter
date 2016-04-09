import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Index from 'components/Index.vue'
import Login from 'components/Login.vue'
import Signup from 'components/Signup.vue'
import ForgetPassword from 'components/ForgetPassword.vue'

Vue.use(Router)

const router = new Router({
  history: false,
  saveScrollPosition: true
})

router.map({
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  },
  '/forget-password': {
    component: ForgetPassword
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
