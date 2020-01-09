function sumOfDigits(number){ // first version
  if(number < 10){
    return number;
  }
  


  let temp = 0;

  while(number != 0){
     temp += number % 10;
     number = Math.floor(number / 10);
  }

  return sumOfDigits(temp);
}

function sumOfDigits(number){ // second version

	if(number < 10){
		return number;
	}
 
    return (number % 9 || 9);
}