//주 서버가 되는 파일

require('dotenv').config({path : './node/mysql/db/mysql.env'});
//여기서 서버 실행시킬거니까 express
const express = require('express');

//서버의 역할을 해줄 인스턴스(복제품) 생성
const app = express();
const db = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

//서버시작(3000은 로컬포트번호)
app.listen(3000, ()=>{
    console.log('서버 시작됐다')
});


//아래는 라우팅작업
//전체조회
app.get('/friends', async(req, res)=>{
    let list = await db.query('friendList');//(alias, values) -> 전체조회를 할것이기 때문에 values가 필요없다
    //어떤 쿼리문을 실행하는지 키값을 적어줘야함
    res.send(list);
});
//단건조회
app.get('/friends/:no', async(req, res)=>{
    let data = req.params.no;
    let result = await db.query('friendInfo', data);
    res.send(result[0]);//select의 결과는 한건이든 여러건이든 결국 배열
});
//등록
app.post('/friends', async(req, res)=>{
    let data = req.body.param;
    let result = await db.query('friendInsert', data);
    res.send(result);
});
//수정
app.put('/friends/:no', async(req, res)=>{
    let datas = [req.body.param, req.params.no];//넘겨주는 데이터가 2개 이상이면 배열(사실 배열안해도 되긴함)
    let result = await db.query('friendUpdate', datas);
    res.send(result);
});
//삭제
app.delete('/friends/:no', async(req, res)=>{
    let data = req.params.no;
    let result = await db.query('friendDelete', data);
    res.send(result);
});

