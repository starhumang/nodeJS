<template>
    <div class="container">
        <div class="row">
            <table class="table"><!--정보 나올 테이블-->
                <tr>
                    <th class="text-right table-primary">No</th>
                    <td class="text-center">
                        <input readonly type="text" v-model="userInfo.user_no">
                        <!--객체선언을 먼저 하고 그 객체를 기준으로 각 필드를 연결하는게 가장 좋음-->
                    </td>
                </tr>
                 <tr>
                    <th class="text-right table-primary">Id</th>
                    <td class="text-center">
                        <input readonly type="text" v-model="userInfo.user_id">
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
         <div class="row"><!--수정저장 버튼 -->
            <button class="btn btn-success" @click="updateInfo">변경내용 저장하기</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return{
            searchNo : '',
            userInfo : {
                // user_no : 0,
                // user_id : '',
                // user_pwd : '',
                // user_name : '',
                // user_gender : null,
                // user_age : 0,
                // join_date : null
            }
        }
    },
    created(){
        this.searchNo = this.$route.query.userNo;
        this.getUserInfo();
    },
    methods :{
        //기존 유저정보 그대로 가져오기
        async getUserInfo(){
            let result = await axios.get(`/api/users/${this.searchNo}`)
                                    .catch((err) => console.log(err));
            this.userInfo = result.data;
            //배열이 아니고 날짜하나 수정할꺼면 아래처럼 해도 됨
            let newDate = this.dataFormat(this.userInfo.join_date, 'yyyy-MM-dd')
            this.userInfo.join_date = newDate;
        },
        
        async updateInfo(){

            let data ={
                //내가현재 쥐고있는 데이터를 통째로 넣기
                //원래는 primary key인 user_id는 값을 덮어씌우거나 바꾸면 안되지만
                //지금은 readonly를 걸어놨기 때문에 덮어씌워봤자 같은 값이니 가능
                param : this.userInfo
            };
            let result = await axios.put(`/api/users/${this.userInfo.user_no}`,data)
                                    .catch((err)=> console.log(err));
            
            let count = result.data.changedRows;
            if(count == 0){
                    alert(`정상적으로 수정되지 않았습니다. \n메세지를 확인해주세요.\n${result.data}`)
            }else{
                    alert('정상적으로 수정되었습니다.')
                    this.$router.push({name : 'userList'});
            }       
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
}
</script>