const mysql = require('mysql');//mysql연결
const sql = require('./db/sql.js');//쿼리가져옴

console.log("process.env.MYSQL_HOST", process.env.MYSQL_HOST);
//mysql과 연결하기 위한 정보들
const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT
})

//sql.js에서 작성한 쿼리를 키와 값 형태로 가져오는 중
const query = async (alias, values)=>{
    return new Promise((resolve, reject)=>{
        //아래의 query는 createPool의 내장메소드임
        pool.query(sql[alias], values,(err, results)=>{
            //만약 에러가 난다면 실패에 에러를 넣고 성공한다면 결과를 넣고
            if(err){
                console.log(err);
                reject(err);
            }else{
                resolve(results);
            }
        })
    })
}

//sql.js에서 작성한 쿼리 아무거나 하나 들고와서 연결되는지 확인
const getData = async()=>{
    console.log(await query('friendList'));
}
getData();

module.exports={
    query
}