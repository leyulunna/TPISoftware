// Tests
console.log(isPrime(-30) === false);
console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(5) === true);
console.log(isPrime(11) === true);
console.log(isPrime(49) === false);
console.log(isPrime(97) === true);
console.log(isPrime(2) === true);

function isPrime(p) {
  // Base Cases
  if (p <= 1) {
    return false;
  }
  if (p === 2) {
    return true;
  }
  if (p % 2 === 0) {
    return false;
  }

  for (let b = 2; b <= Math.sqrt(p); b++) {
    if (p % b === 0) return false;
  }

  return true;
}
