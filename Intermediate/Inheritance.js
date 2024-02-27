//INHERITANCE

//single level IN
/*
class A1{
    constructor(name, Id){
        this.myname = name;
        this.myid = Id;
    }
    getdata(){
        return this.myname;
    }
    getdata2(){
        return this.myid;
    }
}
class B1 extends A1{
    display(){
        console.log(`My name is ${this.myname} and my id is ${this.myid}`);
    }
}

let name = prompt("Enter your name");
let id  = parseFloat(prompt("enter your is id "));

let obj = new B1(name,id);

// console.log(obj.display());
obj.display();
*/

// MULTI - LEVEL IN

/*
class Base{
    constructor(name, id){
        this.myname = name;
        this.myid = id;
    }
    datareturn1(){
        return this.myname;
    }
    datareturn2(){
        return this.myid;
    }
}
class Derived extends Base{
    constructor(name,id, age, skill){
        super(name,id,age,skill);
        this.myage = age;
        this.myskill = skill;
    }
    display(){
        return this.myage;
    }
    show(){
        return this.myskill;
    }
}
class Derived2 extends Derived{
    Result(){
        console.log(`My name is:- ${this.myname} id = ${this.myid} age = ${this.myage} skills = ${this.myskill}`);
    }
}

let name = prompt("Enter name");
let id = parseFloat(prompt("enter id"));
let age = prompt("Enter age");
let skill = prompt("Enter skill");

let obj = new Derived2(name,id,age,skill);

obj.Result();
*/


