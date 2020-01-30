class Vehicle {
  drive(): void {
    console.log('Chuga Chuga');
  }

  honk(): void {
    console.log('Beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
