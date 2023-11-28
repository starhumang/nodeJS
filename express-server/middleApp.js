const express = require('express');//노드를 기반으로 서버를 여는 것
const session = require('express-session');
const cors = require('cors');
const app = express();//새로운 인스턴스 생성


//미들웨어
// application/www-form-urlencoded 방법1(요즘엔 이거 쓸 일이 잘 없음)
const defaultParser = express.urlencoded({extended : false});
// application/json 방법2
const jsonParser = express.json();

app.use(defaultParser);//경로상관없이 해당서버가 가지고 있는 모든 라우팅에 동일하게 적용



//라우팅1
app.post('/info', (req, res)=>{
    res.send('welcome, ' + req.body.name);
});
//라우팅2
app.post('/message', jsonParser, (req, res)=>{ //핸들러, 미들웨어 동작 후 콜백함수 작동, 동작순서 바꾸고 싶으면 앞뒤 바꿔도 됨
    res.send('MSG:, ' +req.body.message);
});
//서버시작
app.listen(5000, ()=>{
    console.log('server start!');
});


//세션
let sessionSetting = session ({
    secret : 'secret key', //암호화할때 쓰이는 기본키 설정
    resave : false, //새로 저장하는 부분에서 변경사항이 없어도 저장할건지 말건지
    saveUninitialized : true,//저장소에 값 저장할건지 말건지
    cookie :{
        httpOnly : true,// 자바스크립트로 접근 못하고 통신으로만 접근가능
        secure : false,// 보안강화(https만 왔다갔다 접근할 수 있도록, 원래는 true로 동작을 하는게 좋음)
        maxAge : 60000
    }
});
app.use(sessionSetting);


const corsOptions = { //외부와 데이터를 주고 받는 형태면 이거 해줘야함
    origin : 'http://192.168.0.34:5500',//(origin : 페이지쪽 주소)
    optionSuccessStatus : 200 //오래된 브라우저에서 상태코드를 변경해서 인식할 수 있도록 지원하는 것(선택사항)
}
app.use(cors(corsOptions));//cors안에 넣어서 서버에 등록
//middleApp.js에서 노드를 기반으로 서버연것과
//index.html쪽에서 라이브서버를 기반으로 연 서버를 통신해보는 중(라이브(페이지)에서 express서버 정보를 요청)
//모든 처리는 서버쪽에서 해줘야 함(cors).


//메인에서 세션정보확인 가능
app.get('/',(req, res)=>{
    res.send(req.session);//세션전체정보 확인
});
//세션에 정보 저장
app.post('/login', (req, res)=>{
    const {id, pwd} = req.body;
    req.session.user = id;//session.id라고 하면 안됨. 이미 기존에 id는 고유값이 있어서 덮어씌우면 이상한 값이 나옴
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err; //에러가 있으면 예외처리
        res.redirect('/');//메인으로 넘어감
    })
})
//세션에 정보 삭제
app.get('/logout', (req, res) =>{
    req.session.destroy();//세션 정보 삭제
    req.redirect('/');//메인으로 넘어감
})


