<template>
  <div>
    <input type ="text" v-model="selected"><!--얘는 정적 = 전부 문자열로 읽어들임-->
    <component v-bind:is="selected"></component><!-- 얘는 동적-->
    <!--://3.찾아서 바꿈 is라는 속성이 현재 위치한 컴포넌트에 검색해서 찾은(PropsCom) 컴포넌트를 넣음-->
  </div>
</template>

<script>
//부모 컴포넌트 PropsCom
import PropsCom from './components/PropsComponent.vue'

export default{
  name : 'app',
  data(){
    return{
      selected : 'PropsCom'//1. 입력
    }
  },
  components : {
    PropsCom//2. 같은걸 검색
  }
}
</script>