// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { sequenceQs } from './QTypes';
import { RandomElement } from './RandomFuncs';

//This list needs to be in the same as in the QTypes list
//Maybe refactor so that it is extracted from that
const subQTypes = [
    null, 'linearSeq', 'geometricSeq', 'quadraticSeq', 'FibonacciSeq'
]

const getSequenceQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat, furtherInstructions
    var quAndA = { QType: sequenceQs + '-' + subQType };
    var qA = {};
    switch (subQType) {
        default : {  
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