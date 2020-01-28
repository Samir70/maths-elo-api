import { Data } from './QTypes';
import { RandomInt, nRandomInts, RandomElement } from './RandomFuncs';

const subQTypes = [
    null, 'mean', 'meanFindmissing', 'medianOdd', 'medianEven', 'range'//, 'mode'
];

const modeQ = () => {

}

const rangeQ = () => {
    const howMany = RandomInt(4)+4; // 4, 5, 6, 7
    const offset = RandomInt(20)+1;
    var list = nRandomInts(howMany, 20).map(x=>x+offset);
    var q = 'Find the range of '+list.join(', ');
    var a = Math.max(...list) - Math.min(...list);
    return {q, a}
}

const medianQ = (t) => {
    const howMany = RandomInt(3) + 2;
    var listLength = t === 'ODD' ? howMany*2 + 1 : howMany*2;
    var list = nRandomInts(listLength, 15).map(x=>x+3);
    var q = 'Find the median of '+list.join(', ');
    var sortedList = list.sort((a, b) => a-b);
    var a = t === 'ODD' ? sortedList[howMany] : (sortedList[howMany-1] + sortedList[howMany])/2
    return {q, a}
}

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

const DataQ = (subType = '') => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat
    var quAndA = { QType: Data + '-' + subQType }
    var qA = {};
    switch (subQType) {
        case 'mean' : { qA = meanQ('regular'); break }
        case 'meanFindmissing' : { qA = meanQ('findMissing'); break }
        case 'medianOdd' : { qA = medianQ('ODD'); break }
        case 'medianEven' : { qA = medianQ('EVEN'); break }
        case 'range' : { qA = rangeQ(); break }
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