function solveQuadratic(a, b, c) {
  var discriminant = b * b - 4 * a * c;
  var roots = [];
  if (discriminant > 0) {
    roots.push((-b + Math.sqrt(discriminant)) / (2 * a));
    roots.push((-b - Math.sqrt(discriminant)) / (2 * a));
  } else if (discriminant === 0) {
    roots.push(-b / (2 * a));
  } else {
    var realPart = -b / (2 * a);
    var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
    roots.push(realPart + " + " + imaginaryPart + "i");
    roots.push(realPart + " - " + imaginaryPart + "i");
  }
  return roots;
}
function getValidNumber(promptMessage) {
  var number;
  do {
    var input = prompt(promptMessage);
    number = parseFloat(input);
  } while (isNaN(number));
  return number;
}
var a = getValidNumber("Enter the coefficient 'a': ");
var b = getValidNumber("Enter the coefficient 'b': ");
var c = getValidNumber("Enter the constant term 'c': ");
var roots = solveQuadratic(a, b, c);
console.log("Quadratic Equation: " + a + "x² + " + b + "x + " + c);
if (roots.length === 2) {
  console.log("Two real and distinct roots: ");
  console.log("x₁: " + roots[0]);
  console.log("x₂: " + roots[1]);
} else if (roots.length === 1) {
  console.log("One real root (repeated): ");
  console.log("x: " + roots[0]);
} else {
  console.log("Complex roots: ");
  console.log("x₁: " + roots[0]);
  console.log("x₂: " + roots[1]);
}
