// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these 
// multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
import R from 'ramda';

const arrayOfNumbers = Array.apply(null, {length: 1000}).map(Number.call, Number)
const mapIndexed = R.addIndex(R.filter);

const approachOne = () => {
	const multiplesOfThreeAndFive = (numberToCheck) => {
	  const checkThree = R.equals((R.modulo(numberToCheck, 3)), 0);
	  const checkFive = R.equals((R.modulo(numberToCheck, 5)), 0);
	  
	  return R.or(checkThree, checkFive);
	}

	const multiplesFiltered = mapIndexed((item, index) => { 
	  if(multiplesOfThreeAndFive(index)) { return index }; 
	}, arrayOfNumbers)

	return R.reduce(R.add, 0, multiplesFiltered);
}




const approachTwo = () => {
	const checkModulos = (i) => { return R.or(R.modulo(i, 3) === 0, R.modulo(i, 5) === 0); }

	return R.sum(R.filter(checkModulos, arrayOfNumbers));
}


console.log(approachOne(arrayOfNumbers));
console.log(approachTwo(arrayOfNumbers));