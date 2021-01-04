import { simplifyFrac } from './simplifyFrac';
import { simpFrac } from './getSimpFrac';
import { RandomInt } from '../RandomFuncs'


export const addFracQ = (level) => {
    // level 1 should have fractions that are the same on the bottom
    let a, b, ans;
    switch (level) {
        case 1: {
            let denom = RandomInt(8) + 3; // 3, 4, 5, 6, 7, 8, 9, 10
            let ansNum = RandomInt(denom - 2) + 2; // [2], [2, 3], [2, 3, 4],...
            a = [RandomInt(ansNum - 1) + 1, denom];
            b = [ansNum - a[0], denom];
            ans = simplifyFrac([ansNum, denom])
            break
        }
        case 2: {
            a = simpFrac(); b = simpFrac();
            ans = simplifyFrac([a[0] * b[1] + b[0] * a[1], a[1] * b[1]]);
            break
        }
        default: {
            a = [1, 2]; b = [1, 4]; ans = [3, 4]
        }
    }
    return { q: a.join('/') + ' + ' + b.join('/'), a: ans.join('/') }
}