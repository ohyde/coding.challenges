const breakDownInput = (input) => {
  const formatedInput = input.split(/\r?\n/);
  for(var i = 1; i < formatedInput.length; i++){
    console.log(parseInt(formatedInput[i]) + 1)
  }
}

const input = "2\n1\n2";

const result = breakDownInput(input);

