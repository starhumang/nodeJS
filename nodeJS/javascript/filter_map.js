// filter는 조건을 걸어 새로운 배열을 만듦
let words = ["spray", "limit", "elite", "exuberant","paresent"];
let result = words.filter(function(word, idx, array){
    // console.log(word, idx, array);
    return word.length > 6;
});
console.log(words, result);//원본데이터와 새 데이터



//map은 보통 빼내야 하는 데이터가 있는 경우에 작성(배열 길이가 유지된다)
//기존에 객체에 새로운 값을 넣어버리면 원본데이터가 변경된다.(아래의 예시에는 원본에 넣지 않았음)
let users = [
    {
        id : 100,
        name : "Hong"
    },
    {
        id:200,
        name: "Kong"
    },
    {
        id:300,
        name: "Lee"
    }
]
result = users.map(function(user){
    return{
        id: user.id,
        name: user.name,
        grade : user.id == 200? 'VIP' : '일반'
    }
});
console.log(users);
console.log(result);

