import R from 'ramda';

const intReverse = (intToReverse) => {
  return parseInt(R.toString(intToReverse).split('').reverse().join(''))
}

const rangeOfTwoDigitNumbers = R.reverse(R.range(10,100))
const rangeOfThreeDigitNumbers = R.reverse(R.range(100,1000))

const approachOne = () => {
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

    }, rangeOfThreeDigitNumbers);
  }, rangeOfThreeDigitNumbers);

  return result;
}


console.log(approachOne());
