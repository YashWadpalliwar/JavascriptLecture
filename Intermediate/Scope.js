//SCOPE OF JS

// TYPES OF SCOPE

//Globle Scope

/*
let a = 50;
function Display() {
    console.log("This is a globle variable :-",a);
}
Display();

function Print() {
    console.log("this is a another function :- ",a);
}
Print();
*/

// Local Scope or Variable

/*
function Display() {
    let name = "I Tech";//Local Variable
    console.log(name);
    function Show() {
        console.log(name);
    }
    Show();
}
Display();
*/

//Lexcial 
/*
function Show() {
    let name = "Yash"
    console.log("Hello js");
    function print() {
        console.log(name);
    }
    print()
}

Show()

*/

//Closure
/*
function Outerfunction() {
    let age = 21;
    console.log("Outerfunction");
    function innerfunction()
    {
        console.log("innerfunction");
        function anotherinnerfunction(){
            console.log(age);
        }
        anotherinnerfunction();
    }
    return innerfunction;
    
}
let newfun = Outerfunction();

newfun()
*/

