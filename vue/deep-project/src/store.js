// Vuex 

import {createStore} from 'vuex';
// createPersistedState는 새로고침할때마다 데이터가 날아가지 않게 하기위해 로컬저장소에 저장할 수 있게 해줌
import createPersistedState from 'vuex-persistedstate';

//실제로 내부에 넣고자 하는 저장소 만들기
const store = createStore({
    state(){ // 저장소에 저장되고 컴포넌트에서 공유되는 데이터
        return{
            cart : [{
                product_id : 1,
                product_name :"아이폰 거치대",
                category : "A"
            }],
            count : 0
        }
    },
    getters : { // 자체적으로 정보를 들고 있지 않고 메소드 실행시 update시킴(computed랑 비슷함)
        cartCount : (state)=>{
            return state.cart.length;
        }
    },
    mutations : {
        increment(state){//이 메소드를 수행하면 특성한 값에 대해서만 update가 진행됨(동기식으로 동작 : 차례대로)
            state.count++
        },
        addProduct(state, info){
            state.cart.push(info);
        }
        
    },
    actions : {//mutations가 가지고 있는 여러개의 함수를 순차적으로 호출할 수 있음
        addProduct(context, info){//두번째 매개변수 존재(store의 인스턴스, 컴포넌트가 넘기는 데이터)(비동기로 동작 : 동시에)
            setTimeout(()=>{
                context.commit('addProduct', info);
            }, 1000);
        }
    },
    plugins :[
        //저장소가 들고 있는 정보를 다 로컬스토리지에 추가할 경우 배열안에 적어준다.

        //createPersistedState()//종류상관없이 모두 저장할 때
        createPersistedState({
            paths : ['cart'],//어떤걸 지정해서 저장할 때(다른 정보들은 새로고침할때마다 사라짐)
        })
    ]
});

export default store;