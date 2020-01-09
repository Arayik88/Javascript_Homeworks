function nonSortedElement(arr){
	for(let i = 1; i < arr.length; ++i){
		if(arr[i] < arr[i-1])
			return i;
	}

	return -1;
}

console.log(nonSortedElement([-9, -4, -4, 3, 12, 4, 5]));