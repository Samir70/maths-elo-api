// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { Fraction } from './QTypes';
import { RandomElement } from './RandomFuncs';

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
        case 'simplify' : {qA.q = 'Simplify 10/15'; qA.a = '2/3'; break }
        case 'add' : {qA.q = '1/4 + 1/2'; qA.a = '3/4'; break }
        case 'times' : {qA.q = '1/4 * 1/2'; qA.a = '1/8'; break }
        case 'divide' : {qA.q = 'What is 1/4 divided by 1/2 ?'; qA.a = '1/2'; break }
        case 'compare' : {qA.q = 'Which is bigger 1/4 or 1/2 ?'; qA.a = '1/2'; break }
        default : {  
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