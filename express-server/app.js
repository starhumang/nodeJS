const express = require('express');
const app = express();

const getData = async() => {
   return await fetch('db.json')
    .then(res => res.json());
}

let db = getData();

app.get('/posts', (req, res) => {
    res.send(db['posts']);
})

//라우팅 등록(경로, 핸들러[콜백함수]) = 클라이언트의 요청에 애플리케이션이 응답하는 방법을 결정하는 것
app.get('/', (req, res)=>{
 res.send('Server Connect');
});

//서버가 작동될때 사용하는 콜백함수
app.listen(3000, ()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});