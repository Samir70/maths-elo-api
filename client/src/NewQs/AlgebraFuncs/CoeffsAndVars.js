const { RandomInt, RandomElement } = require('../RandomFuncs');
export const Coeffs = (n) => Array(n).fill(9).map(RandomInt)
        .map((x, i)=>{
            if (i===0) {return x+1}
            return RandomInt(2) === 1 ? x+1 : -(x+1)
        });
export const threeVars = (n) => Array(n).fill(['a', 'b', 'c']).map(RandomElement);
export const twoVars = (n) => Array(n).fill(['a', 'b']).map(RandomElement);
export const oneVar = (n) => Array(n).fill(RandomElement(['a', 'b', 'c']));