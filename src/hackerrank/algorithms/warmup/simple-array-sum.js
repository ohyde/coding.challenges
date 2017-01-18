import R from 'ramda';

const approachOne = (arr) => {
  return R.reduce((acc, item) => {
      return acc + item;
  }, 0, arr);
}

console.log(approachOne([ 1, 2, 3, 4, 10, 11 ]))
