const multer = require('multer');//요거
const path = require('path');//요거 추가된 부분
const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads/');//내가 결정한 파일을 넘겨주는 함수(uploads라는 이름의 폴더는 미리 있어야 한다)
    },
    filename : function(req, file, cb){
        cb(null, new Date().valueOf() + path.basename(file.originalname));//업로드할땐 랜덤한 이름을 추가해서 올림(여기선 날짜 사용/ 날짜 + 파일이름)
    }
})

const upload = multer({storage : storage});//이미지, 동영상 등 어떤 파일 들어올지 모르기 때문에, 들어오는 파일은 걸러서 들어와야한다.

//파일 외의 텍스트같은 나머지 값은 req.body에서 따로 접근을 해야한다.
//post 할때 파일형태에 따라 upload뒤에 붙는게 달라짐. 다름 지금은 하나라서 single(단일값)적음
app.post('/profile', upload.single('avatar'), (req, res)=>{//multer.html의 ('avatar')이름이 됨
    console.log(req.file);//single이라서 file
    console.log(req.body);
});
// 사진은 단일값이 아니라서 array 12개까지 받을 수 있음
app.post('/photos', upload.array('photos', 12), (req,res)=>{
    for(let file of req.files){//array라서 files
        console.log(file);
    }
});

app.listen(5000, ()=>{
    console.log('Server Start!!');
})