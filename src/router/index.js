import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import UpdateScore from '@/views/UpdateScore'
import CreateData from '@/views/admin/CreateData'
import DashBoard from '@/views/admin/DashBoard'
import DashBoardAllDetail from '@/views/admin/DashBoardAllDetail'
import Main from '@/views/AppMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dash-board',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/dash-board-all-detail',
      name: 'DashBoardAllDetail',
      component: DashBoardAllDetail
    },
    {
      path: '/create-data',
      name: 'CreateData',
      component: CreateData
    },
    {
      path: '/app',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'update-score',
          name: 'UpdateScore',
          component: UpdateScore
        }
      ]
    }
  ]
})
