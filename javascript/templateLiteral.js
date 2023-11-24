let date = new Date()
let year = date.getFullYear();
let month = date.getMonth() +1;
let day = date.getDay();

//줄바꿈 가능
let msg = `${year}년
${month}월
${day}일`;

console.log(msg);

// templateLiteral을 사용하는 경우(jsp에선 사용금지)
//1. 내부에 줄바꿈을 사용하는 경우
//2. 글자를 쓰는데 폼이 필요할때