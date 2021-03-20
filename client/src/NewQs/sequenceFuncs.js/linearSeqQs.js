import { RandomInt } from '../RandomFuncs';
import { combine } from '../AlgebraFuncs/SimplifyAddSub';

const rndLinearSeq = n => {
    let d = RandomInt(10) + 2
    let a = RandomInt(30) + 5
    let seq = [...Array(n).fill(0)].map((_, i) => a + i * d)
    return { seq, a, d }
}

export const nextTermLinear = () => {
    let seq = rndLinearSeq(6).seq;
    return {
        q: 'Find the next term in ' + seq.slice(0, 5).join(', ') + ', ...',
        a: seq[5]
    }
}

export const nthTermQ = () => {
    let { seq, a, d } = rndLinearSeq(5)
    let expression = combine([d, a-d], ['n', ''])
    return {
        q: 'Find the first 5 terms in the sequence with nth term formula: \n' + expression,
        a: seq.join(', ')
    }
}