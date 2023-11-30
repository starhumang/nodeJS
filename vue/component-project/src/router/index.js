import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue';

const routes = [
  {
    path: '/',//App.vue가 제일 먼저 실행되는데 여기에 <router-view/>가 있어서 path에 있는 '/'를 남겨두는게 낫다
    name: 'home',
    component: HomeView
  },
  {
   path:'/dataBinding', //사용하고자하는 경로를 path에 넣음
   name: 'dataBinding',
   component : DataBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
