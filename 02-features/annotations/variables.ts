const apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;

let nothingMuch: null = null;

// buid in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'bule'];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) function that returns any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare varibale on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

// 3) Varibales whose type cannot be inferred correctly
let numbers = [10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
