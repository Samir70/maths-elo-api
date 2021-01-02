import { simpFrac } from './getSimpFrac';
import { RandomElement } from '../RandomFuncs';
const multipliers = {
    // property is level
    1: [2, 4, 10],
    2: [3, 5, 6, 8, 9, 12, 15]
}

export const simplifyQ = level => {
    if (![1, 2].includes(level)) {level = 1}
    let mult = RandomElement(multipliers[level])
    let ans = simpFrac()
    let ques = ans.map(x => x*mult)
    return {q:"Simplify "+ques.join('/'), a:ans.join('/')}
}