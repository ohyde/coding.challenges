const approachOne = (n) => {
  for(let i = 1; i <= n; i++) {
    let stringToPrint = "";
    for(let a = 0; a < (n-i); a++){
        stringToPrint += " ";
    }
    for(let b = 0; b < i; b++){
        stringToPrint += "#";
    }
    console.log(stringToPrint)
  }
}

approachOne(6);
