function printMsg( msg = '메세지를 입력해주세요', to=''){
    console.log(msg);
}
//값을 넣었을때와 넣지 않았을때, 넣지 않았을때 위의 msg에 넣은 값을 기본값으로 사용한다.
printMsg('Have A Nice Day');
printMsg();

//
function sum(x, y, ...args){
    let result = x + y;
    console.log(args.length);
    for(let num of args){ //배열을 순환하는 반복문
        result += num;
    }
    return result;
}
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
