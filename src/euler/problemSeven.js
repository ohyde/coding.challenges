//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

import R from 'ramda';
import { isPrime } from 'javascript.utility.belt';

// apparently all primes comes from a pool of 6 +/- 1 after 3
const approachOne = (target) => {
  let primeArray = [2,3];
  for (var n = 6; primeArray.length < target; n += 6) {
    if (isPrime(n-1)) primeArray.push(n-1);
    if (isPrime(n+1)) primeArray.push(n+1);
  }

  return primeArray[target-1];
}

console.log(approachOne(10001));
