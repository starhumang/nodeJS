<template>
    <table>
        <tr>
            <!--mixin-->
            {{$dateFormat('2023/12/05', 'yyyy-MM-dd')}}
        </tr>
        <tr>
            <th>제목</th>
            <td>{{title}}</td>
            <th>조회수</th>
            <td>{{readInfo}}</td> <!--1. 이걸 $emit(부모에게 이벤트방식으로 넘김)으로 처리해봄-->
        </tr>
        <tr>
            <th>작성자</th>
            <td>{{writer}}</td>
            <th>작성일자</th>
            <td>{{regdate}}</td>
        </tr>
        <tr>
            <th>내용</th>
            <td>{{content}}</td>
        </tr>
        <tr>
            <button @click="updateInfo">업데이트</button> <!--2. 버튼을 사용해서 emit이벤트를 넘길꺼임-->
        </tr>
    </table>
</template>
<script>
// import AppMixin from '../mixin.js';

export default {
        // mixins : [AppMixin],//컴포넌트 하나에 개별적으로 mixin을 추가함/ 여기에 추가했으니 template에서 mixin에서 정의한 함수 사용가능


    // props : ['title', 'count', 'writer', 'regdate', 'content'] //타입지정안하고 받는것
    //아래는 조건을 걸어서 받는것
    props : {
        title : String, //타입만 정의하는 경우에는 이렇게만 하면 됨
        count : { //타입과 여러 옵션을 같이 정의하는 경우에는 객체형태로 들어가야함
            type : Number,
            default : 0
            },
        writer : {
            type : [String, Object], //2개의 타입이 허용되는 경우에는 배열로 정의

            default : function(){//객체랑 배열같은 경우에는 함수형태가 되어주고 리턴되는 값이 객체 혹은 배열형태를 띄어야 한다.
                return {first : 'Adward', second : 'MiMi'}
            }
        },
        regdate : {
            required : true, //무조건 들어와야하는값, 안 넘어오면 안됨(요구한거임)
            validator : function(value){
                let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/ //0~9까지 아무거나 숫자를 넣어줘야함 (yyyy-MM-dd)
                return !(value.match(format)==null);
            }
        },
        content : String 
    },
    computed : {
        //3. 조회수를 함수로 만들었음(computed안에 만들어서 자동으로 항상 업데이트됨)
        readInfo(){
            return this.count +1;
        }
    },

    /*
    $emit()란
    자식 컴포넌트에서 부모컴포넌트로 이벤트를 보내서 
    부모컴포넌트에서 그 값(이벤트)을 사용할 수 있게 함
    방법은 이벤트랑 watch 2가지 방법이 있음
    */

    methods : {
        updateInfo(){//$emit 방법 1 : 강제로 특정 이벤트를 발생시키는 형식(버튼 눌렀을때)
            this.$emit('update-info', this.readInfo);//이벤트 이름, 실행되는 함수 PropsComponent.vue의 템플릿에 이벤트로 들어감
        }
    },
    watch : {
        readInfo(){//$emit 방법2 : 특정한 프로퍼티의 값을 감지해서 emit을 이용해서 실시간으로 부모에게 바뀐값을 업데이트(데이터전달) 시킴
            this.$emit('update-info', this.readInfo);
        }
    }
}
</script>
