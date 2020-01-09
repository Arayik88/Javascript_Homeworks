function myFunc(arr){
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    newArr.sort(function(a, b){
        return a - b;
    });

    for (let i = 0; i < arr.length; i++) {
        if(newArr[newArr.length-2] === arr[i]){
            console.log(i);
            return;
        }
    }
}

//var arr = [23, -98, 0, -456, 12, 8];

//myFunc(arr);
