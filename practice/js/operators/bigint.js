// NigInt operators allow calculations with number beyond the safe integer range 

const big1 = 1234567890123456789012345678901234567890n;
const big2 = 9876543210987654321098765432109876543210n;
// addition
console.log(big1 + big2);

// operations like addition , sub , multi work with bigint 
// use a suffix to denote bigint literals 