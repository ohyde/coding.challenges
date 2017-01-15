import R from 'ramda';

const approachOne = (arr) => {
  var positives = 0;
  var negatives = 0;
  var zeros = 0;
  for(var i = 0; i < arr.length; i++){
    if(Math.sign(arr[i]) === 1){
      positives++;
    }
    if(Math.sign(arr[i]) === -1){
      negatives++;
    }
    if(Math.sign(arr[i]) === 0){
      zeros++;
    }
  }

  console.log((positives / arr.length).toFixed(6));
  console.log((negatives / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}

const approachTwo = (arr) => {
  const objectStructure = { positives: 0, negatives: 0, zeros: 0 }

  const finalObject = R.reduce((acc, item) => {
      return R.evolve({
        positives: (Math.sign(item) === 1) ? R.inc : (x) => x,
        negatives: (Math.sign(item) === -1) ? R.inc : (x) => x,
        zeros: (Math.sign(item) === 0) ? R.inc : (x) => x
      }, acc)
  }, objectStructure, arr);


  console.log((finalObject.positives / arr.length).toFixed(6));
  console.log((finalObject.negatives / arr.length).toFixed(6));
  console.log((finalObject.zeros / arr.length).toFixed(6));
}

const arr = [ -4, 3, -9, 0, 4, 1 ];

approachOne(arr);
approachTwo(arr);
