/*
oops is stand for object oriented programming language but oops is not a programming language It is a concept or principle that are based on classes and object
There Key features of object oriented programming language
1st inheritance 
polymorphism 
encapsulation and 
abstraction */

/*
class A1{
    constructor(){
        console.log("hello world");
    }
}
let obj = new A1();
*/

class Myclass{
    constructor(name,fullname,id){
        // console.log(name+fullname+id);
        this.person=name;
        this.myfullname=fullname;
        this.myid=id;
    }
    display(){
        let msg = `My name is ${this.person} and my full name is ${this.myfullname} my id is ${this.myid}`
        return msg;
    }
}

let obj1 = new Myclass("Yash","Kumar",24);

console.log(obj1.display());
