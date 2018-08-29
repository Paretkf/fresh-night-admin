import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import UpdateScore from '@/views/UpdateScore'
import CreateData from '@/views/admin/CreateData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/update-score',
      name: 'UpdateScore',
      component: UpdateScore
    },
    {
      path: '/create-data',
      name: 'CreateData',
      component: CreateData
    }
  ]
})
