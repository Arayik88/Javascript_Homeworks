function myFunc(num) {
    var x = [num % 10];
    var temp = Math.floor(num / 10);
    while (temp >= 10) {
        x.push(temp % 10);

        temp = Math.floor(temp / 10);
    }

    if(temp >= 1){
        x.push(Math.floor(temp));
    }

    var min = x[0];
    var max = x[0];
    for (var i = 0; i < x.length; ++i){

        if(min > x[i]){
            min = x[i];
        }

        if(max < x[i]){
            max = x[i];
        }
    }

    console.log(max - min);
}

// myFunc(5);