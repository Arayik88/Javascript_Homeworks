function oneDArr(arr){
		let newArr = []
    for(let el of arr){
       newArr = newArr.concat(el);
    }

    for(let el of newArr){
       if(Array.isArray(el)){
         return oneDArr(newArr);
       }
    }
    return newArr;
	}

//	console.log(oneDArr([14, [1, [[[3, []]], 1], 0]]));