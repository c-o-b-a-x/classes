//function product(name, price) {
//  this.name = name;
//  this.price = price;
//  this.displayproduct = function () {
//    console.log(`product:${this.name}, Price:${this.price}`);
//  };
//}

//let prod = new product("shoe", 315);
//prod.displayproduct();

// consturtor funcitons work fine but feel messy

class Product {
  // this is what is automaticlly called when you say new
  // somevar=new produt()
  constructor(name, price) {
    console.log("in");
    this.name = name;
    this.price = price;
  }

  displayproduct() {
    console.log(`product:${this.name}, Price:${this.price}`);
  }
  CalculateTotal(tax) {
    return this.price * tax + this.price;
  }
}

let prod = new Product("lock", 12.99);
prod.displayproduct();

const prod1 = new Product("Thomas", 20);
const prod2 = new Product("James", 20);
const prod3 = new Product("Noah", 20);

let products = [prod1, prod2, prod3, new Product("Dakota", 1)];

console.log("welcome to the store of cmp people");
for (prod of products) {
  prod.displayproduct();
  console.log("this product with tax costs " + prod.CalculateTotal(0.06));
}
//update the class to have a method called CalculateTotal that accepts a tax amount and
// and returns the total cost for the item (including tax)

// Why classes are good:
// reusable
// help organization
// easy to add new methods
// leads to advanced features such as composition and inheritance.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(this.make, this.model, this.year);
  }
  startEngine() {
    console.log(`The engine of the ${this.make} ${this.model} has started`);
  }
}

let car1 = new Car("Dodge", "Challenger", 2024);
car1.displayInfo();
car1.startEngine();
