math.random();
// Math.random();
// Math.random();
math.round(1.2);

// String

let lastName = "Babbar";
lastName.length();

let firstName = new String("Love");

let message = 'This is my first Messafge';
let words = message.split(' ');

console.log(words);

let mess =`This is ${lastname}
my first
message
Thanks for the Opportunity
Regrads
Babbar`;


// Date and Time

let date = new Date();
conslog.log(date);

let date2 = new Date("June 20 1998 07:15");
conslog.log(date2);

let date3 = new Date(1998, 6, 20, 7);
conslog.log(date3);

// Change the Date in Setter and Getter
date3.setFullYear(1947);


// Array :- Object/Refernce types

let numbers  = [1,2,3,4,5];
console.log(numbers)

// Insertion element.

//end -->> push
numbers.push(9);
conslog.log(numbers);

// beginning -->> unshift
numbers.unshift(8);
conslog.log(numbers);

// middle ->> splice

numbers.splice(2,0, 'a', 'b', 'c');
conslog.log(numbers);

// Searching
conslog.log(numbers);
console.log(numbers.indexOf(9));

// We want to check if a number exist in an array

if(number.indexOf((4)!=-1))
    console.log("Present");
console.log(numbers.includes(7));
number.log(numbers.indexOf(4,2));

let courses = [
    {no: 1, name: "Suraj"},
    {no: 2, name: "Love"},
];
console.log(courses);
courses.indexOf({no:1, name:"Suraj"});
conslog.log(courses);

let course = courses.find(coures =>{
    return course.name=="Love";
})

console.log(course);

let number1 = [1,2,3,4,5,6,7];
// end

number1.pop();

conslog.log(number1);

// .beginning
number1.shift();

// middle
number1.slice(2,1);

conslog.log(number1);


// Emptying an Array

let number3 = [1,2,3,4,5,6,7,8];

// I first method
// number3 = [];

// II method
number3.length = 0;

// III method

number3.splice(0,number3.length);
console.log(number3);

//  Combining & Slicing Arrays are aplied the Privitive the Array.
// Combining and the Object

let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);

console.log(combined);

let marks = [10,20,30,40,50,60];

let sliced = combined.splice(2,6);
console.log(sliced);

// Spread Operator

let first1 = [1,2,3];
let second1 = [4,5,6];

let combined1 = [... first, 'a',false, ...second, 'b', true]

// copy the array create

let another = [...combined1];


// Iterating an Array: forOf Loop 

let arr = [10,20,30,40,50];
for(let value of arr){
    console.log(value);
}

arr.forEach(number =>{
    conslog.log(number);
})

// Joining Array

let arr1 = [10,20,30,40,50];
const joined = arr1.join(',');

console.log(joined);

// Joined String to the split method

let messages = "This is my first message";
let part = messages.split(' ');
console.log(part);

// Joined to return

let joined1 = part.join('_');
console.log(joined1);

// Sorting Array:

let nums = [4,3,1,5,2];
let parts = nums.sort();
console.log(parts);

// Reverse Number
nums.reverse();
console.log();


// filtering Arrays

let nums1 = [5,8,6,9,4, -1, -2,-3];
let filtered = nums1.filter(value =>{
    return value>=0;
})
console.log(filtered);

// Mapping Arrays:

let sun = [7,8,9,10];                                                           
let item = sun.map(function(value){
    return "student_no" + value;
})              
console.log(item);


// Changining
















