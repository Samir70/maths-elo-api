import { NegNumbers } from './QTypes';
import { RandomElement } from './RandomFuncs';

const subQTypes = [
    null, 'adding'
]

const NegNumQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat
    var quAndA = { QType: NegNumbers + '-' + subQType };
    var qA = {};
    switch (subQType) {
        default : {  
            qA.q = 'default NegNumbers Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

export default NegNumQ;