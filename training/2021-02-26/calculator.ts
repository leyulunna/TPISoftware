function myCalculator(num1: number, num2: number, type: string) {
  switch (type) {
    case "+":
      var result = num1 + num2;
      console.log(result);
      return result;
    case "-":
      var result = num1 - num2;
      console.log(result);
      return result;
    case "*":
      var result = num1 * num2;
      console.log(result);
      return result;
    case "/":
      var result = num1 / num2;
      console.log(result);
      return result;
    default:
      console.log("Sorry, it couldn't be computed by this calculator :(");
      return NaN;
  }
}
