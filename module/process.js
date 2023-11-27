//5.
//process는 require써도 되고, 안 적어도 사용가능함(전역변수라서)

//env 참고하고 싶은 환경변수를 볼 수 있음
// const process = require('process');
console.log(process.env);
console.log(process.env.JAVA_HOME);

//OS 
const os = require('os');
console.log(os.cpus());//CPU 코어 정보
console.log(os.tmpdir());//임시 저장 경로 확인

//os와 process의 차이점은 os는 함수로 호출한다.