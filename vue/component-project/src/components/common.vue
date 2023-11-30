<template>
    <div></div>
</template>

<script>
    export default{//이 컴포넌트가 가지고 있는 속성들을 이 파일이 실행될때 내보내겠다.
    components : [],//여기 속성에 등록한 컴포넌트만 사용가능(여러개의 자식 컴포넌트가 존재할 수 있기 때문에 배열로처리)
    data(){ //실제 컴포넌트가 다루는 데이터
        return{
            // a: 1,
            today : new Date()
        }
    },


    //아래는 속성임(computed, methods, watch) -> 얘네가 들고있는 내용을 속성(property)라고 함

    //연산한 결과를 정의
    computed : { //값을 다룸1, 여기서 정의된 property는 수정할 수 없음(여기 내용을 수정하려면 위의 data를 고쳐야 함)
        AfterYear(){
            return this.today.setFullYear(this.today.getFullYear() + 1);
        }
    },

    methods : { //값을 다룸2, 이벤트처리핸들러, 기능을 처리하는 함수는 여기서 넣으면 됨
        test(){
            console.log(this.$data);
            //이 객체의 필드에 직접적으로 접근하면 this.data가 맞으나 메소드이고, 간접 접근이기때문에 $를 붙여야 함
            //ex)
            //console.log(this.a) // 1
            //console.log(this.$data) // { a: 1 }
        }
    },

    //내가 해야하는 행동들을 정의
    watch : {},


    //아래2개는(created, mounted) vue.js책 91p참고
    created() {},// 인스턴스가 모든 상태관련 옵션처리를 완료된 후에 발생
    //(computed, methods,watch에 접속가능)
    //(컴포넌트 초기에 외부에서 받아온 값들로 data를 세팅, 이벤트 리스너를 선언)
    
    mounted() {}// 가상DOM의 내용이 실제DOM에 부착되고 난 이후에 실행
    //(인스턴스가 완전히 완성되어서 모든것(data, computed, methods,watch)에 접속가능)
    //자식의 mounted 후 부모의 컴포넌트가 mounted된다.
    }
</script>

<style>

</style>
