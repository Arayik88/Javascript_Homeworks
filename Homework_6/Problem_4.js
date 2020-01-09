function makeSubStrings(word, n){

	if(n >= word.length){
		return word;
	}
	
	let i = 0;
	let arr = [];

	while(i + n <= word.length){
		arr.push(word.substring(i, i + n));
    ++i;
	}

	return arr;
}
