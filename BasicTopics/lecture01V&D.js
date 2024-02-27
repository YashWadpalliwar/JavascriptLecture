// console.log("Hello Yash");
// alert("helll");

// console.log(person.address);

// city="Nagpur";
// var password=12345;
// let name="Yash Hamza";
// const Age=24;

// console.log("City:-",typeof(city));
// console.log("password:-",typeof(password));
// console.log("name:-",name);
// console.log("Age:-",Age);

// console.log([
//     "city:-",city, 
//     "password:-",password,
//     "Name:-",name,typeof(name),
//     "Age:-",Age
// ]);

//PRIMITIVE DATATYPE EX:-

// let numbersValue = 24;
// let stringValue = "Yash";
// let booleanValue = false;
// let UndefinedValue;
// let nullValue = null;
// let symbolValue = Symbol("$");
// let bigIntValue = 98754684587;
// let NaNValue = NaN;

// console.log("numbersValue:-",numbersValue,"Data Types:-",typeof(numbersValue));

// console.log("stringValue:-",stringValue,"Data Types:-",typeof(stringValue));

// console.log("booleanValue:-",booleanValue,"Data Types:-",typeof(booleanValue));

// console.log("UndefinedValue:-",UndefinedValue,"Data Types:-",typeof(UndefinedValue));

// console.log("nullValue:-",nullValue,"Data Types:-",typeof(nullValue));

// console.log("symbolValue:-",symbolValue,"Data Types:-",typeof(symbolValue));

// console.log("bigIntValue:-",bigIntValue,"Data Types:-",typeof(bigIntValue));

// console.log("NaNValue:-",NaNValue,"Data Types:-",typeof(NaNValue));

// let result = "hello" / 2;
// console.log(result);

//NON PRIMITIVE DATATYPE EX:-

// let myarr = [1,2,3]
// console.log(myarr);
// console.log(typeof(myarr));

// let arr = new Array(1,2,3)
// console.log(arr);
// console.log(typeof(arr));

//  ARRAY METHODS

// let myarr = [1,2,3,4]
// let name = ["yash","anu"]
// let conbine = myarr.concat(name);
// console.log(conbine);
// .join()
// myarr.push("sumruddhi");
// myarr.pop();
// myarr.unshift(0);
// myarr.shift();
// console.log(myarr.indexOf(2));
// console.log(myarr.includes(8));
// myarr.reverse();

//Find out the maximum and Minimum value

// let myarr = [-8,1,2000,3,40]
// let max = Math.max(...myarr)
// let min = Math.min(...myarr)
// console.log(max);
// console.log(min);

//Change the array element position

// let myarr = [1,2,3]
// // console.log(myarr.copyWithin(2,0));

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     Student: false,
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       country: "USA"
//     },
//   };
  
//   console.log(person.address);

//display message in object

// let myclient ={
//     firstname:"yash",
//     lastname:"xyz",
//     mgs: function(){
//         console.log("Hello js");
//     },
//     age:25
// }

// myclient.mgs()

// console.log(myclient);

// object key in mgs

// let myclient1 = {
//     firstname:" samruddhi tai",
//     mgs: function(){
//         console.log(this.age);
//     },
//     age:21
// }
// console.log(
// myclient1.mgs()
// );

// myclient.age=21//change data
// myclient.email="yash@gmail.com"//add data

// delete myclient.firstname//delete data


// console.log(myclient);//print object

// console.log(myclient.email);//find data

// console.log("firstname" in myclient);//find in boolean

//Function

// function myfun(){
//     console.log("hello");
// }
// for(let i=1 ; i<=10 ; i++){
//     console.log(myfun());
// }

// function myfun(num1,num2,num3){
//     console.log(num1+num2+num3);
// }
// myfun(5,5,10);

// function myfun(name1,name2,name3){
//     return[name1,name2,name3];
// }
// console.log(myfun("yash","Ankit","Anu"));

//Arrow Function

let myclient = () => {console.log("hello")}; myclient()

// Default function
let myclient1 = () => console.log("yash"); myclient1()

// Parameters function
let myclient2 = (name) => console.log("Hii "+name); myclient2("samruddhi");

//Explicit return 
let add = (num1,num2) =>{
    return num1 + num2
}
console.log(add(5,50));

//Implicit return 

add1 = (num3,num4) => (num3 + num4); console.log(add1(500,500));

let addition = (num4, num5) => console.log(num4 + num5); addition(90,10);

multi = (num6, num7) => num6 * num7; console.log(multi(5,5));

//Anony function syntax

// let myclient3 = function () {
//     console.log("hello javascript ");
// }
// myclient3()

(function () {
    console.log("Hii Javascript");
})

();//call the function excecuted part

