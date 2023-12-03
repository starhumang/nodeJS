<template>
<div>
    <button type="button" v-on:click="increaseCounter">Add 1</button>
    <input v-model.number="num">
    <button type="button" @click="setCount(num, $event), msg('Add')">Add {{num}}</button><!--임의값을 넣어줌-->
    <p>The Counter is : {{counter}}</p>
    <hr>

    <!--이벤트 버블링 -->
    <form @click.stop="msg('form')">
        Form
        <div @click.self="msg('div')">
            Div
            <p @click="msg('p')">
                p <a @click.prevent="msg('a')" href="http://www.naver.com">네이버</a>
            </p>   
        </div>
    </form>
</div>
</template>


<script>
export default {
    data() {
        return{
            counter : 0,
            num : 3 
        }
    },
    methods : {
        increaseCounter(e){
            console.log(e);
            //vue가 들고있는 정보를 가져오고 싶다면 반드시 this를 적어야 함
            this.counter++;
        },
        setCount(value,event){
            console.log('setCount', event);
            this.counter = this.counter + value;
        },
        msg(msg){
            alert(`${msg} 선택!`);
        },

    }
}
</script>

<style scoped>
form, form *{
    margin: 10px;
    border: 1px solid blue;
}
</style>