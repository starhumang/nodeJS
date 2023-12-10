<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>성별</th>
                    <th>입사일자</th>
                    <th>급여</th>
                    <th>소속부서</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(emp, idx) in empList" @click="goToEmpInfo(emp.emp_no)">
                    <td>{{ `${emp.last_name} ${emp.first_name}`}}</td>
                    <td>{{emp.gender}}</td>
                    <td>{{$dataFormat(emp.hire_date,'yyyy-MM-dd')}}</td>
                    <td>{{emp.salary}}</td>
                    <td>{{emp.dept_name}}</td>
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
            empList :[]
        }
    },
    created(){
        this.getEmpList();
    },
    methods :{
        async getEmpList(){
            let result = await axios.get('/api/emps')//node쪽의 app.js랑 주소가 동일해야함
                        .catch(err=>{ console.log(err) });
            this.empList = result.data;
            // let list = result.data;
            // this.empList = list;
        },
        goToEmpInfo(no){
            console.log(no);
            this.$router.push({name : 'empInfo', query : {empNo : no}});
        },
    }

}
</script>