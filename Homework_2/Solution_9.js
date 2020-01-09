function myFunc(a, b, num){
	var arr = [a];
	if(num === 1){
		console.log(arr);
		return;
	}

	var step = (b - a) / (num - 1); 

	for (let i = 1; i < num - 1; ++i) {
		arr.push(arr[i-1] + step);
	}

	arr.push(b);

	console.log(arr);
}

myFunc(1, 5, 1);
//myFunc(1, 5, 6);