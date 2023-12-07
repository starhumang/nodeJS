<template>
    <div class = "container" >
        <div class= "row">
            <table class = "table">
                <tr>
                    <th class="text-right table primary"> 번호</th>
                    <td class="text-center"> {{empInfo.emp_no}} </td>
                </tr>

                 <tr>
                    <th class="text-right table primary"> 이름 </th>
                    <td class="text-center"> {{`${empInfo.first_name}, ${empInfo.last_name}`}} </td>
                </tr>

                <tr>
                    <th class="text-right table primary"> 성별 </th>
                    <td class="text-center"> {{ empInfo.gender}} </td>
                </tr>

                 <tr>
                    <th class="text-right table primary"> 고용일자 </th>
                    <td class="text-center"> {{$dataFormat(empInfo.hire_date, 'yyyy-MM-dd')}} </td>
                </tr>

                 <tr>
                    <th class="text-right table primary"> 급여 </th>
                    <td class="text-center"> {{empInfo.salary }} </td>
                </tr>

                 <tr>
                    <th class="text-right table primary"> 부서번호</th>
                    <td class="text-center"> {{empInfo.dept_no }} </td>
                </tr>

                 <tr>
                    <th class="text-right table primary"> 부서이름</th>
                    <td class="text-center"> {{empInfo.dept_name}} </td>
                </tr>


            </table>
        </div>

    <div class="row">
        <button class="btn btn-info" @click="goToUpdate(empInfo.emp_no)"> 수정하기</button>
        <router-link to="/empList" class="btn btn-success">목록으로</router-link>
        <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)"> 삭제하기 </button>
    </div>

    </div>
</template>

<script>
import axios from 'axios'; 

export default {
    data (){
        return{
            empInfo : {},
            searchNo : '' //
        }
    },

    created() {
        this.searchNo = this.$route.query.empNo;
        this.getEmpInfo();
    },

    methods : {
        async getEmpInfo(){
            let result = await axios.get(`/api/emps/${this.searchNo}`)
                            .catch(err => console.log(err));
            this.empInfo = result.data;
        },

        async getEmpUpdate(){
            this.$router.push({path:'/empForm', query : {empNo : empNo}})
        },

    //퇴사 일자 입력받아야하는 부분.. (ex. 모달창, alert창 띄워서 입력받으면 됨)
         async deleteInfo(empNo){
            //서버측에 요청할떄랑 같은 모습으로 넘기기! 
          const quit = prompt('퇴사일자를 입력해주세요');
          quit = this.$dataFormat(quit,'yyyy-mm-dd');
          console.log(quit)
            let data = {
                param : {
                    to_date : quit
                }
            }

            let result = await axios.delete(`/api/emps/${empNo}`, { data : data})
                            .catch(err => console.log(err));

            let count = result.data.affectedRows;
            if( count == 0) {
                alert('정상적으로 삭제되지 않았습니다.');
            }else{
                alert('정상적으로 삭제되었습니다. ');
                this.$router.push({name : 'empList'}); 
            }
        },
          goToUpdate(no){
            console.log(no);
            this.$router.push({name : 'empForm', query : {empNo : no}});
        },
    }
}

</script>