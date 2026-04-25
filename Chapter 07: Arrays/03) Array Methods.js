const array = [1,2,3];


//01) forEach: good for side-effects:
console.log(array.forEach(i => i*10)); //undefined
console.log(array); //[1,2,3]
array.forEach(i => console.log(i)); //res loq


//02. Map: the goat:
console.log(array.map(i => i*10)); //[10,20,30]