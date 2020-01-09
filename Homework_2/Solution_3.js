function fibonacci(num){


	var lastOfLast = 0;
	var last = 1;

	var arr = [lastOfLast, last];

	for( ; ; ){

		var fib = last + lastOfLast;
		if(fib > num){
			break;
		}
		
		arr.push(fib);
		lastOfLast = last;
		last = fib;
	}

	return arr;
}

//console.log(fibonacci(45));