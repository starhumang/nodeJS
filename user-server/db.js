const mysql =require('mysql');
const sql = require('./db/sql.js');



const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT
})




const query = async (alias, values)=>{
    return new Promise((resolve, rejcect)=>{
        pool.query(sql[alias], values,(err, results)=>{
            if(err){
                console.log(err);
                rejcect(err);
            }else{
                resolve(results);
            }
        })
    })
}

//연결 잘 되었는지 확인
const getData = async()=>{
    console.log(await query('userList'));
}
getData();

module.exports = {
    query
}