//8. 암호화(지금 이건 아주 최소한의 방어)
const crypto = require('crypto');
const data = 'pw1234';


let encData = crypto.createHash('sha512') // 암호 해쉬함수(sha512 or sha256)
                    .update(data) // 실제 비밀번호
                    .digest('base64'); //암호화 결과 표현방식1
console.log(encData);

encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('hex'); //암호화 결과 표현방식2
console.log(encData);


//salt 사용 = 해커들이 더 해석하기 어렵게 만드는 것
const createSalt = () =>{
    return new Promise((resolve, reject)=>{
        crypto.randomBytes(64,(err, buf)=>{//길이는 64정도의 랜덤 바이트 생성
            if(err) reject(err);
            resolve(buf.toString('base64'));
        })
    })
}

const createCryptoPassword = async (plainPassword)=>{
    const salt = await createSalt();
    return new Promise((resolve, reject)=>{
        crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key)=>{
            if(err) reject(err);
            resolve({password : key.toString("base64"), salt})
        })
    })
}

//pending 나와서 감싸줌
const cryptoPassword = async() =>{
    encData = await createCryptoPassword(data);
    console.log(encData);
}

//실행
cryptoPassword();