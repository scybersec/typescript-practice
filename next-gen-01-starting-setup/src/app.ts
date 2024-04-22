// Code goes here!
const userName = "Max";

let age = 30;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

const add = (a: number = 2 , b: number = 3) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add());

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", event => console.log(event));
}
