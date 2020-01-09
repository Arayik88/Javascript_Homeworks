function makeAcronym(phrase){
	
	let arr = phrase.split(" ");

	let acronym = "";

	for(let i = 0; i < arr.length; ++i){
		acronym += arr[i][0].toUpperCase();
	}

	return acronym;
}

