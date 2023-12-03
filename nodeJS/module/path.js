//6.
const path = require('path');

console.log('== 절대경로');
console.log(__filename);//파일이름까지 합쳐서 폴더경로 반환

console.log(__dirname);//폴더경로반환
console.log(path.dirname(__filename));//바로 위와 같은 결과

console.log('실제 파일명 : %s', path.basename(__filename));// 마지막경로에 대한 정보 반환
console.log('확장자 : ', path.extname(__filename));
// console.log();

let pathList = process.env.PATH.split(path.delimiter);//윈도우는 ; POSIX(맥, 리눅스)는 :
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep));//sep는 \