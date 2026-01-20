const math = require("./math");

console.log(math.add(5, 7));
console.log(math.sub(5, 7));

/* here the export is module.exports = { add, sub }; and in this export the functions are exported as Object and if i import them as math then they are imported as object, so we have to use math.add and math.sub because they are in a object, add and sub are not the function from their name as add and sub. */

const { add, sub } = require("./math");

console.log(add(5, 7));
console.log(sub(5, 7));
/* similarly when we import the object as object so the functions can be used as their name as add and sub, because now, there is not any object bounding  */
