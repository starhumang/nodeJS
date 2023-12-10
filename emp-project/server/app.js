//mysql 기본세팅(mysql.env) 4
require('dotenv').config({path : './db/mysql.env'})
const mysql = require('./db.js');

//express서버 기본세팅 1
const express = require('express');
const app = express();


//express서버 기본세팅 2
app.use(express.json({
    limit : '50mb'
}));//들어오는 데이터 50메가바이트까지

//express서버 기본세팅 3
app.listen(3000, ()=>{
    console.log('Server Start, http://localhost:3000');
})

//라우팅
//전체조회
app.get('/emps', async(req, res)=>{
    let list = await mysql.query('employeesList');
    res.send(list);
});

//부서조회
app.get('/depts', async(req, res)=>{
    let list = await mysql.query('deptInsert');
    res.send(list);
});

//한건조회
app.get('/emps/:no', async(req, res)=>{
    let data = req.params.no;
    let result = await mysql.query('employeesInfo', data);
    res.send(result[0]);
})

const empTable =['emp_no', 'first_name','last_name','gender','hire_date'];
const deptEmpTable =['emp_no','dept_no','from_date','to_date'];
const salariesTable =['emp_no','salary','from_date','to_date'];

//사원등록 [ 방법2 = for문 사용 ]
//(sql.js 참고)
//set 뒤에 정확히 컬럼명이 명시되었는데 하나만 물으면 그냥 데이터 그대로 던져주기(방법1)
//set 뒤에 정확히 컬럼명이 명시되어있고 하나만 묻는게 아니면 무조건 배열형태로(방법2사용)
//set 뒤에 명시된 컬럼명이 없고 그냥 SET ?면 객체형태로 body에 적어 보냄(방법2사용)
//sql문에 적은 ?순서대로 적어야함 아니면 데이터 섞임
app.post('/emps', async(req, res)=>{
    let empInfo = req.body.param;
    // let result = [];//이 배열안에 3개의 insert를 넣으면 postman에서 3개의 결과 전부 확인 가능

    let empData = {};
    //column이 empTable 안에있는 값!(ex 'first_name')
    for(let column of empTable){ // let column = 'emp_no'
        let value = empInfo[column]; // let value = empInfo['emp_no']
        if(value == '') continue;//정확하게 정보가 넘어온다는 가정하에는 없어도 됨
        empData[column] = value; // empData['emp_no'] = value;
    }
    let result = await mysql.query('employeesInsert', empData);
    
    let deptEmpData = []
    for(let column of deptEmpTable){
        let value = empInfo[column];
        if(value == '') continue;
        deptEmpData.push(value);
    }
    result = await mysql.query('deptInsert', deptEmpData);

    let salData={}
    for(let column of salariesTable){
        let value = empInfo[column];
        if(value == '') continue;
        salData[column] = value;
    }
    salData.to_date = '9999-01-01';
    result = await mysql.query('salariesInsert', salData);
    
    res.send(result);
    //res.end();//통신 끊어주기
})

//사원수정 [ 방법1 = 직접입력 ]
app.put('/emps/:no', async(req, res)=>{
    let data = [req.body.first_name,
                req.body.last_name,
                req.body.gender,
                req.body.hire_date,
                req.params.no];
    let result = await mysql.query('employeesUpdate', data);
    res.send(result);
})

//사원삭제(진짜 삭제되는게 아니라 사용자에게 더이상 조회되지 않음)
//화면입장에서는 삭제라서 delete사용
app.delete('/emps/:no', async(req, res) =>{
    //delete는 원래 body허용 안됨(사실 되긴되는데 허용 몇개 안됨)
    let data = [req.body.param.to_date, req.params.no];
    let result = await mysql.query('employeesDelete', data);
    res.send(result);
});

//<< 내가 생각한거 >>
// //사원삭제(진짜 삭제되는게 아니라 사용자에게 더이상 조회되지 않음)
// app.put('/emps/delete/:no', async(req, res)=>{
//     let data = [req.body.to_date, req.params.no];
//     let result = await mysql.query('employeesDelete', data);
//     res.send(result);
// })


