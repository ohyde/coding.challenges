// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these 
// multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

var N = 1000; 
var arrayOfNumbers = Array.apply(null, {length: N}).map(Number.call, Number)
var mapIndexed = R.addIndex(R.filter);


const multiplesOfThreeAndFive = (numberToCheck) => {
  const checkThree = R.equals((R.modulo(numberToCheck, 3)), 0);
  const checkFive = R.equals((R.modulo(numberToCheck, 5)), 0);
  
  return R.or(checkThree, checkFive);
}

const multiplesFiltered = mapIndexed((item, index) => { 
  if(multiplesOfThreeAndFive(index)) { return index }; 
}, arrayOfNumbers)

R.reduce(R.add, 0, multiplesFiltered); //=> 16
