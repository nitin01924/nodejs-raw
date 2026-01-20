//  These are the default export
//1.
// function add(a, b) {
//   return a + b;
// }
// export default add;

//2.
// export default function add(a, b) {
//   return a + b;
// }

// Named exports are start form here,

//1.
// export function add(a, b) {
//   return a + b;
// }
//2.
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// export {add};
export { add, sub };
