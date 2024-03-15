/*
Js is a Synchronous Programing language.
and Js also 
Single threaded.
Execute one line at a time.
Ex:-Console.log();1
    Console.log();2

BlokingCode (Synchronous)

& Non BlockingCode (Asynchronous)
*/

/*
There are 4 main types of Async code
1)Asynchronous
2)Callback
3)Promises
4)Async/Await
*/

//Syncronus code.
/*
let age = 21;
let id = 22;
let rollno = 123;
console.log(age);
console.log(id);
console.log(rollno);
*/

//Asynchronous Code.
/*
1)SetTimeOut();
2)ClearTimeOut();

3)SetInterver();
4)ClearIntrever();
*/

//1)SetTimeOut()
//Ex:1
/*
console.log("Aap rutho mai aata hu");
setTimeout(function (){

    console.log("Haa mai aa gaya");//Asynchronous Code.
    
},2000)//2 millisecond.
console.log("Aap tap tak ke code karo");
*/

//Ex:-2
/*
console.log("Start");

let Myfun = function(){
    console.log("Asynchronous Code");
}
setTimeout(Myfun,2000);

console.log("End");
*/

//Array fun in setTimeOut()
//Ex:-3

/*
let Myfun = () => {console.log("hii samruddhi tai")};setTimeout(Myfun,5000)

*/

/*
console.log("Start");
let Display = function(){
    console.log("My code Display");
}

let result = setTimeout(Display,2000);

console.log("End");
clearTimeout(result);
*/

// Array function with setTimeout

/*
console.log("Start");
let Display = () => {console.log("hii samruddhi tai")};
let vari = setTimeout(Display,2000);

clearTimeout(vari);
*/

//SetInterver()
/*
setInterval(function(){
    console.log("Hii Javascript");
})
*/
/*
function Display() {
    console.log("Setinterver Display");
}

let stop = setInterval(Display)

// clearInterval(stop)
*/

//Array fun Setinterver
/*
let Myfun = () =>{console.log("Hii Javascript")};setInterval(Myfun);
*/

/*
let count = 1;

function Display(name) {
    console.log("My ID:"+count+name);
    count++;
}

let stop = setInterval(Display,count," and my name is yash")

clearInterval(stop)
*/

//CallBack

/*
A callback is a function passed as an argument to another function is called callback.
*/
//Ex:1
/*
function Myfun(name,callback) {
    console.log("My First Function",name);
    callback();
}

//Callback function
function callback(){
    console.log("My second Function");
}

Myfun("Yash",callback);
*/

//Ex:2
/*
function add(num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
}

function Display(result) {
    console.log('The result is:', result);
};

add(5,5,Display);
*/

//Promise.
/*
let Fun1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Hello world");
    resolve()
  }, 2000);
});

Fun1.then(function(){
    console.log("Hello world2");
})
*/

//Ex:2
/*
new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hello world");
      resolve()
    }, 1000);
  }).then(function(){
    console.log("Hii Yash");
})
*/

//ARROR FUNCTION.
// Ex:3
/*
new Promise((resolve, reject) => {setTimeout(() => {console.log("Hello world");resolve()}, 1000)}).then(() => {console.log("Hii YASH")});
*/

//Ex:4
/*
let Exam2 = new Promise(function(resolve,rejent){
    setTimeout(function(){
        resolve({name:"Yash" , nikname:"YASH",id:24})
    },1000)
})

Exam2.then(function(data){
    console.log(data);//
})
*/


/*
const checkAge = age => new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Selected"); 
    } else {
        reject("Not selected"); 
    }
});

// Using the promise
checkAge(19)
    .then(result => console.log(result)) 
    .catch(error => console.log(error))
    .finally(console.log("Ok"))
*/

/*
let print = async function (){
    return "Hello I tech"
}

print().then(function(result){
    console.log(result);
})
*/

/*
async function print(){
    return "Hello "
}

print().then(function(result){
    console.log(result);
})
*/

/*
const print = async () => {return "Hello async"};

print().then((result) => {console.log(result)});
*/

/*
async function fun1() {
    console.log("Hii Js");
    await console.log("Hii python");
    console.log("Hii C++");
}
fun1()
console.log("Hello HTML");
*/
