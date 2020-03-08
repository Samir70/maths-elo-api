// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { getTheQType } from './QTypes';
import { RandomElement } from './RandomFuncs';

const subQTypes = [
    null, 'listOfSubTypes'
]

const subjectQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat, furtherInstructions
    var quAndA = { QType: getTheQType + '-' + subQType };
    var qA = {};
    switch (subQType) {
        default : {  
            qA.q = 'default Data Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

// import into GetnewQs and add to the switch
export default subjectQ;