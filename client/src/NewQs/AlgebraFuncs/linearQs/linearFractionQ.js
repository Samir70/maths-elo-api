import { RandomInt } from '../../RandomFuncs'
// Be sure to include all types listed in solveLinear.js
// let fractionType = ['(cx+d) / (ax+b)', '(cx+d) / (b-ax)', '(d-cx) / (b-ax)'][RandomInt(3)];

/**
 * we need top = bottom*r
 * where bottom can be our (ax + b)
 * then c and d can be worked out from the ratio
*/

const tidy = (u) => u < 0 ? ' - ' + (-u) : u === 0 ? '' : ' + ' + u
export const linearFractionQ = (x, a, b, r, qType) => {
    let c = RandomInt(8)+2;
    switch (qType) {
        case '(cx+d) / (ax+b)': {
            let numerator = r * (a * x + b);
            if (c === a*r) {c++} 
            let d = numerator - c*x;
            let numText = d === 0 ? c+'x' : '('+c+'x'+tidy(d)+')';
            return numText + ' / ('+a+'x + '+b+') = '+r
        }
        case '(cx+d) / (b-ax)': {
            let numerator = r * (b - a*x);
            let d = numerator - c*x;
            let numText = d === 0 ? c+'x' : '('+c+'x'+tidy(d)+')';
            return numText + ' / ('+b+' - '+a+'x) = '+r
        }
        case '(d-cx) / (b-ax)': {
            let numerator = r * (b - a*x);
            let d = numerator + c*x;
            let numText = d === 0 ? c+'x' : '('+d+' - '+c+'x)';
            return numText + ' / ('+b+' - '+a+'x) = '+r
        }
        default: return '(x+0) / (x-x+1) = ' + x;
    }
}