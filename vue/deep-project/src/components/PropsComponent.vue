<template>
    <div>
        <!--PageTitle만 들어가도 되고 전해줄 값이 있으면 뒤에 title ="Hello, world!"를 추가해준다(지금은 정적데이터전달) -->
        <PageTitle title ="Hello, world!"/>
         

        <!-- 개별로 넘기는 방법 -->
        <!-- <PageContent :title="header" v-bind:count="10" 
                                    :writer="['ADward']" 
                                    :regdate="'2023-12-05'" 
                                    :content="{ first : 'Node.js', second: 'Vue.js'}"/> -->
        <!--count를 숫자로 인식시키려면 v-bind가 붙어야 한다.-->
       <!--
        - 정적데이터 =  디렉티브 없이 props에 값을 전달(모든 값이 문자열)
        - 동적데이터 = v-bind 디렉티브(이게 붙어야지 자바스크립트로 인식함)로 보내야함
        - 숫자(int), boolean, Array, Object, 객체의 속성(properties) =  v-bind 디렉티브
        -->


        <!-- 일괄로 넘기는 방법 -->
        <PageContent v-bind="info" @update-info="handler"/>
        <!--@update-info 이벤트를 통해서 매개변수는 없지만 정보는 넘어옴 $emit사용-->


        <!-- $refs란
        부모컴포넌트에서 자식컴포넌트의 이벤트를 직접(강제로) 발생시키거나 (지금 바로 아래 이벤트 생성한거)
        직접 접근해서 자식컴포넌트의 함수를 사용하거나 값을 바꿈(동기화) ( 아래 메소드의 childHandler 참고)-->
        <RefCom ref="child"/>
        <button @click="childHandler">자식 제어</button>
        <!--@childHandler 이벤트를 직접발생시킴 $refs사용-->

    </div>
</template>


<script>
//PropsComponent.vue는 부모컴포넌트
import PageTitle from './PageTitle.vue'
import PageContent from './PageContent.vue'
import RefCom from './RefComponent.vue'
//import로 자식 컴포넌트 정보 들고 옴

//그리고 아래에 자식 컴포넌트를 넣음
export default{
    data(){
        return{
            header : '',
            //일괄로 넘길시 객체로 정의내려서 안에 내용 적어야 함
            info : {
                title : 'Today is',
                count : 10,
                writer : 'Adward',
                regdate : '2023-12-05',
                content : '내용없음'
            }
        }
       
    },
    //자식컴포넌트 추가 넣은 후 위 템플릿에 추가함
    components :{
        PageTitle,
        PageContent,
        RefCom
    },
    methods : {
        handler(value){
            alert(value);
        },
        childHandler(){
            // this.$refs.child.content = '부모가 보내는 데이터'; // plusCount()의 alert창 맞게 뜨는지 확인

            //아래 3가지는 결론만 놓고보면 다 똑같은 기능(100씩 추가됨)
            // this.$refs.child.content = 100;//속성을 직접 주는게 아니라 refs속성으로 직접 자식쪽으로 접근해서 값을 줌
            // this.$refs.child.plusCount();//자식컴포넌트에 존재하는 메소드 직접 불러오기도 가능
            this.$refs.child.$refs.cBtn.click();// 자식형태가 아닌 일반 html 태그에서도 ref이름을 부여하면 사용 가능함
        }
    }
}
</script>