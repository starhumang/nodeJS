<template>
    <div>
        <button v-on:click="addData">+</button><!--클릭이벤트-->
        <!--위의 클릭이벤트가 안 먹히면(sql에 저장은 되나 실제 화면에서 나오지 않는 경우)
        배열 메소드로 해결해야 함(start, pop, push, splice(위치, 삭제, {넣을 위치}) 등)
        추가 = splice(3, 0, {});
        수정 = splice(3, 1, {});
        삭제 = splice(3,1); -->
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>

                <!--tr부터 반복될거기 때문에 tr에 for를 넣는다/foreach랑 같은역할-->
                <!--key속성은 우리가 다루는게 아님(vue에서 작동할때 참고함) -->
                <tr v-bind:key="idx" 
                    v-for="(product, idx) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>


<script>
//데이터
    let data = [
        {
            "product_name" : "기계식키보드",
            "price" : 25000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        },
         {
            "product_name" : "무선마우스",
            "price" : 12000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        },
         {
            "product_name" : "아이패드",
            "price" : 725000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        },
         {
            "product_name" : "태블릿거치대",
            "price" : 32000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        },
         {
            "product_name" : "무선충전기",
            "price" : 42000,
            "category" : "노트북/태블릿",
            "delivery_price" : 5000
        }
    ]

    //위에서 데이터를 직접 선언해도 괜찮지만 끝에는 반드시 아래처럼 안에 넣어줘야한다.
    export default{
        data(){
            return{
                productList : data
            }
        },
        methods : {
            addData(){
                let obj= {
                    product_name : "무선충전기",
                    price : 42000,
                    category : "노트북/태블릿",
                    delivery_price : 5000
                };
                let index =  this.productList.length;
                this.productList[index] = obj;
            },
            /*
            위는 이거랑 같은거임
            addData : function(){

            }
            */
        }
    }
</script>
