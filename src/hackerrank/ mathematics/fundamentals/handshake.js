function processData(input) {
  if(input == 1){ return 0 };
  if(input == 2){ return 1 };
  
  let total = 0;
  let remaining = input;
  for(let i = 1; i < input; i++){
    for(let x = 0; x < (remaining - i); x++){
      total = total + 1;
    }
  }
  return total;
}



let arrayOfInputs = [5277,9302,7274,3,5968,1327,255,27,5665,8104,138,4051,4168,507,7773,2688,3497,4074,1403,3599,2007,7621,3124,1195,7245,1979,3365,6607,4816,9336,3620,1557,3404,5451,3739,2504,1845,5533,8298,2893,7814];

processData(9302)
