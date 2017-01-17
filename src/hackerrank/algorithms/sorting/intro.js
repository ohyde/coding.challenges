import R from 'ramda';

const approachOne = (input) => {
  const content = input.split(/\r?\n/);

  const list = content[2].split(" ");
  const v = content[0];


  return R.findIndex((item) => item === v, list);
}

const testString = "4\n6\n1 4 5 7 9 12"

console.log(approachOne(testString));
