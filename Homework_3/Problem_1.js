function starX(x){
    let length = 2 * x -1;
    let arr = new Array(length);
    for(let i = 0; i < length; ++i){
       arr[i] = new Array(length);
       for(let j = 0; j < length; ++j){
        arr[i][j] = " ";
       }
       arr[i][i] = "*";
       arr[i][length-1-i] = "*";
       arr[i] = arr[i].join("");
       console.log(arr[i]); 
    }
}
starX(5);