import { createRouter, createWebHistory } from 'vue-router' // createWebHistory 히스토리 추가하겠다고 해서 생긴거
import HomeView from '../views/HomeView.vue'

//중요! path나 name으로 어떤 컴포넌트를 불러올건지, 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. lazy load = 지금당장 사용하지 않는 컴포넌트에 지연을 걸어놓는것
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') //청크파일 이름은 그냥 우리가 정하는 것
    //지역로딩을 이용해서 필요할때 컴포넌트를 불러오는 작업
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes// 라우팅목록
})

export default router
