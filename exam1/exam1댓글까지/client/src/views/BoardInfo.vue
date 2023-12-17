<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="text-center table-primary">번호</th>
                        <td scope="col" class="text-center">{{ boardInfo.no }}</td>
                        <th scope="col" class="text-center table-primary">작성일</th>
                        <td scope="col" class="text-center">{{ getDateFormat(boardInfo.created_date) }}</td>
                        <th scope="col" class="text-center table-primary">이름</th>
                        <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
                    </tr>

                    <tr>
                        <th colspan="2" class="text-center table-primary">제목</th>
                        <td colspan="4">{{ boardInfo.title }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6" class="text-left" valign="top" height="200">
                            <pre
                                style="white-space: pre-wrap;border:none;background-color: white;">{{ boardInfo.content }}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6" class="text-center">
                            <button class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.no)">수정</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            </div>
                <div class="row">
                <!-- 해당 게시글의 댓글이 있다면 : 게시글 번호를 넘겨줌 -->
                <CommentList v-if="boardInfo.comment > 0" v-bind:bno="boardInfo.no"/> 
                <!-- 해당 게시글에 댓글이 존재하지 않는다면 -->
                <div v-else class="card text-center">
                    댓글 없음
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import CommentList from '../components/CommentList.vue';
export default {
    data() {
        return {
            searchNo: '',
            boardInfo: {}
        };
    },
     components :{
        CommentList
    },
    created() {
        //boardList.vue랑 비교해서 무엇을 넘겼는지 router확인
        this.searchNo = this.$route.query.boardNo;
        this.getBoardInfo();

    },
    methods: {
        async getBoardInfo() {
            //0. 비동기 통신을 일시적으로 동기화 시키기 위해 await사용
            //1. boardList.vue랑 비교해서 무엇을 넘겼는지 router확인
            //2. app.js를 확인해서 어떤메소드와 어떤 경로를 요구하는 지 확인(백팁사용)
            //3. 그 메소드가 원하는 값 부여(${this.searchNo})
            //4. 속성에 정의한 boardInfo에 값을 부여
           let result = await axios.get(`/api/boards/${this.searchNo}`)
                                    .catch(err => console.log(err));
                        this.boardInfo = result.data;
        },
        getDateFormat(date) {
            return this.$dateFormat(date);
        },
        goToUpdateForm(no) {
            //서버가 바뀌는게 아니라 페이지가 바뀌는거라서 axios가 필요없다.
            this.$router.push({path: '/form', query :{boardNo : no}});
        }
    }
}
</script>
