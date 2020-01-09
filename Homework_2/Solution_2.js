function fibonacci(num){

	if(num === 0){
		return 0;
	}

	if(num === 1){
		return 1;
	}

	var lastOfLast = 0;
	var last = 1;

	for(let i = 2; i <= num; ++i){

		var fib = last + lastOfLast;

		lastOfLast = last;
		last = fib;
	}

	return fib;

}

//console.log(fibonacci(10));