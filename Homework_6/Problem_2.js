function makeSequence(arr){
	let min, max;
	min = max = arr[0];

	for(let i = 1; i < arr.length; ++i){
		
		if(arr[i] < min){
			min = arr[i];
		}

		if(arr[i] > max){
			max = arr[i];
		}
	}

	return (((max - min) +1) - arr.length);
}