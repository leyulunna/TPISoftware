// Note: Avoid deep nesting
// 1. Function Definition (Input, Output)
// 2. Base case (Validate user inputs or quick determination)
// 3. Main Logic
// 4. Return

function isPrime(p) {
  if (p <= 1) {
    return false;
  }
  if (p === 2) {
    return true;
  }
  // Handle all even cases.
  if (p % 2 === 0) {
    return false;
  }
  for (let b = 3; b <= Math.sqrt(p); b++) {
    if (p % b === 0) return false;
  }
  return true;
}

// 1. Upload folder
// 3. Why 5 works?

// debugger;
console.log(isPrime(-30) === false);
console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(5) === true); // Why it works?
console.log(isPrime(11) === true);
console.log(isPrime(49) === false);
console.log(isPrime(97) === true);
console.log(isPrime(2) === true);
