const testArray = [ '10',
  '4 that',
  '3 be',
  '0 to',
  '1 be',
  '5 question',
  '1 or',
  '2 not',
  '4 is',
  '2 to',
  '4 the' ];


const splitArray = R.compose(
  R.map(R.head),
  R.map(R.split(' ')),
  R.drop(1)
)(testArray)
