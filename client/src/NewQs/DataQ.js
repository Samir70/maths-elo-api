import { Data } from './QTypes';
import { RandomInt, RandomElement } from './RandomFuncs';

const subQTypes = [
    null, 'mean', 'median', 'mode', 'range', 'meanFindmissing'
];

const meanQ = (t) => {
    var howMany = RandomInt(3) + 5
    var list = [];
    var i = 0;
    while (i < howMany - 1){
        list.push(RandomInt(12)+5);
        i++;
    }
    var listTotal = list.reduce((a, b) => a+b);
    var targetMean = Math.ceil(listTotal/howMany);
    if (t='findMissing') {
        var q = 'The numbers '+list.join(', ')+', x have a mean of '+targetMean+'. Find x';
        var a = targetMean*howMany - listTotal
    }
    return {q, a}
 }

const DataQ = (subType) => {
    const subQType = 'meanFindmissing' //subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat
    var quAndA = { QType: Data + '-' + subQType }
    switch (subQType) {
        case 'meanFindmissing' : {
            var qA = meanQ('findMissing');
            quAndA.q = qA.q;
            quAndA.a = qA.a;
            break
        }
        default : {  
            quAndA.q = 'default Data Question';
            quAndA.a = 42
        }
    }
    return quAndA
}

export default DataQ;