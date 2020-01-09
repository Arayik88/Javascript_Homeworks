function Freq(arr){
  let length = arr.length;
  arr.sort();
  for(let i = 0; i < length; ++i){
    let temp = arr[i];
    let tempCount = 1;
    while(temp === arr[i + 1]){
            ++tempCount;
            ++i;
    }
    console.log(`${temp}: ${tempCount / length}`);
  }
}

Freq([1, 2, 3, 1, 1]);