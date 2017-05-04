// WIP

let foundDivisor = false;
const n = 1001;
for(let x = n - 1; x > 1; x--){
  if(!foundDivisor && (n / x) % 2 === 0){
  console.log(x);
    foundDivisor = x;
  }
}
if(!foundDivisor){
  console.log(n);
}
else {
  console.log(foundDivisor);
}
