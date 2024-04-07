const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Shimul",
  age: 30,
  hobbies: ["Writing", "Filmmaking"],
  role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'admin']
let favoriteActivities: string[];
favoriteActivities = ["Basketball"];

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(favoriteActivities.map()); // !!! ERROR !!!
}
