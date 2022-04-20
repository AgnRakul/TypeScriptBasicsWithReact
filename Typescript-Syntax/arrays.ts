const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const twoDimensionalArrays: string[][] = [["ABC"], ["BCA"], ["CAB"]];

// Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

// Preventing Incompatible values
// carMakers.push(100);

// Help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible Types

const importantDates: (Date | string | boolean | number)[] = [
  new Date(),
  "2030-10-10",
  true,
  20031999,
];
