require('dotenv').config({path : './db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
  }));
  
  app.listen(3000, ()=>{
    console.log('Server Start!~');
  });

  //게시글 전체조회
  app.get('/boards', async(req,res)=>{
    let list = await mysql.query('boardList');
    res.send(list);
  });
  //게시글 부분조회
  app.get('/boards/:no', async(req,res)=>{
    let data = req.params.no
    let result = await mysql.query('boardInfo', data);
    res.send(result[0]);
  });
  //게시글 입력
  app.post('/boards', async(req, res)=>{
    let data = [req.body.TITLE,
                req.body.WRITER,
                req.body.CONTENT ,
                req.body.CREATED_DATE ];
    let result = await mysql.query('boardInsert', data);
    res.send(result);
  })
