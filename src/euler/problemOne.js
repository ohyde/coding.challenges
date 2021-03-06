// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these
// multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
import R from 'ramda';

export const approachOne = (limit) => {
  const multiplesOfThreeAndFive = (numberToCheck) => {
    const checkThree = R.equals((R.modulo(numberToCheck, 3)), 0);
    const checkFive = R.equals((R.modulo(numberToCheck, 5)), 0);

    return R.or(checkThree, checkFive);
  }

  const indexedFilter = R.addIndex(R.filter);
  const multiplesFiltered = indexedFilter(multiplesOfThreeAndFive, R.range(0, limit))

  return R.reduce(R.add, 0, multiplesFiltered);
}

export const approachTwo = (limit) => {
  const checkModulos = (i) => { return R.or(R.modulo(i, 3) === 0, R.modulo(i, 5) === 0); }

  return R.sum(R.filter(checkModulos, R.range(0, limit)));
}

export const approachThree = (limit) => {
  const dividedBy = R.curry((by, to) => {
    return R.compose(
       R.equals(R.__, 0),
       R.modulo(to)
    )(by)
  })

  return R.compose(
    R.sum,
    R.filter(R.either(dividedBy(3), dividedBy(5))),
    R.range(1)
  )(limit);
}
