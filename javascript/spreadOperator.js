let array = [1,2,3];
let string = "Hello";
//하나씩 끄집어내서 옆처럼 만들거임[1,2,3,"H","e","l","l","o"]

//방법1(우리가 아는 기초방법)
let newArray = [];
for(let value of array){
    newArray.push(value);
}
for(let value of string){
    newArray.push(value);
}
console.log(newArray);

//방법2(spreadOperator(펼침연산자)사용시)
newArray = [...array, ...string];
console.log(newArray);

