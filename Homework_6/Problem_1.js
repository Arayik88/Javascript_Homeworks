function biggestProduct(arr){
	let tempSum;
	let sum = arr[0] * arr[1];

	for(let i = 1; i < arr.length - 1; ++i){
		tempSum = arr[i] * arr[i+1];
		if(sum < tempSum){
			sum = tempSum;
		}
	}

	return sum;
}