const fs = require('fs');
const express = require('express');
const app = express();

//다른 파일의 라우터 등록(이러면 파일별로 등록가능)
const userRouter = require('./user.js');// 해당파일의 내용 가져오기
app.use('/user', userRouter);//use라는 메소드를 통해 라우터 등록


//에러처리하기(직접적으로 처리하려면 따로 메소드를 아래처럼 만들어야 함)
app.use('/public', express.static('images'));//이미지 파일 불러옴

app.use(function(err,req,res,next){//일단 상태(500번)와 에러 메세지를 json형태로 사용자에게 보냄
    res.status(500).json({statusCode: res.statusCode, errMessage : err.message});
});
app.get('/error', (req, res, next)=>{
    next(new Error('Process Fail, please Check your Data!'));
});




const jsonFile = fs.readFileSync('db.json');//동기방식함수(문자 인코딩을 이용해서 utf-8형식으로 읽은후 결과를 반환 97p)
const jsonData = JSON.parse(jsonFile);//json 형태로 변환
const getData = (target, where)=>{
    let data = jsonData[target];//여기서 target은 키값이다
    if(Array.isArray(data)){//해당데이터가 배열인지 아닌지 : profile은 배열이 아니라 객체이므로 for of를 사용하지 못함
        let list = data;
        for(let obj of list){
            if(obj.id == where){// if가 동작하지 않으면 전체 데이터 리스트가 리턴된다.(아이디가 없으면 전체 리턴)
                data = obj;// if가 동작하면 그 data를 리턴한다.(해당 아이디의 정보를 리턴)
            }
        }
    }
    return data;
}


//라우팅 등록(경로, 핸들러[콜백함수]) = 클라이언트의 요청에 애플리케이션이 응답하는 방법을 결정하는 것
//1.제대로 뜨는지 테스트
app.get('/', (req, res)=>{
 res.send('Server Connect');
});
//2.전체조회(posts)
app.get('/posts', (req, res)=>{
    let data = getData('posts');
    res.send(data);
});
//3.단건조회(db.json에 있는 id를 붙이면 됨 ex. post/1)
app.get('/posts/:id', (req, res)=>{//':'을 붙여서 해당 위치의 값을 받음
    let data = getData('posts', req.params.id)//body쪽에 있는 값을 가져올때는 req.body라고 하면 되지만 그 외에 경로나 다른곳에서 가져올때는 params를 작성해야 함
    res.send(data);
})

//스스로 라우팅 해보기(coments)
app.get('/coments', (req, res)=>{
    let data = getData('coments');
    res.send(data);
})
app.get('/coments/:id', (req,res)=>{
    let data = getData('coments', req.params.id)
    res.send(data);
})
//(profile)
app.get('/profile', (req,res)=>{
    let data = getData('profile');
    res.send(data);
})
//get(조회)이랑 delete(삭제)는 일반적으로 body가 없음/ post(등록)랑 put(수정)은 body로 뭔가를 해야함(?) 


//ROUTE = 들어오는 메소드(CRUD)들을 개별적으로 받아서 한번에 처리할 수 있게 함(필요에 따라서 2개만 받아서 처리해도 됨)
//(근데 조회같은경우에는 일괄처리하면 개별인지 전체인지 헷갈리니까 비추)
app.route('/emps')
.get((req,res)=>{
    res.send('사원 전체조회')
})
.post((req,res)=>{
    res.send('사원 등록')
})
.put((req,res)=>{
    res.send('사원 수정')
})
.delete((req,res)=>{
    res.send('사원 삭제')
})

//서버가 작동될때 사용하는 콜백함수
app.listen(3000, ()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});

