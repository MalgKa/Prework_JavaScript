class Vehicle {
  constructor(type, name, hp) {
    this.type = type;
    this.name = name;
    this.hp = hp;
  }

  printInfo() {
    console.log(this.type);
    console.log(this.name);
    console.log(this.hp);
    console.log("-".repeat(20));
  }
}

const boat = new Vehicle("yacht", "Aquaholic", 150);
const car = new Vehicle("Tesla", "Chinchilla", 500);
const plane = new Vehicle("Boeing", "747", 10000);

boat.printInfo();
car.printInfo();
plane.printInfo();
