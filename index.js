const clone = require('./exampleCode/doStuff.js');
const stuff = require('./exampleCode/keepStuff.js');



let newClass = clone(stuff.cohort, stuff.sheps)

console.log(newClass);
