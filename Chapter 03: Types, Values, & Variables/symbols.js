const obj =
{
    a: "Alice",
    b: "Bob",
    c: "Candy",
    [Symbol("d")]: "David"
};

console.log(obj);
Object.entries(obj).forEach(x => console.log(x));