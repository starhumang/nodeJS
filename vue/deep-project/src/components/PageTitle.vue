<template>
    <h2>{{title}}</h2>
</template>

<script>
//PageTitle.vue는 자식컴포넌트 부모가 주는 타이틀을 넘겨받는 실험중
export default{
    props : ['title']//유효성 검사를 하지 않고 부모가 정해준 이름 그대로 받겠다.(넘어오는 데이터 그대로 받겠다.)
}
</script>