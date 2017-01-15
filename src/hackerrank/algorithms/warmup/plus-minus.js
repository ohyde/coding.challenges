const arr = [ -4, 3, -9, 0, 4, 1 ];

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
