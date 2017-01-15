//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

import ramda from 'ramda';
import { isPrime } from 'javascript.utility.belt';

export const calculate = (num, func) => {
    let primes = [];
    const half = Math.floor(num / 2);
    let str = '1';
    let i, j;

    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        if (num % i == 0){
          if(func(i)){
            primes.push(i);
          }
        }
    }


  return primes;
}

console.log(calculate(600851475143, isPrime));
