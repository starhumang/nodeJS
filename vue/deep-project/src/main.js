import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixin.js'
import store from './store.js'

createApp(App).use(store)
              .mixin(mixin)
              .directive('focus',{
                mounted(el, binding, vnode, prevNode){
                    console.log('mounted',el, binding, vnode, prevNode);
                    if(binding.value){
                        el.focus();
                    }
                },
                updated(el, binding, vnode, prevNode){
                    console.log('mounted',el, binding, vnode, prevNode);
                    if(binding.value){
                        el.style.color='red';
                    }else{
                        el.style.color='black';
                    }
                }
              })
              .mount('#app')
//사이트가 동작하면서 컴포넌트에 관련된 mixin은 계속 실행된다.
