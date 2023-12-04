<template>
    <div class="container">
        <div class="row">
            <table class="table"><!--정보 나올 테이블-->
                 <tr>
                    <th class="text-right table-primary">Id</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_id">
                        <!--객체선언을 먼저 하고 그 객체를 기준으로 각 필드를 연결하는게 가장 좋음-->
                    </td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">
                          <input type="password" v-model="userInfo.user_pwd">
                    </td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">
                          <input type="text" v-model="userInfo.user_name">
                    </td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                        <!--얘는 둘 중 하나 고르는것이기 때문에 라디오 태그-->
                          <input type="radio" value="M" v-model="userInfo.user_gender">남자
                          <input type="radio" value="F" v-model="userInfo.user_gender">여자
                    </td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">
                          <input type="number" v-model="userInfo.user_age">
                    </td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center">
                          <input type="date" v-model="userInfo.join_date">
                    </td>
                </tr>
            </table>
        </div>
         <div class="row"><!--목록, 수정, 삭제 버튼 -->
            <button class="btn btn-success" @click="insertInfo">저장하기</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            //★ 아래 컬럼명 db랑 똑같이 적어야 함
            userInfo : {
                user_id : '',
                user_pwd : '',
                user_name : null,
                user_gender : null,
                user_age : 0,
                join_date : null //얘도 넘버처럼 자동부여되지만 정보를 가져와서 나중에 다른데에 쓰려고 적어놓음
            }
        }
    },
    created(){//입력시 입력날짜 자동으로 오늘날짜로 맞춰지게 하는것(여기서 이제 날짜 수정하는 형식으로)
        this.userInfo.join_date = this.getToday();
    },
    methods : {
        async insertInfo(){
            //if문으로 전체를 감싸기 싫어서 !붙여서 사용
            if(!this.validation()) return;

            //작성 예시 let result = await axios.post(``, data)
           let data = {//param에 userInfo라는 값이 들어가야 함
            param : this.userInfo
           };
           let result = await axios.post(`/api/users`, data)
                        .catch((err) => console.log(err));


           console.log(result.data);
           if(result.data.insertId == 0){
            alert(`정상적으로 등록되지 않았습니다. \n데이터를 확인해주세요. \n${result.data.message}`)
           }else{
            alert(`정상적으로 등록되었습니다. \nNO.${result.data.insertId}`)
           }

            // 어떤 아작스를 사용하던 패치형태가 맞음
            // (패치형태) 이 형태는 외워야함
            // let result = await axios(`/api/users`, {
            //     method : 'post',
            // 	headers :{
            // 	   'content-type' : 'application/json'
            // 	   },
            // 	data : JSON.stringify(data)
            // 	})
            //     .catch((err) => console.log(err));
        },
        getToday(){
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0' +(today.getMonth() +1)).slice(-2);
            let day =  ('0' +(today.getDate())).slice(-2);
            return `${year}-${month}-${day}`;
        },
        //유효성체크
        validation(){
            if(this.userInfo.user_id == ''){
                alert('아이디가 입력되지 않았습니다.');
                return false;
            }

             if(this.userInfo.user_pwd == ''){
                alert('비밀번호가 입력되지 않았습니다.');
                return false;
            }
            //위에 다 통과되고 나면 최소한의 정보는 다 받았다고 치고 true로 계속진행
            return true;
        }


           
    }
}
</script>