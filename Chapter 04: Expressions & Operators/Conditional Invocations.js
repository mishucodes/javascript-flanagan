//We can invoke functions conditionally (ES2020). However, it only works if the invoked value is null or undefined. For Example:

const fn1 = []; //TypeError
// fn1?.();


const fn2 = null; //undefined
fn2?.();