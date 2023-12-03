<template>
    <div class="container">
        <table class="table">
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
                <tr :key="idx" v-for="(user, idx) in userList">
                    <td>{{user.user_no}}</td>
                    <td>{{user.user_id}}</td>
                    <td>{{user.user_name}}</td>
                    <td>{{user.user_gender}}</td>
                    <td>{{user.user_date}}</td>
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


   computed :{
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
        let result = await axios.get('/t_users')//경로지정(패치랑 방식 똑같음)/프록시 서버에 등록했기에 경로의 앞부분을 적지 않아도 됨
                    .catch(err =>{
                        console.log(err);
                    });
        let list = result.data;//저 주소값안의 데이터만 list안에 값으로 받아오겠다.(객체자체만 받아올거면 .data지워야 함)
        this.userList = list;
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