// let name = 'Julian';
// console.log(name);
// Cannot use reserved keyword
let firstName = "Julian";
let lastName = "Bowen";
let age = 29;
let isApproved = false;
let middleName = undefined;
let selectedColor = null;

// constants cannot be changed
middleName = "Eric";
const height = "5'6''";
// height = "6'5''"; // Error
let person = {
  firstName: "Julian",
  age: 29,
};
person["firstName"] = "John";
// console.log(person.firstName);

let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);

function greet(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}!`);
}

greet(firstName, lastName);

function square(n) {
  return n ** 2;
}

console.log(square(8));
