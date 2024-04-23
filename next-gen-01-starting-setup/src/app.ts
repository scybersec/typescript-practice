// Code goes here!
// const userName = "Max";

// let age = 30;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 3) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Sports", "Cooking", "Reading", "coding", "meditating"];

const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: "Shimul",
  age: 24,
};

const copiedPerson = { ...person };

console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 34, 3.5);
console.log(addedNumbers);

const [hobby1, hobby2, ...extraHobbies] = hobbies;

console.log(hobby1);
console.log(hobby2);
console.log(extraHobbies);

const { firstName: userName, age} = person; 

console.log(userName, age);


