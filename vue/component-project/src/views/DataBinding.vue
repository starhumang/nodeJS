<template>
    <div>
        <h1>{{title + '!!!'}}</h1><!--{{}}는 이중수염이라고 불리고 태그 사이에 이중으로 중괄호를 쓰게되면 여기는 자바스크립트 영역이 된다. -->
        <h2 v-bind:name="'sample'" v-text="title + '!!!'" /><!-- 보통은 이렇게 처리함, v-bind디렉토리(속성값부여)가 사용되어도 자바스크립트 영역이다.-->
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
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <p>{{city}}</p>
        </div>
        <div>
            <input type="radio" value= "독서" v-model="hobby">독서
            <input type="radio" value= "영화" v-model="hobby">영화
            <input type="radio" value= "운동" v-model="hobby">운동
            <p>{{hobby}}</p>
        </div>        
         <hr>


        <img v-bind:style="styleData" v-bind:src="imgUrl">
        <img v-bind:style="[backSetting, addStyle]" v-bind:src="imgUrl">
        <!--방법1-->
        <div class ="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}"> <!--클래스 하나 더 추가 여기에 data를 넣음으로서 true of false로 실행시킬 수 있다.-->
             Class Binding First 
        </div>
        <!--방법2-->
        <div class = "container" v-bind:class= "myClass"><!--클래스 값 자체를 제어하려면 이 방법-->
            Class Binding First
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
             city :[], // 체크박스의 값이 여러개일때 배열로 값을 줘야한다.
             hobby : '운동',
             imgUrl: 'https://kr.vuejs.org/images/logo.png',// 이렇게 직접 이미지주소를 넣어주거나 이미지를 다운받아서 해당 경로를 열어줌
             
             //아래 두가지 방법중에 styleData처럼 객체로 만들어서 한번에 처리한는걸 추천
             styleData: {
                //여기 안에서는 하이폰 대신 카멜표기법 사용
                backgroundColor : 'skyblue',
                width : '200px',
             },
             backSetting : 'backgrond-color:skyblue; width:200px',
             addStyle : 'height: 200px',
             isActive : false,
            //  hasError : !this.isActive //이렇게 반대값을 넣어도 되지만 완전히 반대되는걸 하려면
            myClass : 'active'
            }
        },
        //data나 computed는 내부적으로 가지고 있는 hasError는 같으나 data에선 복사해서 사용하는 기능이고, computed는 계속 바꾸는 것이다.
        //초기값을 주는게 아니라 계속 연결성을 가지고 바꾸고 싶다면 data가 아니라 computed로 설정을 해야한다.
        computed : {
            hasError(){
                return !this.isActive;
            }
        }
    }
</script>
<style scoped>
    .container{
        width : 100%;
        height : 200px;
    }

    .active{
        background-color: yellow;
        font-weight: bold;
    }

    .text-red{
        color : red;
    }


</style>
