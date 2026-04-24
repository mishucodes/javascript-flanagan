//01. How Symbols behave in Objects:
const obj =
{
    a: "Alice",
    b: "Bob",
    c: "Candy",
    [Symbol("d")]: "David"
};

console.log(obj); //includes symbol
Object.entries(obj).forEach(x => console.log(x)); //does not include symbol


//02. Using Symbols like normal variables:
const x = Symbol.for("x");
const y = Symbol.for("x");
console.log(x === y); //true