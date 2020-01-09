function rotate(arr, N){

  let l = N % arr.length;

  if(l === 0){
    return arr;
  }

  arr.push(arr[0]);
  arr.shift();

  return rotate(arr, --l);
}

console.log(rotate([1, 2, 3, 4, 5], 5));