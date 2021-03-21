import { RandomInt } from '../RandomFuncs';

const rndFibSeq = (n) => {
    let a = RandomInt(5) + 1;
    let b = RandomInt(7) + a;
    let seq = [a, b], dp = [a, b];
    while (seq.length < n) {
        dp = [dp[1], dp[0] + dp[1]]
        seq.push(dp[1])
    }
    return seq
}

export const nextTermFib = () => {
    let seq = rndFibSeq(6);
    return {
        q: 'Find the next term in \n' + seq.slice(0, 5).join(', '),
        a: seq[5]
    }
}