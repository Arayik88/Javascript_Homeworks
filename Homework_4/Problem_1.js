function largeNumbers(arr, n){
	let lArray = [];
	let length = arr.length;
	for (let i = 0; i < length; i++){
		if(arr[i] > n)
			lArray.push(arr[i]);
	}
	console.log(lArray.length > 0 ? lArray : "Such values do not exist");
}


largeNumbers([10, 25, 16, -5, 30, 15, 24], 16);