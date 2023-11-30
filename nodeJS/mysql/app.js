//주 서버가 되는 파일

require('dotenv').config({path : './db/mysql.env'});//환경변수는 서버에서 실행시킨다.
const express = require('express');

//서버의 역할을 해줄 인스턴스 생성
const app = express();
const mysql = require('./db.js');

//미들웨어 모듈 등록(서버에 값의 제한을 걸어줌)
app.use(express.json({
    limit : '50mb'
}));

//마무리작업(콜백함수로 실행되어서 사실 위치는 크게 상관 없음)
app.listen(3000, ()=>{
    console.log('Server start!');
});


//라우팅작업(rest 방식을 사용할거기 때문에 경로는'/customers'로 통일 )
app.get('/customers', async(req, res)=>{
    //어떤 쿼리문을 실행하고자 하는지 알려줘야함
    let list = await mysql.query('customerList'); //(alias, values) -> 전체조회를 할것이기 때문에 values가 필요없다.
    res.send(list);
});

//post는 body로 접근
app.post('/customers', async(req, res)=>{
    let data = req.body.param;
    let result = await mysql.query('customerInsert', data);
    res.send(result);
});
//put은 body로 접근
app.put('/customers/:id', async(req, res)=>{//경로에서 데이터가 넘어오는건 params에서 처리가 된다(req.params.id)//postman에서 주소 적을때 뒤에 id값 넣어줘야함
    let datas = [req.body.param, req.params.id];//넘겨주는 데이터가 배열이어야 함(쿼리문에서 ?가 2개 이상씩 사용되기 때문)
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
});

app.delete('/customers/:id', async(req,res)=>{
    let data = req.params.id;
    let result = await mysql.query('customerDelete', data);
    res.send(result);
});

//직접추가(단건조회)
app.get('/customers/:id', async(req, res)=>{
    let data = req.params.id;
    let result = await mysql.query('customerInfo', data);
    res.send(result[0]);//select의 결과는 한건이든 여러건이든 결국 배열로 돌아옴
});