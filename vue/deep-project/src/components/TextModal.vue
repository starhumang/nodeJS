<template>
    <Layout>
        <!-- ModalLayout.vue에 적어놓은 slot개수만큼 템플릿 만들어야 함 -->
        <template v-slot:header><!--얘네가 해당 슬롯을 대체한다.-->
            <h1>팝업제목</h1>
        </template>
        <template v-slot:default><!-- 이름이 없는 슬롯 -->
            <p>팝업컨텐츠 1</p>
            <p>팝업컨텐츠 2</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </Layout>
</template>
<script>
import Layout from './ModalLayout.vue'

export default {
    components :{
        Layout
        //자식태그를 불러와 안에 대체하고싶은 내용을 작성
    }
}
</script>