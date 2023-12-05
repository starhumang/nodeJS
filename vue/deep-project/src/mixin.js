//믹스인
//전역으로 사용할 것을 고려하고 만듦 내가 봤을땐 java에서의 session 기능이랑 비슷한듯

export default {
    methods : {
        $dateFormat(value, format){
            let today = new Date(value);
            let year = today.getFullYear();
            let month =('0'+ (today.getMonth() +1)).slice(-2);
            let day = ('0'+today.getDate()).slice(-2);

            let result = format.replace('yyyy', year)
                                .replace('MM', month)
                                .replace('dd', day);
            return result;
        }
    },
    created(){
        console.log('컴포넌트 생성');
    },
    mounted(){
        console.log('DOM에 마운트');
    }
}