import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 두가지로 컴포넌트를 이용할 수 있는데 라우터를 이용하면 상위 컴포넌트를 움직여서 페이지를 바꿀 수 있는거고(전체 변경은 라우터)
// 다른 하나는 하위 컴포넌트에서 바꿔서 페이지를 바꿀 수 있다.(페이지 안 내부변경은 컴포넌트)

createApp(App).use(router).mount('#app')
