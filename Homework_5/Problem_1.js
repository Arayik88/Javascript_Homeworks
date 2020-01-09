function unshift(arr, start = 1, newArr = []){
	
	if(start > arr.length - 1){
		return newArr;
	}

	newArr.push(arr[start++]);

	return unshift(arr, start, newArr);
}

unshift([6, 78, 'n', 0, 1]);