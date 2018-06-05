import Vue from 'vue'
import Router from 'vue-router'
import header from '../components/header'
import navbar from '../components/navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/',
      name: 'navbar',
      component: navbar
    }
  ]
})
