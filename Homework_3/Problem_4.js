function lWord(str){

  let regex = /,|-| /g;
  let arr = str.split(regex);

  var max = arr[0];
  for(let i = 0; i < arr.length; ++i){
    if(max.length <= arr[i].length){
      max = arr[i];
    }
  }
  console.log(max);
}

lWord("”Which would be worse - to live as a monster, or to die as a good man?”");
