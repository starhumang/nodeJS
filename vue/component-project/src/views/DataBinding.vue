<template>
    <div>
        <h1>{{title + '!!!'}}</h1><!--{{}}는 이중수염이라고 불리고 태그 사이에 이중으로 중괄호를 쓰게되면 여기는 자바스크립트 영역이 된다. -->
        <h2 v-bind:name="'sample'" v-text="title + '!!!'" /><!-- 보통은 이렇게 처리함, v-bind디렉토리가 사용되어도 자바스크립트 영역이다.-->
        <p v-html="tagList"/><!-- html을 직접 제어하는 명령어/가능하면 쓰지 말것-->
        <p v-text="tagList"/><!-- 태그를 인식하게 함(문자열)/ 이건 좀 자주 씀 -->
        <hr>
        <input type="text" v-model="vauleModel">
        <p>{{typeof vauleModel}}</p>

        <!-- (model디렉티브 3가지 = lazy, trim, number)  -->
        <input type ="number" v-model.lazy="numberModel"><!--lazy는 실시간반영을 시키는것이다(자동반영을 방지)-->
        <p>{{numberModel + 10000}}</p>
        <p>{{typeof numberModel}}</p>
        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{selectModel}}</p>
        <textarea v-model="textModel"/>
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부"><!--value를 따로 적지 않으면 결과값이 true, false로 나온다-->
        <p>{{chData}}</p>
        <div>
            <!--내일마저-->
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <p>{{city}}</p>
        </div>
    </div>
</template>

<script>
    //이 컴포넌트가 가지고 있는 속성(property)들을 이 파일이 실행될때 내보내겠다.
    export default{
        data(){

            return{//여기 내가 사용하고자 하는 변수들을 다 정의하면 됨
             title : 'Hello, Vue.js',//null이나 공백을 넣어도 됨
             tagList : '<strong>Today is... </strong>',
             vauleModel : 'Korea',
             numberModel : '0',
             selectModel : 'winter',
             textModel : '백견불여일타',
             chData : '',
             city :''
            }
        }
    }
</script>
