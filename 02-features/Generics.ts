class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const numArr = new ArrayOfAnything<number>([1, 2, 3]);
const strArr = new ArrayOfAnything(['h', 'i']); // type inference with generic

// Example of Generics in functions
function printAnythig<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printAnythig<string>(['h', 'i']);
printAnythig(['h', 'i']); // type inference

// Generic Constraints
interface Printable {
  print(): void;
}

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

function print<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].print());
  }
}

print([new House(), new Car()]);
