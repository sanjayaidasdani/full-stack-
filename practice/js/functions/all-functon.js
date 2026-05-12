// named function : function that has its own name where declared.
// it easy to reuse and debug because the name shows up in error 
// messages or stack trace 
function greet(){
    return "hello";
}
console.log(greet());


// //  function express 
// // when you assign a function to a variable 

const add = function(a,b){
    return a+b;
};
console.log(add(2,3));


// // arrow function (ES6)
// // a new way to write function using the => system.
// // they are shorter and do not have their own this binding , which make them useful in same case 
const square = n => n*n;
console.log(square(4));


// // callback function
// // a callback function is passed as an argument to another function and is executed affter the complation of that function 

function num(n,callback){
    return callback(n);
}

const double=(n) => n*2;
console.log(num(5,double));


// // construct function 
// // a special type of function used to create multiple object 
// // with the same structure .
// // it called with the new keyword 
function person(name,age){
    this.name=name;
    this.age=age;
}
const user = new person("sanjay",20);
console.log(user.name);

// // generator function 
// // declare with an asterisk *, these functions can pause
// //execution yield and resume later.
// // sueful for lazy loading values or handling iterators 

// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = numbers();
// console.log(gen.next().value); 
// console.log(gen.next().value);

// // recursive function 
// // a function that calls itself unit a condition is met . vary useful for problems like factorial , fibonacci or tree traversals 

function functional(n){
    if(n==0)return 1;
    return n*functional(n-1);
}
console.log(functional(5));

// // highrt - order function 
// // a function  that either takes another function as a 
// // paramenter or return another function . these are common in js 
function multiplyby(factor){
    return function(mun){
    return mun* factor;
    };
}
const double = multiplyby(2);
console.log(double(5));


// //nested function 
// // functions defined within other function are called nested function . 
// // they have access to the variables of there parent function

function outerFun(a){
    function innerFun(b){
        return a+b;
    }
    return innerFun;
}

const addTen=outerFun(10);
console.log(addTen(5));

// // rest parameter function 
// // uses to call all remaining arguments into an array .
// // very useful when you don't know how many arguments will be passed 

function sum(...nums){
    return nums.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3,4));