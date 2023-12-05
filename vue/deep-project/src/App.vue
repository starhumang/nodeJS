<template>
  <div>
    <input type ="text" v-model.lazy="selected" v-focus="isFocused"/><!--얘는 정적 = 전부 문자열로 읽어들임-->
    <component v-bind:is="selected"></component><!-- 얘는 동적-->
    <!--//3.찾아서 바꿈 is라는 속성이 적어놓은selected라는 이름을 받아서 
    현재 위치한 컴포넌트에 검색해서 찾은(PropsCom) 컴포넌트를 넣음-->
  </div>
</template>

<script>
//부모 컴포넌트 PropsCom
import PropsCom from './components/PropsComponent.vue';
import SlotCom from './components/TextModal.vue';//ModalLayout.vue를 대체시킨 TextModal.vue를 불러와야함
import Composition from './components/CompositionInterface.vue';
import StoreCom from './components/StoreComponent.vue';

export default{
  name : 'app',
  data(){
    return{
      selected : 'PropsCom',//1. 입력
      isFocused : false
    }
  },
  components : {
    PropsCom,//2. 같은걸 검색
    SlotCom, // = 'SlotCom' : {} 이것과 같음
    Composition,
    StoreCom
  }
}
</script>