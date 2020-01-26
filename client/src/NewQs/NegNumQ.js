import { NegNumbers } from './QTypes';
import { RandomElement, RandomInt } from './RandomFuncs';

const subQTypes = [
    null, 'adding', 'subtract', 'times', 'divide'
];

const notBothPositive = () => {
    // 3 options: first, second or both are negative
    var op = RandomInt(3);
    var a = RandomInt(15) + 1, b = RandomInt(15) + 1;
    return op === 0 ? [-a, b] : op === 1 ? [a, -b] : [-a, -b]
}

const NegNumQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat
    var quAndA = { QType: NegNumbers + '-' + subQType };
    var qA = {};
    var [a, b] = [...notBothPositive()]
    switch (subQType) {
        case 'adding' : {
            qA.q = [a, b].join(' + ') + ' = ';
            qA.a = a + b;
            break
        }
        case 'subtract' : {
            qA.q = [a, b].join(' - ') + ' = ';
            qA.a = a - b;
            break
        }
        case 'times' : {
            qA.q = [a, b].join(' * ') + ' = ';
            qA.a = a * b;
            break
        }
        case 'divide' : {
            qA.q = [a*b, b].join(' / ') + ' = ';
            qA.a = a;
            break
        }
        default : {  
            qA.q = 'default NegNumbers Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

export default NegNumQ;