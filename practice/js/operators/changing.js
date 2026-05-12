// optional chaining operator allows safe access to
// to deeply nested properties without throwing error
// id the property doesn't exist

const onj ={name:"sanjay",age:25, address:{city:"delhi",country:"india"}};

console.log(onj?.address?.city);
console.log(onj?.contact?.phone); 