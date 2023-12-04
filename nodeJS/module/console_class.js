//3.
//module.js에 있는것처럼 경로(./)를 적지 않고 아래처럼 그냥 fs이렇게 적으면 내장모듈을 불러온다.
//fs전체 다 불러옴
const fs = require('fs');
//console내장모듈 전체 중 Console만 불러온다.
const{ Console } = require('console');

//파일이 없으면 만들어진다.(사실상 로그 만드려고 console사용하는 듯)
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

//만들어진 파일에 다음의 내용이 들어가게 된다.
const logger = new Console({ stdout : output, stderr : errorOutput});
const count = 5;
logger.log('count2 : %d', count);
logger.error('count : ' + count);

