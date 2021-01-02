import { simplifyFrac } from './simplifyFrac';
import { simpFrac } from './getSimpFrac';

export const addFracQ = (level) => {
    // level 1 should have fractions that are the same on the bottom
    let a = simpFrac(), b = simpFrac();
    let ans = simplifyFrac([a[0]*b[1] + b[0]*a[1], a[1]*b[1]])
    return {q: a.join('/') + ' + ' + b.join('/'), a:ans.join('/')}
}