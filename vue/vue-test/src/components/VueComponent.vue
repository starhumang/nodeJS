<!-- template, script, style로 분리해서 정리해두지만 전부 한 객체에 대한 것이다-->

<template>
    <div>
        <label><input type="text" v-model="msg"></label>
        <!-- v-model = value 속성과 vue가 가진 프로퍼티를 바인딩시켜주는 디렉티브(양방향)-->
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name : 'VueComponent',//컴포넌트 이름
        data(){
            return{
                msg : '2023-11-30'
            }
        }
    }
</script>

<style scoped>
    p{
        background-color: bisque;
    }
</style>
