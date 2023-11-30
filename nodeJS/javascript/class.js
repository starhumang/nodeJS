class Human{

    //let ssn; 자바는 필드에서 이렇게 작성했지만 자바스크립트는 아래와 같이 생성자 안에서 선언을 해야한다.

    //필드, 생성자, 메소드
    constructor(){//생성자에서 만든 필드는 _를 붙인다. 이는 암묵적으로 값을 바꾸지 말라는 뜻이다.
        this.ssn;
        this.name = 'Hong';
        this.age;
    }

    //각 필드의 권한에 따라서 setter, getter를 만든다(자바스크립트는 필드가 유연해서 굳이 필요없음)
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get ssn(){
        return this._ssn;
    }

    set ssn(ssn){
        this._ssn = ssn;
    }

    get age(){
        return this._age;
    }
    
    set age(age){
        this._age = age
    }

    getInfo(){
        console.log(this._ssn, this._name, this._age);
    }
}

let hu = new Human();
hu.ssn="990520";
hu.name ='Kang';
hu.age = 25;
hu.getInfo();