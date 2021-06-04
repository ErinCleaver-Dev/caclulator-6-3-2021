class Calulator {

  constructor(name) {
    this.name = name
    this.result = 0;
  }

  add(num) {
    this.result +=num;
    return this;
  }

  subtract(num) {
    this.result +=num;
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  print() {
    console.log(this.result)
  }
}

// delcare and instantiate class
calulator = new Calulator("My Calulator");

// have fun with the calculator

calulator.add(45).print();
calulator.add(12).print();;
calulator.subtract(15).print();;
calulator.clear().print();;
