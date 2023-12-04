const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:5000'

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,//모든 컴포넌트 이름은 2단어지만 여기서 수정하면 1단어로도 가능

  //개발하는 동안 사용되는 서버, 
  devServer : {
    port : 8080,//개발하는동안 이 포트를 사용함
    proxy : { //
      '^/api':{// 실제로 /만 해놓으면 안되고 그 서버를 특정지을 수 있는 이름을 부여해야 함
        target, // origin을 대체함(http://localhost:5000) /로 시작하는 모든 경로에 대해서 이 주소 설정(프록시)을 적용하겠따
        changeOrigin : true, // true를 해야지 변경이 됨
        ws : false,//웹 소켓이 지원됨(별도 설정없이 지원)실시간으로 동기화 시켜야하면 웹소켓 true
        pathRewrite : {'^/api' : '/'}//경로 다시쓰기 = 내가 사용하는 경로는 실제로는 /api이거지만 접근할때는 /로 접근하라
      }
    }
  }
})
