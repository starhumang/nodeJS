//7.
const url = require('url');

let legercy = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(legercy);

//실제로 위의것 보다는 아래처럼 url클래스를 직접 만들어서 한다고 함
let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(whatwg.searchParams);//parameter로 받는값을 검색