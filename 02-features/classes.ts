class Vehicle {
  drive(): void {
    console.log('Chuga Chuga');
  }

  honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('Vroom');
  }
}

const car = new Car();
car.drive();
car.honk();
