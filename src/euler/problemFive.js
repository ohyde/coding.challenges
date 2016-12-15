// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
import R from 'ramda';

const approachOne = () => {
  const oneToTen = R.range(2, 10);

  let i = 1;
  const withinRange = (a, b) => {
    if(!a && b > 2) { return a }

    return R.equals(0, R.modulo(i, b))
  }

  while(!R.reduce(withinRange, false, oneToTen)) {
    i++;
  }

  return i;
}

const approachTwo = (min, max) => {
  const gcd = (a, b) => !b ? a : gcd(b, a % b)
  const lcm = (a, b) => (a * b) / gcd(a, b)

  let multiple = min;
  R.forEach((n) => { multiple = lcm(multiple, n) }, R.range(min, max))

  return multiple;
}

console.log(approachOne());
console.log(approachTwo(1, 20));
