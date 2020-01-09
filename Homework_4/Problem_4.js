function minPosElement(arr){
	
	if(arr.length === 1){
		if(arr[0] >= 0 && arr[0] < min){
			min = arr[0];
		}
   	return;
	}

	let arr1 = [];
	let arr2 = [];

  for(let i = 0; i < Math.round(arr.length / 2); ++i){
    arr1.push(arr[i]);
  }

  for(let i = Math.round(arr.length / 2); i < arr.length; ++i){
    arr2.push(arr[i]);
  }

	minPosElement(arr1);
	minPosElement(arr2);
}

let min = +Infinity;

minPosElement([-100, 2, 60, 45, -1000, 1, 15, 0, 200, -1]);
console.log(min === +Infinity ? "-1" : min);