const input = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

let leftTotal = 0;
let rightTotal = 0;

for(let i = 0; i < input.length; i++){
  leftTotal += input[i][i];
  rightTotal += input[i][input.length - (i + 1)];
}

console.log(Math.abs(leftTotal - rightTotal))