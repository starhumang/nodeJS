const promise = new Promise((resolve, reject) =>{
    if(true){
        // 처리성공
        resolve("결과데이터");
    }else{
        // 처리실패 = 작업자체가 중단됨
        reject(new Error("에러메세지"));
    }
})
.then((success, fail)=>{
    //비동기 처리 결과
    //success(첫번째 매개변수) : 성공(fulfilled, resolve 함수 호출상태)
    //fail   (두번째 매개변수) : 실패(rejected, reject 함수 호출상태)
})
.catch(error =>{//항상 모든 then이 끝나는 위치에 catch가 자리잡아야 한다.
    //예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)
})
.finally(()=>{
    //처리결과와 무관하게 항상 실행해야하는 코드
})