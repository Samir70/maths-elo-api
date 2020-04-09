export const RandomElement = (arr) => arr[Math.floor(Math.random()*arr.length)];
export const RandomInt = (n) => Math.floor(Math.random()*n);
export const nRandomInts = (n, max) => {
    var l = [];
    var i = 0;
    while (i < n){
        l.push(RandomInt(max));
        i++;
    }
    return l;
}

export const elementsFrom = (n, arr) => {
    if (arr.length === n) {return arr}
    if (arr.length > n) {return distinctElementsFrom(n, arr)}
    var list = [];
    while (list.length<n) {
        list = [...list, ...arr];
    }
    return list.slice(0, n)
}

export const distinctElementsFrom = (n, arr) => {
    var list = [];
    if (arr.length<=n) {return arr}
    while (list.length<n) {
        list.push(RandomElement(arr.filter(x=>list.indexOf(x)===-1)))
    }
    return list
}

export const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
export const smallPrimes = [2, 3, 5, 7];

export const RandomPrime = (t) => t === 'small' ? RandomElement(smallPrimes) : RandomElement(primes);
export const distinctPrimes = (n, t) => t === 'small' ? 
            distinctElementsFrom(n, smallPrimes) : distinctElementsFrom(n, primes);

export const random2357 = (maxE) => {
    // This function gives a random number in prime power notation
    // The output is an object with powers property (powers to which 2, 3, 5, 7 are raised).
    // and value property
    // the highest exponent in maxE
    let exponents = [0,0,0,0].map(x=>RandomInt(maxE+1));
    if (exponents.every(x => x===0)) {exponents = [0, 1, 0, 1]}// gives 21 as a default, rather than 0
    let value = [2, 3, 5, 7].map((x, i) => x**exponents[i])
        .reduce((acc, val) => acc*val, 1)
    return {exponents, value}
}

const names = [
    'Alex', 'Arlene', 'Bruce', 'Caroline', 'Demi', 'Evette', 
    'Felix', 'Farnaz', 'Grace', 'Helen', 'Isobel', 'James', 'Jana', 
    'Katie', 'Kal', 'Louise', 'Meera', 'Muthu', 'Natalie', 'Nandini', 'Nadiya',
    'Parvathy',
    'Ranjit', 'Raji', 
    'Sharon','Shraddha', 'Steven', 'Sam',
    'Victoria', 'Val',
    'Zanet'
];

export const randomNames = (n) => distinctElementsFrom(n, names);
