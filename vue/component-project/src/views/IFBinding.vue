<template>
<div>
    <!-- if랑 for문이랑 같이 쓰게된다면 if가 우선순위로 쓰인다.만약 for을 먼저 돌리고 싶으면 템플릿태그 안에 for문을 넣고 사용하기
    <template v-bind:key="idx" v-for="(item,idx) in items">
    <tr v-if="">
    </tr>
    </template> -->

    <input type="number" v-model="grade">
    <p v-if="grade >= 90">성적 : A</p>
    <p v-else-if="grade >=80">성적 : B</p>
    <p v-else-if="grade >=70">성적 : C</p>
    <!-- <p>================</p> 이렇게 중간에 태그가 들어가게 되면 if문에서 문법오류가 뜬다.-->
    <p v-else>성적 : D</p>
    <hr>
    <input type="checkbox" v-model="chData">선택
    <p v-show="chData">Hello, World!!</p>
</div>
</template>

<script>
export default{
    data(){
        return{
            grade:'',
            chData:''
        }
    }
}

</script>