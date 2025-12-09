// getter and setters provide a safer way to update properties of an object

class rectangle {
  constructor(width, height) {
    // while these look like standard assignment actualy using the setters
    this.width = width;
    this.height = height;
  }
  set width(newwidth) {
    if (newwidth > 0) this._width = newwidth;
    else {
      console.error("width must be a positive number");
      this._width = 0;
    }
  }
  set height(newheight) {
    if (newheight > 0) this._height = newheight;
    else {
      console.error("height must be a positive number");
      this._height = 0;
    }
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  get area() {
    return this.width * this.height;
  }
}

const rect = new rectangle(25, 2);
console.log("rectangle width:", rect.width);
console.log("rectangle height:", rect.height);
console.log("area", rect.area);

class person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
  set fname(newfname) {
    if (typeof newfname === "string" && newfname.length > 0) {
      this._fname = newfname;
    } else {
      console.error("Fname must be a string with 1 or more characters ");
    }
  }
  set lname(newlname) {
    if (typeof newlname === "string" && newlname.length > 0) {
      this._lname = newlname;
    } else {
      console.error("lname must be a string with 1 or more characters ");
    }
  }
  set age(newage) {
    if (typeof newage === "number" && newage >= 0) {
      this._age = newage;
    } else {
      console.error("Invalid age");
    }
  }
  get fname() {
    return this._fname;
  }
  get lname() {
    return this._lname;
  }
  get age() {
    return this._age;
  }
}

const tony = new person("tony", "spencer", -5); //invalid age
const matt = new person("matt", 12, 18); // invalid lname
