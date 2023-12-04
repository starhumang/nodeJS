<template>
    <div class="container">
        <table class="table">
            <caption>Total : {{count}}</caption> <!--총 몇개인지 보려고-->
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(user, idx) in userList" @click="goToUserInfo(user.user_no)" > 
                    <!--클릭이벤트로 tr에 있는 정보중에서 user.id의 정보를 넘겨서 개별조회(goToUserInfo)에 사용할거임 -->
                    <td>{{user.user_no}}</td>
                    <td>{{user.user_id}}</td>
                    <td>{{user.user_name}}</td>
                    <td>{{user.user_gender}}</td>
                    <td>{{dataFormat(user.join_date, 'yyyy년MM월dd일')}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
   data(){
    return{
        userList : []//리스트니까 배열타입
    }
   },


   computed :{//수정되면 안되는 데이터들을 의미를 부여해서 한번더 랩핑함
        count(){
            return this.userList.length;//배열의 길이라 별 의미는 없지만 우리가 의미를 부여할거임
        }
   },


   created(){//라우터가 넘겨준 데이터를 받아오는식으로 값을 다 가져와서 여기서 다룸
    //해당 컴포넌트가 초기화 할 데이터관련 진행
    this.getUserList()//메소드가 실제로 실행될 공간(메소드를 사용하려면 this.메소드 이렇게 해야 찾아옴)
   },


   methods : {//비동기 통신이라 async, await사용해야함
    async getUserList(){
        let result = await axios.get('/api/users')//경로지정(패치랑 방식 똑같음)/프록시 서버에 등록했기에 경로의 앞부분을 적지 않아도 됨
                    .catch(err =>{
                        console.log(err);
                    });
        let list = result.data;//저 주소값안의 데이터만 list안에 값으로 받아오겠다.(객체자체만 받아올거면 .data지워야 함)
        this.userList = list;
    },

    //1. 라우터 링크를 사용하지 않고 라우터자체를 불러서 개별조회하기
    goToUserInfo(no){
        console.log(no);
        this.$router.push({ path : '/userInfo', query : { userNo : no } });//객체를 기반으로 키 : 값이 넘어간다
        // push( {패스혹은 이름, 쿼리 혹은 파람즈})
        // name : route로 등록할 때 사용한 name 속성
        // params : path속성이 '/target/:id'일때 {'id': 100 }이런식으로 값을 넘겨야함
    },
    dataFormat(value, format){//날짜를 yyyy년MM월dd일로 변경하기
        let date = new Date(value);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);//어떤값을 가지든 무조건 2자리로 출력
        let day = ('0' + date.getDate()).slice(-2);

        //-를 쓰던 .을 사용하던 그냥 두번째로 format만 넘겨주면 됨 위에 tbody참고
        let result = format.replace('yyyy',year)
                            .replace('MM', month)
                            .replace('dd', day);


        // return `${year}년${month}월${day}일`;
        return result;
    }
   }

    //axios에서 프록시도 사용가능하다
    //axios 예제 - (axios(config))

    //1. POST 요청 전송
    // axios({
    //   method: 'post',
    //   url: '/user/12345',
    //   data: {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   }
    // });


    //2. node.js에서 GET 요청으로 원격 이미지 가져오기
    // axios({
    //   method: 'get',
    //   url: 'http://bit.ly/2mTM3nY',
    //   responseType: 'stream'
    // })
    //   .then(function (response) {
    //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //   });

    // GET 요청 전송 (기본값) - (axios(url[, config]))
    // axios('/user/12345');
   
}
</script>