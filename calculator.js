/* first example
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
*/

// now with constructor new

function Calculator() {
    this.read = function() {
        this.a = +prompt("a?");
        this.b = +prompt("b?");
    },
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );