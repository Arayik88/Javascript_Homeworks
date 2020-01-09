function evenDigits(start, end){
    if(start % 2 !== 0)
    ++start;
  if(end % 2 !== 0)
    --end;

  let arr = [];

  Outer: while(start <= end){
    let temp  = start;
    while(temp > 9){
       if((temp % 10) % 2 !== 0){
          start += 2;
          continue Outer;
        }
        temp = Math.trunc(temp / 10);
    }
    if(temp % 2 === 0){
      arr.push(start);
    }
    start += 2;
  }
  console.log(arr.length > 0 ? arr : "Such values do not exist");
}


 evenDigits(99, 199);