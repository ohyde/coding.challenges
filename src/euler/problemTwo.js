// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not
// exceed four million, find the sum of the even-valued terms.
import R from 'ramda';
import { isEven } from '../utils/ramdaUtils';

const fibonacci = (n) => {
  if (n < 2) { return 1; }
  else { return fibonacci(n - 2) + fibonacci(n - 1); }
}

const approachOne = () => {
  const fibonacciByRange = R.map(fibonacci, R.range(0, 33)); // Need to include checking for 4000000 instead of using range

  const evenFibonacciNums = R.filter(isEven, fibonacciByRange);

  return R.reduce(R.add, 0, evenFibonacciNums);
}

console.log(approachOne());
