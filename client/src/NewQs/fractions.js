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