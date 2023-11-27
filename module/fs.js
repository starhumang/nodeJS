const fs = require('fs');
const data = 'Hello, world!';

// ※쓰기, 읽기 모두 인코딩 방법이 똑같아야 함(utf-8)
//해당파일의 데이터를 쓰겠다.
동기식
fs.writeFileSync('./sample.txt',data, 'utf8');

//비동기식
// fs.writeFile('./sample.txt',data, 'utf8', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('파일 쓰기 완료!');
// });

//해당파일을 읽겠다.
fs.readFile('./sample.txt', 'utf8', (err, data) =>{
    if(err){
        throw err;
    }
    console.log(data);
});
