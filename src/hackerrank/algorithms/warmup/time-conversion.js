const convertTo24Hour = (input) => {
  const amOrPm = R.slice(8, 10, input);
  const hours = R.slice(0, 2, input);
  const minutesSeconds = R.slice(2, 8, input)

  if(hours === '12' && amOrPm === 'PM'){
    return '12' + minutesSeconds;
  }
  
  if(hours === '12' && amOrPm === 'AM'){
    return '00' + minutesSeconds;
  }
  
  if(amOrPm == 'AM'){
    return hours + minutesSeconds;
  }

  const newHours = parseInt(hours) + 12;
  
  return newHours + minutesSeconds;
}

convertTo24Hour('12:40:22AM')

