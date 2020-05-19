// TYPE ANNOTATION

let apples: number = 5; // we indicate variable apples has a type of number. If we assign anything other than number to apples, TS will give us an error
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
// The part after colon : is called type annotation. Ex: { x: number; y: number }
// whatever assign to point has to have 2 fields named x, y and x, y have to be number
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// TYPE INFERENCE

let strawberries = 5;

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3) When we want a variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
