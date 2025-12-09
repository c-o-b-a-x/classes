// in javascript the super keyword is used in a child class to call the constructor, methods, or properties of its parent class.

// "this" refers to this current object
// "super" refers to the parent of the object

// it  can be important to call a parent's constructor

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`hi my name is ${this.name} i am ${this.age} years old`);
  }
  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed}`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runspeed) {
    super(name, age);

    this.runspeed = runspeed;
  }
  run() {
    console.log(`${this.name} can run  `);
    super.move(this.runspeed);
  }
}

class fish extends Animal {
  constructor(name, age, swimspeed) {
    super(name, age);
    this.swimspeed = swimspeed;
  }
  swim() {
    console.log(`${this.name} can swim  `);
    super.move(this.swimspeed);
  }
}
let r = new Rabbit("bunny", 3, 10);
let f = new fish("fishy", 2, 1);
r.print();
f.print();
r.run();
f.swim();
