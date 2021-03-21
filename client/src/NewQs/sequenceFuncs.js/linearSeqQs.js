import { RandomInt } from '../RandomFuncs';
import { combine } from '../AlgebraFuncs/SimplifyAddSub';

const rndLinearSeq = n => {
    let d = RandomInt(10) + 2
    let a = RandomInt(30) + 5
    if (RandomInt(3) === 0) { d *= -1 }
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

export const nthTermQ = (dir = 'useNth') => {
    let { seq, a, d } = rndLinearSeq(5)
    let expression = d > 0 ? combine([d, a - d], ['n', '']) : combine([a - d, d], ['', 'n'])
    return dir === 'useNth' ?
        {
            q: 'Find the first 5 terms in the sequence with nth term formula: \n' + expression,
            a: seq.join(', ')
        } :
        {
            q: 'Find an expression for the nth term of: \n' + seq.join(', '),
            a: expression
        }
}

export const giveRule = () => {
    let { seq, a, d } = rndLinearSeq(5);
    return {
        q: 'What is the term-to-term rule for \n' + seq.join(', '),
        a: d > 0 ? 'add ' + d : 'take ' + (-d)
    }
}

export const findNthTerm = () => {
    let { seq, a, d } = rndLinearSeq(5);
    let n = RandomInt(300) + 54;
    let nth = a + d * (n - 1)
    let extra;
    switch (n % 10) {
        case 1: { extra = 'st'; break }
        case 2: { extra = 'nd'; break }
        case 3: { extra = 'rd'; break }
        default: { extra = 'th' }
    }
    return {
        q: 'Find the ' + n + extra + ' term in: \n' + seq.join(', '),
        a: nth
    }
}