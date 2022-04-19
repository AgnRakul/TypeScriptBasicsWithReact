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
