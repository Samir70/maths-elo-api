// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { simulEqs } from './QTypes';
import { RandomElement, RandomInt } from './RandomFuncs';

//This list needs to be in the same as in the QTypes list
//Maybe refactor so that it is extracted from that
const subQTypes = [
    null, 'shopping', 'sameOfOne', 'negOfOne', 'needsScaling', 'needsArranging'
]

const simulEqsQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat, furtherInstructions
    var quAndA = { QType: simulEqs + '-' + subQType };
    var qA = {};
    let x = RandomInt(8) + 2; // 2, 3, 4, 5, 6, 7, 8, 9
    let y = RandomInt(8) + 2; // 2, 3, 4, 5, 6, 7, 8, 9
    if (x === y) { y++ }
    let coefx1 = RandomInt(8) + 2;
    let coefy1 = RandomInt(8) + 2;
    let coefy2 = RandomInt(8) + 2;
    if (coefy1 === coefy2) { coefy2++ }
    switch (subQType) {
        case 'shopping' : {
            qA.q = `One shopper buys ${coefx1} teas and ${coefy1} buns. 
            While a second shopper buys ${coefx1} teas and ${coefy2} buns. 
            The first shopper pays £${coefx1*x + coefy1*y}, while the second pays £${coefx1*x + coefy2*y}.
            How much does a tea cost?`;
            qA.a = '£'+x;
            break
        }
        case 'sameOfOne' : {
            qA.q = RandomInt(2) === 0 ? 
                `Solve ${coefx1}A + ${coefy1}B = ${coefx1*x + coefy1*y} 
                and ${coefx1}A + ${coefy2}B = ${coefx1*x + coefy2*y}` : 
                `Solve ${coefy1}A + ${coefx1}B = ${coefy1*x + coefx1*y} 
                and ${coefy2}A + ${coefx1}B = ${coefy2*x + coefx1*y}` 
            qA.a = `A = ${x} and B = ${y}`
            break
        }
        case 'negOfOne' : {
            qA.q = RandomInt(2) === 0 ? 
                `Solve ${coefx1}A + ${coefy1}B = ${coefx1*x + coefy1*y} 
                and ${coefy2}B - ${coefx1}A = ${coefy2*y - coefx1*x}` : 
                `Solve ${coefy1}A - ${coefx1}B = ${coefy1*x - coefx1*y} 
                and ${coefy2}A + ${coefx1}B = ${coefy2*x + coefx1*y}` 
            qA.a = `A = ${x} and B = ${y}`
            break
        }
        case 'needsScaling' : {
            qA.q = RandomInt(2) === 0 ? 
            `Solve A + B = ${x + y} 
            and ${coefy2}B - ${coefx1}A = ${coefy2*y - coefx1*x}` : 
            `Solve 2A + ${coefy1}B = ${2*x + coefy1*y} 
            and ${coefx1}A + ${coefy2}B = ${coefx1*x + coefy2*y}`
            qA.a = `A = ${x} and B = ${y}`
            break
        }
        default: {
            qA.q = 'default simul Eqs Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

// import into GetnewQs and add to the switch
export default simulEqsQ;