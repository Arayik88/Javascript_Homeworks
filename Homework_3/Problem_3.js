function Count(arr){
  let countOfNumbers = 0;
  let countOfStrings = 0;

  for(let i = 0; i < arr.length; ++i){
    if(typeof arr[i] === "string"){
      ++countOfStrings;
    }
    else if (typeof arr[i] === "number"){
      ++countOfNumbers;
    }
  }
  console.log(`Numbers: ${countOfNumbers}, Strings: ${countOfStrings}`);
}

//Count([1, 4, 'i am string', '456']);