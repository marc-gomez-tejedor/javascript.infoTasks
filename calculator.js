// ...Your code...
let calculator = {
  read() {
    this.a = +prompt("enter number a");
    this.b = +prompt("enter number b");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    let m = this.a * this.b;
    return m;
  }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );