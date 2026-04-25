//01. Empty Array:
const emptyArray = new Array();
console.log("Empty Array:", emptyArray);


//02. Fixed Array:
const fixedArray = new Array(5);
console.log("Fixed Array's Length:", fixedArray.length); //5

fixedArray.push("alice");
fixedArray.push("bob");
fixedArray.push("candy");
fixedArray.push("david");
fixedArray.push("eliza");
fixedArray.push("fydor");

console.log("Fixed Array:", fixedArray); //very interesting
console.log("Fixed Array's Length:", fixedArray.length); //11


//03. Filled Array:
const filledArray = new Array(1,2,3);
console.log("Filled Array:", filledArray);