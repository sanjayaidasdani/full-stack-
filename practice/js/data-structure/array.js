//array
//array is an ordered list of values . 
// each value known as an element is assigned a numeric position in the array called its index 

// Creating an Empty Array
let a = [];
console.log(a);

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);


// modifiying the array element 

// Creating an Array and Initializing with Values
let c = ["HTML", "CSS", "JS"];
console.log(a);

c[1]= "Bootstrap";
console.log(c);


//accessing the last element of an array 

// Creating an Array and Initializing with Values
let d = ["HTML", "CSS", "JS"];

// Accessing Last Array Elements
let lst = d[d.length - 1];

console.log("Last Item: ", lst);


// remove elements from array 
// The pop() method removes an element from the last index of the array.
// The shift() method removes the element from the first index of the array.
// The splice() method removes or replaces the element from the array.

// Creating an Array and Initializing with Values
let e = ["HTML", "CSS", "JS"];
console.log("Original Array: " + e);

// Removes and returns the last element
let lst = e.pop();
console.log("After Removing the last: " + e);

// Removes and returns the first element
let fst = e.shift();
console.log("After Removing the First: " + e);

// Removes 2 elements starting from index 1
e.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + e);



// arrey length 

let len = c.length;

console.log("Array Length: " + len);