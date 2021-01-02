// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { Fraction } from './QTypes';
import { RandomElement, RandomInt } from './RandomFuncs';
import { simplifyQ } from './fractionFuncs/simplifyQ'

//This list needs to be in the same as in the QTypes list
//Maybe refactor so that it is extracted from that
const subQTypes = [
    null, 'simplify', 'add', 'times', 'divide', 'compare'
]

const FractionQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat, furtherInstructions
    var quAndA = { QType: Fraction + '-' + subQType };
    var qA = {};
    switch (subQType) {
        case 'simplify': {
            let level = RandomInt(2) + 1;
            qA = simplifyQ(level)
            break
        }
        case 'add': { qA.q = '1/4 + 1/2'; qA.a = '3/4'; break }
        case 'times': { qA.q = '1/4 * 1/2'; qA.a = '1/8'; break }
        case 'divide': { qA.q = 'What is 1/4 divided by 1/2 ?'; qA.a = '1/2'; break }
        case 'compare': { qA.q = 'Which is bigger 1/4 or 1/2 ?'; qA.a = '1/2'; break }
        default: {
            qA.q = 'default Fraction Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

// import into GetnewQs and add to the switch
export default FractionQ;