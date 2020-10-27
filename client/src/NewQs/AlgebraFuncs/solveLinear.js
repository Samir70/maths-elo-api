// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { SolveLinear } from '../QTypes';
import { RandomElement } from '../RandomFuncs';

//This list needs to be in the same as in the QTypes list
//Maybe refactor so that it is extracted from that
const subQTypes = [
    null, 'oneStep', 'twoStep', 'brackets', 'bothSides', 'fraction'
]

const SolveLinearQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat, furtherInstructions
    var quAndA = { QType: SolveLinear + '-' + subQType };
    var qA = {};
    switch (subQType) {
        case 'oneStep': {
            qA.q = 'x+1 = 5';
            qA.a = 4;
            break;
        } 
        case 'twoStep': {
            qA.q = '3x+1 = 5';
            qA.a = 2;
            break;
        } 
        case 'brackets': {
            qA.q = '3(x+1) = 15';
            qA.a = 4;
            break;
        } 
        case 'bothSides': {
            qA.q = '3x+1 = 5x-9';
            qA.a = 5;
            break;
        } 
        case 'fraction': {
            qA.q = 'x/5 = 5';
            qA.a = 25;
            break;
        } 
        default : {  
            qA.q = 'default solveLinear Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

// import into GetnewQs and add to the switch
export default SolveLinearQ;