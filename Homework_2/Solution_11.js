function myFunc(arr, padAmount, repeat){

	if(padAmount > arr.length){
		alert("Invalid padding amount");
		return
	}
	
	tempArrStart = [];
	tempArrEnd = [];

	for (let i = 0; i < repeat; i++) {

		for(let j = 0; j < padAmount; ++j){

			tempArrStart.push(arr[j]);
			tempArrEnd.push(arr[arr.length-1-j]);

		}
	}

	//alert(tempArrStart);
	//alert(tempArrEnd);

	tempArrEnd.reverse();

	var res = tempArrStart.concat(arr, tempArrEnd);

    console.log(res);
}

var arr = [1, 2, 3, 4];
var padAmount = 1;
var repeat = 3;
myFunc(arr, padAmount, repeat);