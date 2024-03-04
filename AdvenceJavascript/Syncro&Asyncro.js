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

// Array function

let Display = () => {console.log("hii samruddhi tai")};
let vari = setTimeout(Display,2000);
clearTimeout(vari);