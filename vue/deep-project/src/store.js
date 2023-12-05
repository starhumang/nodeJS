// Vuex 

import {createStore} from 'vuex';

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
    // actions : {
    //     addProduct(state, info){//두번째 매개변수 존재(state 자체값, 컴포넌트가 넘기는 데이터)(비동기로 동작 : 동시에)

    //     }
    // }
});

export default store;