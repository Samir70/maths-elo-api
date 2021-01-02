let primes = [2, 3, 5, 7];
export const simplifyFrac = frac => {
    let [n, d] = frac;
    for (let p of primes) {
        while (n%p === 0 && d%p === 0) {
            n /= p;
            d /= p;
        }
    }
    return [n, d]
}

// const tests = [
//     [12, 96], [21, 77], [18, 21], [120, 700]
// ]

// tests.forEach(t => console.log(t, simplifyFrac(t)))