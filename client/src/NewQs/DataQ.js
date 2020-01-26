import { Data } from './QTypes';
import { RandomInt, nRandomInts, RandomElement } from './RandomFuncs';

const subQTypes = [
    null, 'mean', 'meanFindmissing'//, 'median', 'mode', 'range'
];

const meanQ = (t) => {
    var howMany = RandomInt(3) + 5;
    var offset = RandomInt(10) + 1;
    var list = nRandomInts(howMany, 15).map(x=>x+offset);    
    var listTotal = list.reduce((a, b) => a+b);
    howMany++;
    var targetMean = Math.ceil(listTotal/howMany);
    if (t==='findMissing') {
        var q = 'The numbers '+list.join(', ')+', x have a mean of '+targetMean+'. Find x';
        var a = targetMean*howMany - listTotal
    } else {
        list.push(targetMean*howMany - listTotal);
        q = 'Find the mean of  '+list.join(', ');
        a = targetMean
    }
    return {q, a}
 }

const DataQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat
    var quAndA = { QType: Data + '-' + subQType }
    var qA = {};
    switch (subQType) {
        case 'mean' : { qA = meanQ('regular'); break }
        case 'meanFindmissing' : { qA = meanQ('findMissing'); break }
        default : {  
            qA.q = 'default Data Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

export default DataQ;