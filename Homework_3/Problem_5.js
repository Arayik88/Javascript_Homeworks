function subStr(str){

  let maxStr = "";
  for(let i = 0; i < str.length; ++i){
    let temp = str.substring(i);
    let tempMaxStr = "";
    inner: for(let j = 0; j < temp.length; ++ j){
      var reg = new RegExp(temp.charAt(j));
      if(!tempMaxStr.match(reg) || temp.charAt(j) == " "){
         tempMaxStr += temp.charAt(j);
      }
     else{
       break inner;
     }
     if(maxStr.length <= tempMaxStr.length){
       maxStr = tempMaxStr;
     }
    }
  }
  console.log(maxStr);
}

//subStr("there are no two words in the english language more harmful than ”good job”.");