import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainComponent.vue'
import EmpListCom from '../views/EmpListCom.vue'
import EmpInfoCom from '../views/EmpInfoCom.vue'
import EmpFormView from '../views/EmpFormView.vue'
const routes = [
  {
    path:'/',
    name :'home',
    component : MainView
  },
  {
    path:'/empList',
    name : 'empList',
    component : EmpListCom
  },
  {
    path:'/empInfo',
    name : 'empInfo',
    component : EmpInfoCom
  },
  {
    path:'/empForm',
    name : 'empForm',
    component : EmpFormView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
