const RandomElement = (arr) => arr[Math.floor(Math.random()*arr.length)];
const RandomInt = (n) => Math.floor(Math.random()*n);

const elementsFrom = (n, arr) => {
    if (arr.length === n) {return arr}
    if (arr.length > n) {return distinctElementsFrom(n, arr)}
    var list = [];
    while (list.length<n) {
        list = [...list, ...arr];
    }
    return list.slice(0, n)
}

const distinctElementsFrom = (n, arr) => {
    var list = [];
    if (arr.length<=n) {return arr}
    while (list.length<n) {
        list.push(RandomElement(arr.filter(x=>list.indexOf(x)===-1)))
    }
    return list
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
const smallPrimes = [2, 3, 5, 7];

const RandomPrime = (t) => t === 'small' ? RandomElement(smallPrimes) : RandomElement(primes);
const distinctPrimes = (n, t) => t === 'small' ? 
            distinctElementsFrom(n, smallPrimes) : distinctElementsFrom(n, primes);

module.exports = {RandomElement, RandomInt, RandomPrime, elementsFrom, distinctElementsFrom, distinctPrimes}

//export default RandomElement;