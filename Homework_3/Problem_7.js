function negNum(arr) {
    let length = arr.length;
    let countOfNeg = 0;
    let mult = 1;

    for (let i = 0; i < length; i++) {
        if (!Array.isArray(arr[i])) {
            console.log("Invalid Arguments");
            return;
        }

        arr[i].sort();

        let maxNeg = arr[i][0];

        for (let j = 0; j < arr[i].length; j++) {
            if(maxNeg < arr[i][j] && arr[i][j] < 0){
                maxNeg = arr[i][j];
                ++countOfNeg;
            }
        }
        if(maxNeg < 0){
            mult *= maxNeg;
        }
    }

    if(countOfNeg === 0){
        console.log("No Negatives.");
        return;
    }

    return mult;
}

console.log(negNum([[2, -9, -3], [1, 2], [-4, -11, 0]]));
