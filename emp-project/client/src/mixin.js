export default{
    methods : {
        $dataFormat(value, format){//날짜를 yyyy년MM월dd일로 변경하기
            let date = value == ''? new Date() :new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);//어떤값을 가지든 무조건 2자리로 출력
            let day = ('0' + date.getDate()).slice(-2);
    
            //-를 쓰던 .을 사용하던 그냥 두번째로 format만 넘겨주면 됨 위에 tbody참고
            let result = format.replace('yyyy',year)
                                .replace('MM', month)
                                .replace('dd', day);
    
    
            // return `${year}년${month}월${day}일`;
            return result;
        }
    }

}