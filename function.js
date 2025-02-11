console.log("How are you")

// function create

function run(){
    console.log("Code is the running");
}
// function call and enboke
run();

// hosting :- The hosting is the declare to top through the Automatically by JS engine
// JS


// Named function Assignment
let stand = function walk(){
    console.log("Walking");
};
// Anonymous function Assignment
let stand2 = function walk(){
    console.log("Walking");
};

stand();

stand2();


let jump = stand;

jump();

let x = 1;
x = "a";
console.log(x);

function sum(){
    let total = 0;
    for(let value of arguments)
        total +=value; 
    // console.log(arguments);
    // return a+b;
    return total;
};
console.log(sum(1,2));
console.log(sum(1,2,3,5));

// Special object :- Arrgument

let ans = sum(1,2,3);
console.log(ans);

// Rest Operator :-> ...

function add(nums, value,...args){
    console.log(args);
}

add(1,2,3,4,5,6,7,8);

// Default Parameters.

function interest(p,r,y){
    return p*r*y/100;
}

console.log(interest(1000,2,5))



let person ={
    fName : "Suraj",
    lName : "Kumar"
};
console.log(person);

function fullName() {
    return `${person.fName} ${person.lName}`;
}
console.log(fullName());

// try{
//     person.fullName = true;
// }
// catch(e){
//     alert("You have sent a number in full name");
// }
// console.log(person.fullName);

/*
 Scope : There are two types of the Scope
 1. Let
 2. Var

*/

{
    var a= 5;
    console.log(a);
}
console.log(a);

// for(var i=0; i<=10; i++){

// }
// console.log(i);

function a(){
    const a=5;
}
const ab = 5
function b(){
    const ab=5;
}


// Reducing an Array : -->>

let arr = [1,2,3,4,5,6,7];
let total = 0;
for(let value of arr){
    total += value;
}
console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);






