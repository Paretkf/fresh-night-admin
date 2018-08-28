import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import CreateCompetitor from '@/views/admin/CreateCompetitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/create-competitor',
      name: 'CreateCompetitor',
      component: CreateCompetitor
    }
  ]
})
