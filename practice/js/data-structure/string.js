// string 
//A string in JavaScript is a sequence of characters enclosed in single ('), double ("), or backticks (`). 
//Strings in JavaScript are immutable, meaning their contents cannot be changed after creation. Any operation that modifies a string actually creates a new string.
let s="GFG";
console.log(s[0]);
console.log(S.length);

// length – Returns the number of characters in a string.
let s1 = 'gfg';
console.log(s1.length);

// charAt(index) – Returns the character at the specified index.
// class Geeks {
//     // main function
//     public static void main(String args[])
//     {
//         String s = "abc";

//         char ch = s.charAt(4);
//         System.out.println(ch);
//     }
// }

// slice(start, end) – Extracts a section of a string and returns it as a new string.
let A = 'Geeks for Geeks';
b = A.slice(0, 5);
c = A.slice(6, 9);
d = A.slice(10);

console.log(b);
console.log(c);
console.log(d);
// substring(start, end) – Similar to slice(), but does not accept negative indices.
let text = "JavaScript";

let result = text.substring(0, 4);

console.log(result);
// toUpperCase() / – Converts the string to uppercase or lowercase.
let text = "Hello World";

let result = text.toUpperCase();

console.log(result);

// toLowerCase() 
let text = "HeLLo WoRLd";

let result = text.toLowerCase();

console.log(result);

// split(separator) – Splits a string into an array based on a specified separator.
let str = 'Geeks for Geeks'
let array = str.split("for");
console.log(array);

// includes(substring) – Checks if a string contains a given substring, returning true or false.
let text = "JavaScript is awesome";

let result = text.includes("awesome");

console.log(result);