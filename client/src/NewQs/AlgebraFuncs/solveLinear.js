// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { SolveLinear } from '../QTypes';
import { RandomElement } from '../RandomFuncs';
import { combine } from './SimplifyAddSub';
import { RandomInt } from '../RandomFuncs';
import { oneStep } from './linearQs/oneStep';

//This list needs to be in the same as in the QTypes list
//Maybe refactor so that it is extracted from that
const subQTypes = [
    null, 'oneStep', 'twoStep', 'brackets', 'bothSides', 'fraction'
]

const SolveLinearQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat, furtherInstructions
    const x = RandomInt(20) - 9; // x can be -9..10
    // NB: don't want x=0 for random Qs involving divide by x
    var quAndA = { QType: SolveLinear + '-' + subQType, a: x }; // we already know the value of x
    // generate question by making an equation.
    // need following
    let coefOfx = RandomInt(9) + 2; // can be 2..10
    let constTerm = RandomInt(24) + 2; // can be 2..25
    let q = '';
    switch (subQType) {
        case 'oneStep': {
            let qType = ['x+a', 'x-a', 'a-x', 'ax', 'a/x', 'x/a'][RandomInt(6)];
            if (qType === 'a/x' && x === 0) { x = 7 }
            if (qType === 'x/a') {
                quAndA.a = constTerm*x;
            }
            q = oneStep(x, constTerm, qType);
            break;
        }
        case 'twoStep': {
            q = '3x+1 = 5';
            break;
        }
        case 'brackets': {
            q = '3(x+1) = 15';
            break;
        }
        case 'bothSides': {
            q = '3x+1 = 5x-9';
            break;
        }
        case 'fraction': {
            q = 'x/5 = 5';
            break;
        }
        default: {
            q = 'default solveLinear Question';
        }
    }
    quAndA.q = q;
    return quAndA
}

// import into GetnewQs and add to the switch
export default SolveLinearQ;