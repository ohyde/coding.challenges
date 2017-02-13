const splitArray = R.compose(
  R.map(R.head),
  R.map(R.split(' ')),
  R.drop(1)
)(testArray)
