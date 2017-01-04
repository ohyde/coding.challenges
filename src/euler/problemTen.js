import R from 'ramda';

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

console.log(R.reduce(R.add, 0, R.filter(isPrime, R.range(0, 2000000))))
