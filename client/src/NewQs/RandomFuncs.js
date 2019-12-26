const RandomElement = (arr) => arr[Math.floor(Math.random()*arr.length)];
const RandomInt = (n) => Math.floor(Math.random()*n);

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
const smallPrimes = [2, 3, 5, 7];

const RandomPrime = (t) => t === 'small' ? RandomElement(smallPrimes) : RandomElement(primes);

module.exports = {RandomElement, RandomInt, RandomPrime}

//export default RandomElement;