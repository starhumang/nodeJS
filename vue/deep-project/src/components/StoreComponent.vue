<template>
    <div>
        <form>
            <label>
                제품ID:<input type ="text" v-model="productInfo.product_id">
                
            </label>
            <br>
             <label>
                제품명:<input type ="text" v-model="productInfo.product_name">
                
            </label>
            <br>
            <label>
                카테고리:<input type ="radio" value="A" v-model="productInfo.category">A
                        <input type ="radio" value="B" v-model="productInfo.category">B
            </label>
            <br>
            <button type="button" @click="addCart">추가</button>
            <br>
            total : {{total}}
        </form>
        <table>
            <thead>
                <tr>
                    <th>카테고리</th>
                    <th>제품 ID</th>
                    <th>제품명</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(info, idx) in productList">
                    <td>{{info.category}}</td>
                    <td>{{info.product_id}}</td>
                    <td>{{info.product_name}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            productInfo :{
                product_id : "",
                product_name : "",
                category : "A"
            }
        };
    },
    computed : {//실시간으로 저장소 정보가 update됨
        productList(){
            return this.$store.state.cart;
            //$store등록되어 있는 저장소 안에 state기반의 cart를 불러옴
        },
        total(){
            return this.$store.getters.cartCount;
            //얘는 getter를 기반으로 정보를 가져옴 각자 정의할때 사용한걸로 불러와야 함(state or getters)
        }
    },
    methods : {
        addCart(){
            //명시적인 커밋
            let obj = {
                product_id : this.productInfo.product_id,
                product_name : this.productInfo.product_name,
                category : this.productInfo.category

            }
            this.$store.dispatch('addProduct', obj);
            //actions는 dispatch를 이용해서 어떤 메소드를 사용할건지 불러옴, 어떤정보를 넘길지를 2번째 매개변수로
        },
    }
}
</script>