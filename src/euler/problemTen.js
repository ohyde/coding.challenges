//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

import R from 'ramda';
import { isPrime } from 'javascript.utility.belt';

const approachOne = (limit) => {
  return R.reduce(R.add, 0, R.filter(isPrime, R.range(0, limit)))
}

console.log(approachOne(2000000));
