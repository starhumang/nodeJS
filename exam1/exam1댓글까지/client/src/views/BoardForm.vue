<template>
    <div class="container">
        <form @submit.prevent >

            <label for="no">No.</label>
            <input type="text" id="no" v-model="boardInfo.no" readonly>
            <!--v-model에 연결되는 필드명을 컬럼명 기준으로 작성해야한다.-->
            <label for="title">제목</label>
            <input type="text" id="title"  v-model="boardInfo.title">

            <label for="writer">작성자</label>
            <input type="text" id="writer" v-model="boardInfo.writer">    

            <label for="content">내용</label>
            <textarea id="content" style="height:200px" v-model="boardInfo.content"></textarea>

            <label for="regdate">작성일자</label>
            <input type="text" id="regdate" v-model="boardInfo.created_date" >

            <button type="button" class="btn btn-xs btn-info" @click="isUpdated? boardUpdate() : boardInsert()">저장</button>

        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            searchNo: '',
            boardInfo: {
                no : '',
                title : '',
                writer : '',
                content : '',
                created_date : ''
            },
            isUpdated : false //저장버튼에서 사망연산자를 사용하기 위한 빌드업
        };
    },
    created() { //화면이 최종적으로 완성되기 위한 정보를 정의해두는 곳(데이터 초기화 시에 사용한다.)
        this.searchNo = this.$route.query.boardNo;//이걸통해서 수정한다는 의지를 알 수 있음
        if(this.searchNo > 0){//넘어오는 번호가 있으면 수정, 없으면 등록
            //수정
            this.getBoardInfo();//1. 우선 한건 등록 정보를 가져오기
            this.isUpdated = true;
        }else{
            //등록
            this.boardInfo.created_date = this.getToday();//현재날짜 뜨는거 넣어줌
        }
        
    },
    methods: {
        async getBoardInfo() {
           let result = await axios.get(`/api/boards/${this.searchNo}`)
                                    .catch(err => console.log(err));
                        this.boardInfo = result.data;
                        //2. 가져온 날짜정보 포맷지정해주기
                        this.boardInfo.created_date = 
                        this.$dateFormat(this.boardInfo.created_date);
        },
        getToday(){
            return this.$dateFormat(''); // 믹스인에 공백일때 현재날짜 자동으로 불러옴
        },
        async boardInsert(){
            let obj = {
                param :{//4가지만 보내고 날짜는 created에서 넣어주고 번호는 sql에서 자동으로 넣어줌
                    title : this.boardInfo.title,
                    writer: this.boardInfo.writer,
                    content: this.boardInfo.content,
                    created_date :this.boardInfo.created_date
                }
            }
            
            let result = await axios.post('/api/boards', obj)//두번째로 넘긴 데이터는 body쪽으로 뿌려짐
                                .catch(err => console.log(err));
            if(result.data.insertId > 0){
                alert('등록되었습니다.');
                this.boardInfo.no = result.data.insertId //이부분 한번 더 보기
            }
        },
        async boardUpdate(){
            let obj = {
                param :{//4가지만 보내고 날짜는 created에서 넣어주고 번호는 sql에서 자동으로 넣어줌
                    title : this.boardInfo.title,
                    writer: this.boardInfo.writer,
                    content: this.boardInfo.content,
                    created_date :this.boardInfo.created_date
                }
            }
            let result = await axios.put(`/api/boards/${this.boardInfo.no}`, obj)
                                    .catch(err => console.log(err));
            if(result.data.changedRows > 0){
                alert('수정되었습니다.')
            }
        }
    }
}
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type=button] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type=button]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>