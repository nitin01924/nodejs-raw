function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
module.exports = { add, sub };

/* for second.js file, stay commented that function while working on first.js otherwise the exports will mixed up and throw error.*/

// function multiple(a,b){
//     return a*b;
// }
// module.exports = multiple;

/** thsi is also a export method in the common js and it is not a default export but it exports only one value whch could be a function, an object, anything. So, in second.js file it will be run becuase it export the multiple function as a value.  */
