import { Ratio } from './QTypes';
import { RandomInt, RandomElement } from './RandomFuncs';

const subQTypes = [
    null, 'simplify', 'mapForm', 'keepRatio', 'share', 'givenDiff'
];

const coprimes = {
    1 : [2, 3, 4, 5, 6, 7, 8, 9],
    2 : [3, 5, 7, 9],
    3 : [4, 5, 7, 8],
    4 : [5, 7, 9],
    5 : [6, 7, 8, 9]//,
    // 6 : [7],
    // 7 : [8, 9],
    // 8 : [9]
}

// apart from 7 itself, these numbers have only 2, 3, 5 as prime factors (and not too high)
const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 20, 24, 25, 30 ]

const simplifyQ = () => {
    var a = ''+(RandomInt(5) + 1);
    var b = RandomElement(coprimes[a]);
    if (RandomInt(2)===0) { [a, b] = [b, a] }
    var m = RandomElement(multipliers);
    return {high: a*m+':'+b*m, simp:a+':'+b}
}

const RatioQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    var quAndA = { QType: Ratio+'-'+subQType, extraKeys:[':', ':', ':'] }

    switch (subQType) {
        case 'simplify' : {
            var qA = simplifyQ();
            quAndA.q="Simplify " +  qA.high; 
            quAndA.a=qA.simp;
            quAndA.answerFormat="string"; 
            break
        }
        case 'mapForm' : {quAndA.q="Express 16:12 in the form 1:n"; quAndA.a="1:0.75"; quAndA.answerFormat="string"; break}
        case 'keepRatio' : {quAndA.q="The ratio of men to women waiting at a bus stop is 3:2. If there are 6 men, then how many women are there?"; quAndA.a="4"; break}
        case 'share' : {quAndA.q="Share £180 in the ratio 3:5:4, giving your answer as a ratio"; quAndA.a="45:75:60"; quAndA.answerFormat="string"; break}
        case 'givenDiff' : {quAndA.q="Alice and Bob share some money in the ratio 7:5 Alice gets £10 more than Bob. How much money did they share?"; quAndA.a="60"; break}
        default : {quAndA.q="Ratio default Q"; quAndA.a="42"}
    }
    
    console.log(quAndA);
    return quAndA
}

export default RatioQ;