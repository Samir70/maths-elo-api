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
    let coef1 = RandomInt(8) + 2;
    let coef2 = RandomInt(8) + 2;
    let coef3 = RandomInt(8) + 2;
    if (coef2 === coef3) { coef3++ }
    switch (subQType) {
        case 'shopping' : {
            qA.q = `One shopper buys ${coef1} teas and ${coef2} buns. 
            While a second shopper buys ${coef1} teas and ${coef3} buns. 
            The first shopper pays £${coef1*x + coef2*y}, while the second pays £${coef1*x + coef3*y}.
            How much does a tea cost?`;
            qA.a = '£'+x;
            break
        }
        case 'sameOfOne' : {
            qA.q = RandomInt(2) === 0 ? 
                `Solve ${coef1}A + ${coef2}B = ${coef1*x + coef2*y} 
                and ${coef1}A + ${coef3}B = ${coef1*x + coef3*y}` : 
                `Solve ${coef2}A + ${coef1}B = ${coef2*x + coef1*y} 
                and ${coef3}A + ${coef1}B = ${coef3*x + coef1*y}` 
            qA.a = `A = ${x} and B = ${y}`
            break
        }
        case 'negOfOne' : {
            qA.q = RandomInt(2) === 0 ? 
                `Solve ${coef1}A + ${coef2}B = ${coef1*x + coef2*y} 
                and ${coef3}B - ${coef1}A = ${coef3*y - coef1*x}` : 
                `Solve ${coef2}A - ${coef1}B = ${coef2*x - coef1*y} 
                and ${coef3}A + ${coef1}B = ${coef3*x + coef1*y}` 
            qA.a = `A = ${x} and B = ${y}`
            break
        }
        case 'needsScaling' : {
            let coef4 = coef2 === 2 ? 3 : coef2 - 1;
            qA.q = RandomInt(2) === 0 ? 
            `Solve ${2*coef1}A + ${coef3}B = ${2*coef1*x + coef3*y} 
            and ${coef2}B - ${coef1}A = ${coef2*y - coef1*x}` : 
            `Solve ${coef1}A + ${coef2}B = ${coef1*x + coef2*y} 
            and ${coef1*2}A + ${coef4}B = ${coef1*2*x + coef4*y}`
            qA.a = `A = ${x} and B = ${y}`
            break
        }
        case 'needsArranging' : {
            let c = coef1*x - coef3*y;
            qA.q = 'Solve ';
            qA.q += c < 0 ? `${coef1}A = ${coef3}B - ${-c}` : `${coef1}A - ${c} = ${coef3}B`
            qA.q += ` and ${coef1}A + ${coef2}B = ${coef1*x + coef2*y}`
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