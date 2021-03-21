import { RandomInt } from '../RandomFuncs';

const rndGeometricSeq = (n) => {
    let a = RandomInt(6) + 1;
    let r = RandomInt(4) + 2;
    let seq = [...Array(n).fill(0)].map((_, i) => a * r ** i);
    return { seq, a, r }
}

export const nextTermGeometric = () => {
    let { seq, a, r } = rndGeometricSeq(6);
    let reverse = RandomInt(2);
    if (reverse === 1) { seq.reverse() }
    return {
        q: 'Find the next term in \n'+seq.slice(0, 5).join(', '),
        a: seq[5]
    }
}