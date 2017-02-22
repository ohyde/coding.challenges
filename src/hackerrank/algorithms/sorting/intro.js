import R from 'ramda';

const breakDownInput = (input) => {
  const content = input.split(/\r?\n/);
  const list = content[2].split(" ");
  const v = content[0];
  
  return { content, list, v }
}

const approachOne = (input) => {
  const data = breakDownInput(input);
  return R.findIndex((item) => item === data.v, data.list);
}

const approachTwo = (input) => {
  const data = breakDownInput(input);
  return R.indexOf(data.v, data.list);
}



const testString = "4\n6\n1 4 5 7 9 12"

console.log(approachOne(testString));
console.log(approachTwo(testString));
