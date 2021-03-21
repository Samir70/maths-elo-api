// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { sequenceQs } from './QTypes';
import { nextTermLinear, nthTermQ, giveRule, findNthTerm } from './sequenceFuncs.js/linearSeqQs';
import { nextTermGeometric } from './sequenceFuncs.js/geometricSeqQs';
import { nextTermFib } from './sequenceFuncs.js/fibonacciSeq';
import { RandomElement } from './RandomFuncs';

//This list needs to be in the same as in the QTypes list
//Maybe refactor so that it is extracted from that
const subQTypes = [
    null, 'nextLinear', 'nextGeometric', 'nextFibonacci',
    'giveT2TLinear', 'useNthTerm', 'giveFormula', 'findNthTerm'
]

const getSequenceQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat, furtherInstructions
    var quAndA = { QType: sequenceQs + '-' + subQType };
    var qA = {};
    switch (subQType) {
        case 'nextLinear': { qA = nextTermLinear(); break }
        case 'giveT2TLinear': { qA = giveRule(); break }
        case 'useNthTerm': { qA = nthTermQ(); break }
        case 'giveFormula': { qA = nthTermQ('findFormula'); break }
        case 'findNthTerm': { qA = findNthTerm(); break }
        case 'nextGeometric': { qA = nextTermGeometric(); break }
        case 'nextFibonacci': { qA = nextTermFib(); break }
        default: {
            qA.q = 'default sequence Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

// import into GetnewQs and add to the switch
export default getSequenceQ;