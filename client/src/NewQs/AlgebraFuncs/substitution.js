import { combine } from './SimplifyAddSub'
import { Coeffs } from './CoeffsAndVars'
import { RandomInt } from '../RandomFuncs';

export const substitutionQ = (level = RandomInt(4)) => {
    let expression, valList, answer;
    let coeffs = Coeffs(4);
    let toSub = Coeffs(4);
    switch (level) {
        case 0: {
            expression = combine(coeffs.slice(0, 2), ['a', ''])
            valList = 'a=' + toSub[0]; // don't allow negative values, coeffs always begin positive
            answer = coeffs[0] * toSub[0] + coeffs[1]
            break
        }
        case 1: {
            expression = combine(coeffs.slice(0, 2), ['a', ''])
            valList = 'a=' + toSub[1]; // allow negative values
            answer = coeffs[0] * toSub[1] + coeffs[1]
            break
        }
        case 2: {
            expression = combine(coeffs.slice(0, 3), ['b', 'a', ''])
            valList = 'a=' + toSub[1] + ' b=' + toSub[0];
            answer = coeffs[0] * toSub[0] + coeffs[1] * toSub[1] + coeffs[2]
            break
        }
        case 3: {
            expression = combine(coeffs.slice(0, 3), ['ab', 'a', 'b'])
            valList = 'a=' + toSub[0] + ' b=' + toSub[1];
            answer = coeffs[0] * toSub[0] * toSub[1] + coeffs[1] * toSub[0] + coeffs[2] * toSub[1]
            break
        }
        default: {
            expression = '4x+2';
            valList = 'x = 10';
            answer = 42
        }
    }
    return {
        qType: "Algebra01-substitution",
        q: 'What is the value of ' + expression + ' when ' + valList,
        a: answer
    }
}