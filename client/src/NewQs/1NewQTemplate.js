import { getTheQType } from './QTypes';
import { RandomElement } from './RandomFuncs';

const subQTypes = [
    null, 'listOfSubTypes'
]

const subjectQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat
    var quAndA = { QType: getTheQType + '-' + subQType }
    switch (subQType) {
        default : {  
            quAndA.q = 'default Data Question';
            quAndA.a = 42
        }
    }
    return quAndA
}

export default subjectQ;