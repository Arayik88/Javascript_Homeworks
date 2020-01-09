function isPrime(num){
    res = "No";
    for(let i = 2; i < num/2; ++i){
        if(num % i == 0){
            res = "Yes";
            break;
        }
    }

    console.log(res);
}
//isPrime(63);
//isPrime(401);