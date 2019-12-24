const { RandomInt, RandomElement } = require('../RandomFuncs');

const Coeffs = (n) => Array(n).fill(9).map(RandomInt)
        .map((x, i)=>{
            if (i===0) {return x+1}
            return RandomInt(2) === 1 ? x+1 : -(x+1)
        });
const threeVars = (n) => Array(n).fill(['a', 'b', 'c']).map(RandomElement);
const twoVars = (n) => Array(n).fill(['a', 'b']).map(RandomElement);
const oneVar = (n) => Array(n).fill(RandomElement(['a', 'b', 'c']));

// to test above, which are random so can't be tested with jest
// for (var i = 0; i<10; i++) {
//     console.log(Coeffs(4), Coeffs(6));
//     console.log(threeVars(4), threeVars(7));
//     console.log(twoVars(3), twoVars(6));
//     console.log(oneVar(8), oneVar(2));
// }


// parameters are coefficients and the variable names
// output is an expression such as 6a+7c+3b-9a+4c
export const combine = (c, v) => {
    var l = Math.min(c.length, v.length);
    if (l === 0 ) {return null}
    var exp = '';
    for (var i = 0; i<l; i++) {
        exp += c[i] < 0 ? '-' : i > 0 ? '+' : '';
        var val = Math.abs(c[i]);
        exp += val === 1 ? '' : val;
        exp += v[i];
        // if (i<l-1) { exp+= ' ' }
    }
    return exp;
}

// parameters are coefficients and the variable names
// output is the simplified form of the expression given by combine
export const SimplifyAddSub = (c, v) => {
    var varList = v.filter((x, i)=> v.indexOf(x) === i).sort();
    const collectLikeTerms = (a) => c.reduce((acc, val, i) => v[i]===a?acc+val:acc, 0);
    return combine(varList.map(collectLikeTerms), varList);
}

// expression in Q has n terms
export const simpAddSubQ = (n) => {
    var coeffs = Coeffs(n);
    var t = RandomInt(4); // to choose how many variables to put into Q
    var letters = t<=1? threeVars(n) : t===2 ? twoVars(n) : oneVar(n);
    return {
        q : 'Simplify '+combine(coeffs, letters),
        a : SimplifyAddSub(coeffs, letters)
    } 
}

//console.log(Coeffs(), threeVars());