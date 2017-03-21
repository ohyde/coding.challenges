const array = [1,2,3,5,4];

const sortedInputs = R.sort(R.gt, array);

const smallestFour = R.take(4, sortedInputs);
const largestFour = R.takeLast(4, sortedInputs);

const addArray = R.reduce(R.add, 0);

const smallestTotal = addArray(smallestFour);
const largestTotal = addArray(largestFour);

console.log(smallestTotal);
console.log(largestTotal);