"use strict"
function Calculator() {
  this.calculate = function (operationString) {
    let arrOperationSplit = [];
    arrOperationSplit = operationString.split(" ");
    let operandA = +arrOperationSplit[0];
    let operandB = +arrOperationSplit[2];
    let charOperationTypeKey = arrOperationSplit[1];
    return this[charOperationTypeKey](operandA, operandB);
  };
  this["+"] = function (a, b) {
    return a + b;
  }
  this["-"] = function (a, b) {
    return a - b;
  }
  this.addMethod = function(charOperationTypeKey, methodToAdd) {
    this[charOperationTypeKey] = methodToAdd;
  };
}

let basicCalculator = new Calculator;

alert( basicCalculator.calculate("3 + 7") ); // 10
alert( basicCalculator.calculate("23 - 17") ); // 6

let extendableCalculator = new Calculator;
extendableCalculator.addMethod("*", (a, b) => a * b);
extendableCalculator.addMethod("/", (a, b) => a / b);
extendableCalculator.addMethod("**", (a, b) => a ** b);
extendableCalculator.addMethod(">", (a, b) => a > b);
extendableCalculator.addMethod(">=", (a, b) => a >= b);
extendableCalculator.addMethod("==", (a, b) => a == b);
extendableCalculator.addMethod("<=", (a, b) => a <= b);
extendableCalculator.addMethod("<", (a, b) => a < b);

function drawTriangle(n, m) {
  return "hi";
}
extendableCalculator.addMethod("drawRectAxB", (a, b) => drawTriangle(a, b));

let result = extendableCalculator.calculate("2 ** 3");
alert( result ); // 8
alert( extendableCalculator.calculate("2 > 3"));
alert( extendableCalculator.calculate("2 drawRectAxB 3"));

