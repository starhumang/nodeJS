const mysql = require('mysql');//모듈먼저 불러옴
const sql = require('./db/sql.js');

//pool은 여러쿼리문을 동시에 병렬적으로 처리가능함
//개인정보는 쓰면 안됨
//process.env뒤에 mysql.env에서 가져온 키값을 넣어서 입력
const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT
    //db가 가지고 있는 최대값을 한명에게 줘버리면 그 한명이 사용할때 다른 사람들은 그 사이트를 사용 못함 그래서 적절히 limit을 줘야함
})

//내가 적은 쿼리문을 전달하는 메소드
// pool.query('sql문', '값', (매개변수) =>{})
//여기서 alias는 customerList
const query = async (alias, values) =>{
    return new Promise((resolve, reject) =>{
        pool.query(sql[alias], values, (err, results)=>{
            //우선 에러가 났는지 확인
            if(err){
                //우리가 한번 보고
                console.log(err);
                //reject에 에러전달
                reject({err});
            }else{
                resolve(results);
            }
        })
    })
}
//일차적으로 연결이 잘 되었는지 확인
// const getData = async() =>{
//     console.log(await query('customerList'));
// }
// getData();


module.exports = {
    //아래의 query는 위의 함수를 실행시키는 거임
    query
}

