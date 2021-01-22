const clone = require('./exampleCode/doStuff.js');
const stuff = require('./exampleCode/keepStuff.js');
const cohort = stuff.cohort;
const sheps = stuff.sheps;

let newClass = clone(cohort, sheps);

console.log(newClass);