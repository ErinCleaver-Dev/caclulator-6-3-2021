class Calulator {

  constructor(name) {
    this.name = name
    this.result = 0;
  }

  add(num) {
    this.result +=num;
  }

  subtract(num) {
    this.result +=num;
  }

  clear() {
    this.result = 0;
  }

  print() {
    console.log(this.result)
  }
}

// delcare and instantiate class
calulator = new Calulator("My Calulator");

// have fun with the calculator

calulator.add(45);
calulator.print();
calulator.add(12);
calulator.print();
calulator.subtract(15);
calulator.print();
calulator.clear();
calulator.print();