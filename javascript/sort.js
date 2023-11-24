// 내장함수

//문자를 정렬할때
let names = ["Hong", "Kong", "Adward", "Lee"];
names.sort();
console.log(names);
//반대정렬
names.reverse();
console.log(names);

//숫자를 정렬할때는 직접 함수를 적어줘야함
let nums = [40,100,1,5,25,10];
nums.sort();
console.log(nums);

//리턴값이 양수일 경우 첫번째 매개값이 크다고 인식
//리턴값이 음수일 경우 두번째 매개값이 크다고 인식
nums.sort((a,b) => {
    return a-b;
})
console.log(nums);
