function newStr(str){
  let newString = "";
  let i = 0; 
    while(i <= str.length - 3){
      let temp = str.substring(i, i + 3);
      newString += temp.substring(1, 3);
      newString += temp.charAt(0);
      i += 3;
    }
 console.log(newString);
}

newStr("aweyoolp"); // must be "weaooy", so in problem 6 there is a mistake
