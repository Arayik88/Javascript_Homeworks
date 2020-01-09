function makeTree(arr, prevId, curentObj){
  
  let count = 0;
  for(let i = 0; i < arr.length; ++i){  
  	if(prevId != arr[i].parent){
  		++count;
  	}
  }
  if(count == arr.length){            // Means if current object has no more children
  	return;
  }

	for(let i = 0; i < arr.length; ++i){
      if(arr[i].parent == prevId){
	      let temp = arr[i].id;
	      curentObj[temp] = {};
	      let tempObj = curentObj[temp];
	      makeTree(arr, temp, tempObj);
	    }
  }   
}


let arr = [
	{parent: null, id: 0},
	{parent: 0, id: 1},
	{parent: 0, id: 2},
	{parent: 1, id: 3},
	{parent: 1, id: 4},
	{parent: 2, id: 5},
	{parent: 4, id: 6},
	]

	let curentId = arr[0].id;
  let tree = {[curentId]: {}}
	arr.shift();
makeTree(arr, curentId, tree[curentId]);

console.log(tree);