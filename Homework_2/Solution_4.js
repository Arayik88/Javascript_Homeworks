function myFunc(num){
	var str = num + "";
	var arr = str.split("");

	var sum = 0;
	var prod = 1;

	for (let i = 0; i < str.length; ++i) {
		if(Number(str[i]) === 0){
			console.log("Cannot calculate.");
			return;
		}
		sum += Number(str[i]);
		prod *= Number(str[i]);
	}

	console.log((prod % sum === 0) ? `Quotent is ${prod / sum} .` : `Remainder is ${prod % sum} .`);
}

myFunc(1233);