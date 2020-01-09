function oddDigits(n){
	if(n < 10)
		return (n % 2 !== 0);
  	if((n % 10) % 2 === 0)
   		return false;
	return  oddDigits(Math.trunc(n / 10));
}


console.log(oddDigits(7791));