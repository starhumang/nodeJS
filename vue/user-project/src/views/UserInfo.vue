<template>
    <div class="container">
        <div class="row">
            <table class="table"><!--정보 나올 테이블-->
                <tr>
                    <th class="text-right table-primary">No</th>
                    <td class="text-center">{{userInfo.user_no}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">Id</th>
                    <td class="text-center">{{userInfo.user_id}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">{{userInfo.user_pwd}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">{{userInfo.user_name}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">{{userGender}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">{{userInfo.user_age}}</td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center">{{joinDate}}</td>
                </tr>
            </table>
        </div>
         <div class="row"><!--목록, 수정, 삭제 버튼 -->
            <button @click="goToUserUpdate(userInfo.user_no)" class="btn btn-info">수정하기</button>
            <router-link to="/" class="btn btn-success">목록으로</router-link>
            <!--라우터 링크 태그를 따로 설정하지 않으면 a태그가 기본-->
            <!-- to는 path-->
            <button class="btn btn-warning" @click="deleteInfo(userInfo.user_no)">삭제하기</button>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            searchNo : '',
            userInfo : {}
        }
    },
    computed :{
        userGender(){
            return this.userInfo.user_gender =="M" ? '남' : '여';
        },
        joinDate(){
            let date = new Date(this.userInfo.join_date);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);//어떤값을 가지든 무조건 2자리로 출력
            let day = ('0' + date.getDate()).slice(-2);

        return `${year}년${month}월${day}일`;
        }

    },
    created(){
        this.searchNo= this.$route.query.userNo;
        //라우터한테 넘겨줄때 쿼리를 사용해서(UserList.vue의 goToUserInfo함수부분) 여기도 쿼리(router는 목록 route는 지금 실행되고 있는 정보들)
        //즉 요청은 router 결과를 들고올때는 route사용
        this.getUserInfo();
    },
    methods : {
        async getUserInfo(){
            let result = await axios.get(`/api/users/${this.searchNo}`)
                                    .catch(err => console.log(err));

            this.userInfo = result.data;//정상적으로 작동하면 위의 data의 userInfo에 정보가 담김
            //axios를 적고 get, put, post, delete 중 하나 호출
            //cors를 허용하지 않는 서버에는 미리 만들어둔(vue.config.js) /api붙임
        },
        async deleteInfo(userNo){
            let result = await axios.delete(`/api/users/${userNo}`)
                                    .catch(err=>console.log(err));
            console.log(result.data);

            //실행되고 나서 sql에서 넘어오는건 여러가지 항목과 값 즉 배열(예를들어 postman에서 처리하고 난 결과)
            //java에선 실행되고 나서 insert, update, delete일 경울 resultType이 1(int값)로 넘어왔음
            let count = result.data.affectedRows;//affectedRows얘가 삭제되었을때 값이 들어오는 항목
            if(count == 0){
                alert('정상적으로 삭제되지 않았습니다.')
            }else{
                alert('정상적으로 삭제되었습니다.')
                this.$router.push({name : 'userList'});//이번엔 path아니고 name으로 라우터를 찾아봄(path가 기본 필수값, name은 선택해서 하기)
            }
        },
        goToUserUpdate(no){
            console.log(no);
            this.$router.push({path : '/userUpdate', query : {userNo : no}});
            //정보를 줄때는 router 정보를 받을때는 route
        }
    }
}
</script>