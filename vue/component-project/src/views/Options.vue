<template>
    <div>
        <input type="number" v-model="price">원
        <br>
        <input type="number" v-model="count">개
        <!--computed와 watch의 차이를 보려면 각각 실행시키고 아래 : 칸 옆을 볼것-->
        <p> 과세 금액   : {{amount}} </p>
        <p> 부가세 10%  : {{tax}} </p>
        <p> 결제 금액   : {{total}} </p>
    </div>
</template>

<script>

const computed = { //사용하기전에 들고 있는 데이터를 가지고 연산을 일으킨다.
    data() {
       return{
        price : 0,
        count : 0
       }

    },
    computed : { // 여기에 있는건 불러올때만 사용한다(readOnly)/ 예를들어 amount를 불러서 직접 값을 집어넣는다던지 직접적으로 수정하지 않는다.
        amount(){
            return this.price * this. count;
        },
        tax(){
            return this.amount * 0.1;
        },
        total(){
            return this.amount + this.tax
        }
    }}

const watch = {
    data(){
        return{
            //watch는 데이터가 아니기때문에 computed처럼 데이터를 들고 있을 수 없다.
            price : 0,
            count : 0,
            amount : '',
            tax : '',
            total : ''
        }
    },
    watch : {
        //watch안에는 리턴구문이 없고 실행하는 작업만 한다.
        price(){
            this.amount = this.price * this.count;//둘 다 작동되어야 하는 코드를 적는다.
        },
        count(){
            this.amount = this.price * this.count;
        },
        amount(){
            this.tax = this.amount *0.1;
            this.total = this.amount + this.tax;
        },
        tax(){
            
        },
        total(){
            
        }
    }

}

export default watch
// export default computed
</script>

