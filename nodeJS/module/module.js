//2.
//본격적으로 프로세스를 작성하기 전에 선언을 해서 보내진 파일을 받기
//자바스크립트 같은 위치에 있는 곳은 ./ 상위폴더는 ../
//요즘은 destructring을 통해 전체가 아닌 일부만 {}안에 적어서 불러온다.
const {add, minus} = require('./calculator');

console.log(add(10,25));
console.log(minus(25,3));