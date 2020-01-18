import { Algebra01 } from './QTypes';
import { RandomElement } from './RandomFuncs';
import { simpAddSubQ } from './AlgebraFuncs/SimplifyAddSub';
import { Expand1Q, Expand2SimplifyQ, FactoriseQ } from './AlgebraFuncs/ExpandBracket';

const subQTypes = [
    null, 'simplifyAddSub', 'expandBracket', 'expand2Simplify', 'factorise1', 'factorise2'
];

const Algebra01Q = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    var quAndA = {
        QType: Algebra01 + '-' + subQType,
        extraKeys: ['a', 'b', 'c', '+', '-', '/'],
    }
    var newQ = {};
    switch (subQType) {
        case 'simplifyAddSub': {
            newQ = simpAddSubQ(5);
            quAndA.answerFormat = 'string';
            quAndA.furtherInstructions = 'Give variables in alphabetical order. eg: 7+3a-2b'
            break
        }
        case 'expandBracket': {
            newQ = Expand1Q();
            quAndA.answerFormat = 'string';
            quAndA.furtherInstructions = 'Give variables in order of appearance in brackets';
            break
        }
        case 'expand2Simplify' : {
            newQ = Expand2SimplifyQ();
            quAndA.answerFormat = 'string';
            quAndA.furtherInstructions = 'Give variables in order of appearance in brackets';
            break
            
        }
        case 'factorise1' : {
            newQ = FactoriseQ(1);
            quAndA.answerFormat = 'string';
            quAndA.furtherInstructions = 'Give variables in order of appearance';
            quAndA.extraKeys = ['a', 'b', '(', '+', '-', ')'];
            break
        }
        case 'factorise2' : {
            newQ = FactoriseQ(2);
            quAndA.answerFormat = 'string';
            quAndA.furtherInstructions = 'Give variables in order of appearance';
            quAndA.extraKeys = ['a', 'b', '(', '+', '-', ')'];
            break
        }
        default: { newQ.q = 'default algebra01 Q'; newQ.a = 42 }
    }
    quAndA.q = newQ.q; quAndA.a = newQ.a;
    return quAndA;
}

export default Algebra01Q;