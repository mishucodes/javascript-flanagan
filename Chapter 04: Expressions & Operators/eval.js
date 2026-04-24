const evalAlias = eval;
globalThis.x = "global";

function fnEval()
{
    let x = "local";
    eval("x += 'changed'");
    return x;
}

function fnEvalAlias()
{
    let x = "local";
    evalAlias("x += 'changed'");
    return x;
}


console.log(fnEval());
console.log(x);
console.log(fnEvalAlias());
console.log(x);


//Explanation: eval() used normally uses local-scope, but if called via an alias, uses the global-object.