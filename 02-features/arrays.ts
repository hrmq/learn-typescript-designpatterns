const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// two dimentional arrays
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// help with inferrence when extracting values
const car = carMakers[0];

// prevent incompatible values
// carMakers.push(100);

// help with map

carMakers.map((car: string): string => {
  return car;
});

// felxible types
const importantDates = [new Date(), '2030-10-10'];
