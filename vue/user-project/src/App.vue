<template>
<div>
  <Header /><!--컴포넌트에 등록된 것은 그냥 하나의 태그처럼 사용해도 된다-->
  <router-view/>
</div>
</template>

<script>
import Header from './layouts/Header.vue'

export default {
  components : {
    Header : Header
    //전에도 적었지만 키와 값이 같으면 그냥 생략해서 둘 중 하나만 적어도 된다.
  }
}
</script>
