import { Coeffs } from './CoeffsAndVars';
import { RandomInt, distinctPrimes } from '../RandomFuncs';
import { combine } from './SimplifyAddSub';

export const Brackets1 = (outer, coeffs, varNames) => {
    var inner = combine(coeffs, varNames)
    return outer + '(' + inner + ')'
}

const multiply = (out, inner) => inner.map(x => out * x)
export const Expand1 = (outer, coeffs, varNames) => combine(multiply(outer, coeffs), varNames);

export const Expand1Q = () => {
    var co = Coeffs(2), mult = RandomInt(9) + 2;
    return {
        q: 'Expand ' + Brackets1(mult, co, ['a', '']),
        a: Expand1(mult, co, ['a', ''])
    }
}
export const FactoriseQ = (level) => {
    var co = [];
    var [p1, p2] = distinctPrimes(2, 'small');
    switch (level) {
        case 1: { co = RandomInt(2) === 0 ? [1, p1] : [p1, 1]; break }
        case 2: { co = RandomInt(2) === 0 ? [p1, p2] : [p1, -p2]; break }
        default: { console.log('level unknown in FactoriseQ:', level); co = [3, 2] }
    }
    var out = RandomInt(9) + 2;
    return {
        q: 'Factorise ' + Expand1(out, co, ['a', 'b']),
        a: Brackets1(out, co, ['a', 'b'])
    }
}

// brackets always contain same variable names in same order
export const Expand2 = (out1, co1, pm, out2, co2, varNames) => {
    var first = multiply(out1, co1), second = multiply(out2, co2);
    var final = first.map((x, i) => pm === '+' ? x + second[i] : x - second[i]);
    return combine(final, varNames)
}

export const Expand2SimplifyQ = () => {
    var c1 = Coeffs(2), c2 = Coeffs(2);
    var o1 = RandomInt(9) + 2, o2 = RandomInt(9) + 2;
    var pm = RandomInt(2) === 0 ? '+' : '-';
    var vs = ['a', 'b']
    return {
        q: 'Expand and simplify ' + Brackets1(o1, c1, vs) + pm + Brackets1(o2, c2, vs),
        a: Expand2(o1, c1, pm, o2, c2, vs)
    }
}