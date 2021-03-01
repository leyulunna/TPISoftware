// Tests
console.log(myCalculator(1, 2, "+") === 3);
console.log(myCalculator(4, 8, "-") === -4);
console.log(myCalculator(-1, -2, "*") === 2);
console.log(myCalculator(9, -3, "/") === -3);
console.log(isNaN(myCalculator("30", 0, "+")));
console.log(isNaN(myCalculator(20, "1", "/")));
console.log(isNaN(myCalculator(0, 0, "/")));

function myCalculator(num1, num2, type) {
  // Base cases
  if (typeof num1 === "string") {
    return NaN;
  }
  if (typeof num2 === "string") {
    return NaN;
  }
  if (type === "/" && num2 === 0) {
    return NaN;
  }

  switch (type) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.log("Sorry, it couldn't be computed by this calculator :(");
      return NaN;
  }
}
