import { Algebra01 } from './QTypes';
import { RandomElement } from './RandomFuncs';
import { simpAddSubQ } from './AlgebraFuncs/SimplifyAddSub';
 
const subQTypes = [
    null, 'simplifyAddSub'
];

const Algebra01Q = (subType) => {
    const subQType = subQTypes[Number(subType)] || RandomElement(subQTypes.slice(1));
    var quAndA = { QType: Algebra01+'-'+subQType, extraKeys:['a', 'b', 'c', '+', '-', '/'] }
    switch (subQType) {
        case 'simplifyAddSub' : {
            var newQ = simpAddSubQ(5);
            quAndA.q=newQ.q; quAndA.a=newQ.a;
            quAndA.answerFormat='string'; 
            break
        }
        default : {quAndA.q = 'default algebra01 Q'; quAndA.a=42}
    }
    return quAndA;
}

export default Algebra01Q;