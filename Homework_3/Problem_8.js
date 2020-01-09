function subSets(arr) {
    if(arr.length < 3){
        console.log(arr);
        return;
    }
    let set = new Set();
    let newArr = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            for (let k = 0; k < arr.length; ++k) {
                let temp = new Set();
                temp.add(arr[i]).add(arr[j]).add(arr[k]);
                if(temp.size === 3){
                    temp = Array.from(temp);
                    temp.sort((a, b) => a - b);
                    temp = JSON.stringify(temp);
                    set.add(temp);
                }
            }
        }
    }
    for (let value of set){
        newArr.push(JSON.parse(value));
    }
    set = null;
    console.log(newArr);
}

subSets([5, 9, 23, 0, -2, -1]);