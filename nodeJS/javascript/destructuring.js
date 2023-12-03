
//객체의 destructuring
let obj = {
    id : 100,
    name : "Hong",
    birth : '1995-12-25'
}

//let과 {중괄호}만 적으면 객체 안의 값을 그냥 불러올 수 있다
let {id, name, birth} = obj;
console.log(id, name, birth);

//예제2
module.export={
    object : {},
    method : function(){}
}
let {method} =module;


//배열의 distructuring
let array = ['Hello', 'Nice', 'Monday'];
let[x,y,z] = array;
console.log(x,z);
