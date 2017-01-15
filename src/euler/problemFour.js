//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

import R from 'ramda';

const intReverse = (intToReverse) => {
  return parseInt(R.toString(intToReverse).split('').reverse().join(''))
}

const rangeOfTwoDigitNumbers = R.reverse(R.range(10,100))
const rangeOfThreeDigitNumbers = R.reverse(R.range(100,1000))

const approachOne = (arrayOfNums) => {
  let result = 0;
  R.forEach((item) => {
    R.forEach((secondItem) => {
      const multiplied = item * secondItem;
      if(multiplied > result){
        if(R.equals(multiplied, intReverse(multiplied))){
          result = multiplied
          console.log(result);
        }
      }

    }, arrayOfNums);
  }, arrayOfNums);

  return result;
}

const approachTwo = (arrayOfNums) => {
  return R.head(R.reduce((agr, item) => {
    const maxNumber = (agr.length !== 0) ? Math.max.apply( Math, agr ) : R.divide(arrayOfNums.length, 2);
    const result = R.reject(R.isNil, R.map((anotherItem) => {
      const multiplied = R.multiply(item, anotherItem);

      if(R.gt(maxNumber, multiplied)) { return; }
      if(R.equals(multiplied, intReverse(multiplied))){ return multiplied; }

      return;
    }, arrayOfNums));

    if(R.gt(result.length, 0)) { return R.union(agr, result) }

    return [Math.max.apply( Math, agr )];
  }, [], arrayOfNums))
}


console.log(approachTwo(rangeOfThreeDigitNumbers));
