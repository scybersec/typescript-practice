// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
const person = {
  name: "Shimul",
  age: 30,
  hobbies: ["Writing", "Filmmaking"],
};

let favoriteActivities: string[];
favoriteActivities = ['Basketball'];

// console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(favoriteActivities.map()); // !!! ERROR !!!
}
