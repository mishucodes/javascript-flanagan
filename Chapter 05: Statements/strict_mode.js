"use strict";

//01. Can't use "let":
let = 0;
console.log(let); //error


//02. Can't implicitly define properties to the global object:
x = 10;
console.log(x); //error


//03. "this" will be undefined (not global):
function fn()
{
    console.log(this); //undefined
}