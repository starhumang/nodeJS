require('dotenv').config({path:'./db/mysql.env'});
const express = require('express');
const app = express();//인스턴스 생성
const mysql = require('./db.js');

//서버값 제한걸기
app.use(express.json({
    limit : '50mb'
}));

app.use(express.urlencoded({ extended : true}))
//dist
app.use(express.static('dist'));

//서버 열어줌
app.listen(5000, ()=>{
    console.log('Server start!')
    console.log('5000!')
});

//dist
app.get('/',(req, res)=>{
    console.log("dd")
    res.sendFile('/dist/index.html');
})

// 전체조회
app.get('/users', async(req, res)=>{
    console.log("users")
    let list = await mysql.query('userList');
    console.log("list : ", list)
    res.send(list);
});

//부분조회
app.get('/users/:no', async(req, res)=>{
    let data = req.params.no;
    let result = await mysql.query('userInfo', data);
    res.send(result[0]);
});

//입력
app.post('/users', async(req, res)=>{
    let data = req.body.param;
    let result = await mysql.query('userInsert', data);
    res.send(result);
});

//수정
app.put('/users/:no', async(req, res)=>{
    let datas = [req.body.param, req.params.no];
    let result = await mysql.query('userUpdate', datas);
    res.send(result);
});

//삭제
app.delete('/users/:no', async(req, res)=>{
    let data = req.params.no;
    let result = await mysql.query('userDelete', data);
    res.send(result);
});



