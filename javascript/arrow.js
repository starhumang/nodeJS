// 자바는 클래스가 중심, 자바스크립트는 함수가 중심이 된다.


//1. 함수선언식 = (보통 아래배치)선언만 되어있다면 언제 선언했는지와 상관없이 어디서든 사용할 수 있음, 덮어쓰기 가능
function hello(name){
    return "Hello, " + name;
}
//함수 재선언
function hello(msg){
    return "msg, Hello : " + msg
}
//hello 함수호출
console.log(hello("world"));



//2. 함수표현식 = (보통 위에배치)const기반, 해당 함수가 사용되기 전에 선언되어야 함, 덮어쓰기 불가능
const message = function(msg){
    return "msg : "+msg;
}



//3. 화살표 함수(익명함수) = 함수내부에서 this사용 불가능 this사용하려면 일반 함수로 작성해야 함.
//예제1
let arrHello = (name)=>{return "Hello, " + name;}
//받는 매개변수가 하나면 ()괄호 생략 가능 return도 한줄이라면 {}생략가능
arrHello = name => "hello, " + name;

//화살표 함수 예제2
let arrMessage = (msg) => {return "msg : "+ msg}
arrMessage = msg => "msg : " + msg;
//매개변수가 없거나 2개 이상이면 반드시 ()가 붙어야 함 또한 내부에서 선언하거나 return의 값이 많으면 {}생략불가
arrMessage = () =>{
                    let today = new Date().getDay();
                    console.log("오늘날짜 : " ,today);
                    }



