// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
import R from 'ramda';
import { gcd, lcd } from '../utils/ramdaUtils';

const approachThree = (min, max) => {
  return R.reduce(lcm, 1, R.range(min, max));
}

const approachTwo = (min, max) => {
  let multiple = min;
  R.forEach((n) => { multiple = lcm(multiple, n) }, R.range(min, max))

  return multiple;
}

const approachOne = () => {
  let i = 1;
  const withinRange = (a, b) => {
    if(!a && b > 2) { return a }
    return R.equals(0, R.modulo(i, b))
  }

  while(!R.reduce(withinRange, false, R.range(2, 10))) { i++; }

  return i;
}

console.log(approachThree(1, 20));
console.log(approachOne());
console.log(approachTwo(1, 20));
