<template>
  <div>
    <Header />
    <router-view :key="$route.fullPath"/> <!--라우터가 호출된 모든 정보를 들고있음 페이지 리로드?-->
    <!-- "$route.fullPath"는 
     key를 통해 경로 개체 속성을 강제로 연결시켜주는건데,
     보여지는 화면에 쿼리 및 해시가 포함된 전체 URL을 연결하여 쿼리스트링이 변경될때마다,
     그러니깐 탐색하는 이벤트가 발생할때 마다 페이지를 다시 리로드해서 노출시키는 방법이다. -->

    <!-- "$route.path"는
      절대 경로로 확인되는 경로를 다시 연결하여 노출시키는 방법이다 -->

    <!-- 둘의 차이점 = path는 패스베리어블이 변경될때마다 리로드를 하고, fullPath는 쿼리가 실행될때마다 리로드가 된다는 점같다 -->

    <Footer />
  </div>
</template>
<script>
  import Header from './layouts/Header.vue';
  import Footer from './layouts/Footer.vue';

  export default {
    components  : { Header, Footer }
  }
</script>
