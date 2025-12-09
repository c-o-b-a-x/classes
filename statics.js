class Candybar {
  static totalCandyBars = 0;
  constructor(desc, calories) {
    this.desc = desc;
    this.calories = calories;
    Candybar.totalCandyBars += 1;
  }
  static healthier(candybar1, candybar2) {
    if (candybar1.calories < candybar2.calories) return candybar1;
    else {
      return candybar2;
    }
  }
}

let cb = new Candybar("snickers", 300);
let cb2 = new Candybar("Milkyway", 270);

console.log(cb);
console.log(cb2);
console.log(Candybar.healthier(cb2, cb));
// note use the class name for this

console.log(Candybar.totalCandyBars + "<- total CB");

class mathutil {
  static pi = 3.14159;
  static getdiameter(radius) {
    return radius * 2;
  }
}

console.log(mathutil.pi);
console.log(mathutil.getdiameter(3.14));
