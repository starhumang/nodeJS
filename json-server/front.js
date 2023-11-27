//node.js책 101쪽 참고

//전체조회
fetch('http://localhost:3000/posts')
.then(res => res.json())
.then(data => console.log('list', data))
.catch(err => console.log(err));

//단건조회
fetch('http://localhost:3000/posts/1')
.then(res => res.json())
.then(data => console.log('info', data))
.catch(err => console.log(err));


//등록
fetch('http://localhost:3000/posts', {
    method : "post",
    headers : {
        'content-type' : 'application/json'//헤더에는 꼭 얘가 들어가야 함(우리는 json쓰기 때문)/이거 잘못쓰면 400번 에러가 뜸
    },
    body : JSON.stringify({userId : 2,
                            id : 4,
                            title : 'Have a nice day!',
                            body : 'this place is body'
                        })// 내용을 JSON.stringify로 json형태로 바꿔줘야함 위의 헤더에 적은거랑 주로 같이 따라감
})
.then(res => res.json())
.then(result => console.log('insert', result));


//수정
fetch('http://localhost:3000/posts/4', {//어떤 대상을 수정할건지 경로에 적어줘야함★
    method : "put",
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify({userId : 3,
                            title : 'Hello, world!',//수정하고자 하는 내용 바로 적기
                            body : 'update body contents'
                        })
})
.then(res => res.json())
.then(result => console.log('update', result));


//삭제
fetch('http://localhost:3000/posts/4',{
    method:'delete'
})
.then(res => res.json())
.then(result => console.log('delete', result));
