//import 뒤에 들어가는건 변수이름이라 우리가 임의로 정해도 상관없다(경로만 정확하면 됨)
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue';
import ListBinding from '../views/ListBinding.vue';
import IFBinding from '../views/IFBinding.vue'; 
import OnEvent from '../views/OnEvent.vue'; 
import Options from '../views/Options.vue';


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
  },
  {
    path:'/ListBinding', 
    name: 'ListBinding',
    component : ListBinding
   },
   {
    path:'/ifBinding', 
    name: 'ifBinding',
    component : IFBinding
   },
   {
    path:'/OnEvent', 
    name: 'OnEvent',
    component : OnEvent
   },
   {
    path:'/options', 
    name: 'options',
    component : Options
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
