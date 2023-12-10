const mysql = require('mysql');
const sql = require('./db/sql.js');
// require('dotenv').config({path : './db/mysql.env'});

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT,
})

const query = async(alias, values)=>{//async를 적으면 promise의 결과를 반환시켜줄때 까지 기다린다는 뜻(여기서는 await는 필요없음)
    return new Promise((resolve, reject)=>{
        pool.query(sql[alias], values, (err,results)=>{
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
        })
    })
}

module.exports ={
    query
}