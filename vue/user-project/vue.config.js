const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:5000'

module.exports = defineConfig({
  transpileDependencies: true,

  //개발하는 동안 사용되는 서버, 
  devServer : {
    port : 8080,//개발하는동안 이 포트를 사용함
    proxy : { //
      '^/':{
        target, // origin을 대체함(http://localhost:5000) /로 시작하는 모든 경로에 대해서 이 주소 설정(프록시)을 적용하겠따
        changeOrigin : true // true를 해야지 변경이 됨
      }
    }
  }
})
