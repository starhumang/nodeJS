require("dotenv").config({ path: "./mysql/db.env" });
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(express.urlencoded({extended : false})); //특정한 모듈을 확장해서 사용할때 true로 사용 가장 기본적인건 false

const server = app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

const db = require("./db.js");

//단일값 : 경로로 받음(request.params)
//객체 : param으로 받음(request.body)
//단일값 + 객체 : 배열로 받음(request.params, request.body)
//단일값들 : 배열로 받음(request.body)


//방법 1 board/category/: 이건 배웠던거

//전체조회
app.get("/boards", async (request, res) => {
  res.send(await db.connection("boardList"));
});
//단건조회
app.get("/boards/:bno", async (request, res) => {
  res.send((await db.connection("boardInfo", request.params.bno))[0]);
  //list의 0번째로 들어가서 조회됨
});
//등록//REST API 기준(파트2에서는 다른 방식으로 접근할 예정)
app.post("/boards", async(request, response) => {
    let data = request.body.param;//나중에 값을 입력할때 이 이름(param)으로 적어야함
    response.send((await db.connection("boardInsert", data)));
});
//수정
app.put("/boards/:bno", async(request, response) => {
  let data = [request.body.param, request.params.bno];
  response.send((await db.connection("boardUpdate", data)));
});


// 방법 2 /board?category= 새로운 방법(조건많은때 좋음)
// ex ) //querystring => ?key=value&key=value...
//해당 게시글의 댓글조회
app.get("/comments", async(request, response)=>{
  let data = request.query.bno;
  response.send((await db.connection("commentList", data)));
});



