// inheritance - one of the most important concepts in OOP (Object Oriented Programming).
// inheritance allows one class (the child) to inherit properties and methods from the parent class
// allows for more code reuse

// a parent class will contain general properties and methods
// a child class can use those properties and methods as well as add some that are more specific.

class Animal {
  alive = true;
  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";
  run() {
    if (this.alive) {
      console.log(`${this.name} is Running`);
    } else {
      console.error(`${this.name} is dead`);
    }
  }
}
class Fish extends Animal {
  name = "Fish";
  swim() {
    if (this.alive) {
      console.log(`${this.name} is swimming`);
    } else {
      console.error(`${this.name} is dead`);
    }
  }
}

const r = new Rabbit();
const f = new Fish();

r.eat();
f.sleep();

r.alive = false;
console.log(r.alive);
console.log(f.alive);

r.run();
f.swim();

//r.swim()

// why inheritance- it helps with the DRY principle

class Vehicle {
  wheels = 4;
  start() {
    console.log(`the ${this.type} has started`);
  }
  stop() {
    console.log(`the ${this.type} has stopped`);
  }
}

class car extends Vehicle {
  type = "car";
  honk() {
    console.log("beep beep");
  }
}

class motorcycle extends Vehicle {
  type = "motorcycle";
  wheels = 2;
  putonhelmet() {
    console.log("Helmet is On");
  }
}

c = new car();
m = new motorcycle();

c.start();
c.stop();
c.honk();
m.start();
m.stop();
m.putonhelmet();
console.log(m.wheels);
console.log(c.wheels);
