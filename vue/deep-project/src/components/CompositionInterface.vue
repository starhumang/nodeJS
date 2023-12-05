<template>
    <div>
        <h3>{{title}}</h3>
        <p>저자 : {{author.name}}</p>
        <template v-if="isWrited">
            <p :key="idx" v-for="(info, idx) in author.books">
                {{info}}
            </p>
        </template>
        <p v-else>아직 출간한 책이 없습니다.</p>
        <button @click="plusBookInfo">정보 업데이트</button>
    </div>
</template>

<script setup>// 객체말고 컴포지션 방식 사용해보는 중 1. setup이라고 붙임
import {reactive, ref, computed, watch} from 'vue'//여기에 선언되는 모든 함수는 vue가 가진 함수
// data 옵션 : reactive, ref
// computed 옵션 : computed
// watch 옵션 : watch
// methods 옵션 : 내부에 함수로 선언


const author = reactive({ // 반응형(객체 혹은 배열타입만 내부에 선언가능)
    name : 'John Doe',
    books : [
        'Vue 2 - Advance Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
const title = ref('제목을 입력해주세요'); // title.value이런식으로 접근해서 사용할 수 있다.

const isWrited = computed(()=>{ //computed는 콜백함수로 넘겨줌
    return author.books.length > 0 ? 'Yes' : 'No';
});

watch(author.books, (info) =>{//(감시하고자 하는 대상, 콜백함수) watch는 특정한 변수의 값을 담는건 아님 
        console.log(info[info.length-1]);
});

const plusBookInfo = ()=>{ //2. 단순함수 선언하듯이 선언
    let info = 'Node.js - Javascript Runtime'
    author.books.push(info);
}
</script>

