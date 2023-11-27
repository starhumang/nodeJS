//1.
const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


//외부에서 위의 함수를 사용하는 방법(내보내기)
//module.exports는 반드시 객체여야 한다.
//얘로 보내면 require로 받아야 함(파일하나로 보내는 형태)
module.exports={
    defaultNum,
    add,
    minus,
    multi,
    divide : divide 
    //위와같이 객체는 키,값 이런 형태로 들어가야하는데 변수명(키)과 값이 똑같으면 그냥 하나만 적어도 인정한다.(변수 이름이 저거고 값도 저거다)
}

//아래처럼 보내면 받을때는 import로 받아야함
// export default{

// }