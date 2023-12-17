<template>
<div class="card">
    <div class="card-header">댓글목록</div>
    <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item" :key="idx" v-for="(comment, idx) in commentList">
            <div class="container">
                <div class="row text-start">
                    {{ comment.content}}
                </div>

                <div class="row">
                    <div class="col-9 text-end">
                        {{comment.writer}}
                    </div>
                    <div class="col-3 text-center">
                        {{comment.created_date}}
                    </div>
                </div>

            </div>
        </li>
        </ul>
    </div>
</div>    
</template>
<script>
//CommentList.vue
import axios from 'axios';

export default {
    props :['bno'],//부모로부터 뭔가 받아와야 되기 때문에 뭘 넘겨받을지 명시(라우터로 동작 안함)
    data(){
        return{
            commentList :[]
        }
    },
    created(){//열리자마자 동작해야함
        this.getCommentList();
    },
    methods :{
        async getCommentList(){
            //http://localhost:3000/comments?bno=100/
            let result = await axios.get(`/api/comments?bno=${this.bno}`)
                                    .catch(err=>console.log(err));
            this.commentList =result.data;
        }
    }
}
</script>