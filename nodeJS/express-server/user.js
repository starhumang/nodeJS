const express = require('express');
const router = express.Router();

//에러의 종류
//400번대는 요청에러
//404 : 경로가 잘못됨
//400 : 경로는 있으나 메소드나 서버가 클라이언트가 요청하는 형태로 데이터를 보내지 않았을 때
//403 : 접근권한이 없는데 요청하는 경우(일반회원이 관리자 사이트에 접속할때)
//405 : 요청 메서드를 알고 있지만 대상 리소스가 이 메서드를 지원하지 않을때

//500번대는 서버에러
//500 : 서버내부에서 동작하는 부분이 오류남(ex. nullpointErr)

//라이브서버의 역할 : 워크스페이스 자체를 하나의 서버화 시켜서 접근 시킬 수 있게 하는 것

//파일별로 관리하기
router.get('/', (rep,res)=>{//브라우저에서는 get(조회)만 확인가능
    res.send('회원 정보 조회');
});

router.post('/', (rep,res)=>{
    res.send('회원 등록');
});

router.put('/', (rep,res)=>{
    res.send('회원 정보 수정');
});

router.delete('/', (rep,res)=>{
    res.send('회원 삭제');
});

module.exports = router;//해당파일의 끝_ 이 뒤에 코드가 들어가면 안됨 (이거 자주 누락하니까 처음부터 써놓기)