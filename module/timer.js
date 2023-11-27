//4.
// 큐는 선입선출, 일단 1초 기다리고 둘중(timeout or interval) 먼저 큐로 들어간걸 먼저 실행

//우선순위 3(공동) -2023년11월01일
const timeout = setTimeout(()=>{
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDay()).slice(-2);

    console.log(`${year}년${month}월${day}일`);
}, 1000);

//우선순위 3(공동)- interval 0
let count = 0;
const interval = setInterval(()=>{
    console.log('interval %d',count++);
    if(count ==5){
        clearInterval(interval);
    }
}, 1000);

//우선순위 1(콜백함수들 중에서는 먼저 실행 하지만 시작순서 보장x) - 즉시 실행 요청
const immediate = setImmediate(()=>{
    console.log('즉시 실행 요청');
})

//우선순위 2 - 마지막 코드
console.log('마지막 코드');

