class Vehicle {
  drive(): void {
    console.log("I am Logger");
  }
}

class Car extends Vehicle {
  honk(): void {
    console.log("I am overide Logim");
  }
}

const car = new Car();
car.drive();
car.honk();
