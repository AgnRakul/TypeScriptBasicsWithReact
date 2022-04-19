let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in Objects
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "green", "blue", "yellow"];
let myNumber: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = { x: 10, y: 10 };

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use Annotations
// 1) Function return any types;
const json = '{"x":10, "y":10}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable in one line
// and initalizate it later
let words = ["a", "b", "c", "d", "e"];
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "c") {
    foundWords = true;
  }
}

// 3) Variable whose types cannot be inferred correctly
let number = [-10, -2, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
    console.log(numberAboveZero);
  }
}
