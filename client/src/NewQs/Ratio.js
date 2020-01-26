import { Ratio } from './QTypes';
import { RandomInt, RandomElement, randomNames, distinctElementsFrom } from './RandomFuncs';

const subQTypes = [
    null, 'simplify', 'mapForm', 'keepRatio', 'share', 'givenDiff'
];

const coprimes = {
    1: [2, 3, 4, 5, 6, 7, 8, 9],
    2: [3, 5, 7, 9],
    3: [4, 5, 7, 8],
    4: [5, 7, 9],
    5: [6, 7, 8, 9]//,
    // 6 : [7],
    // 7 : [8, 9],
    // 8 : [9]
}

// apart from 7 itself, these numbers have only 2, 3, 5 as prime factors (and not too high)
const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 20, 24, 25, 30];

// decimals and fractions [decimal, numerator, denominator]
const decFrac = [
    [0.5, 1, 2],
    [1.5, 3, 2],
    [2.5, 5, 2],
    [0.25, 1, 4],
    [0.75, 3, 4],
    [1.25, 5, 4],
    [0.2, 1, 5],
    [0.4, 2, 5],
    [0.6, 3, 5],
    [0.8, 4, 5],
    [1.2, 6, 5]
]

const simplifyQ = () => {
    var a = '' + (RandomInt(5) + 1);
    var b = RandomElement(coprimes[a]);
    if (RandomInt(2) === 0) { [a, b] = [b, a] }
    var m = RandomElement(multipliers);
    return { high: a * m + ':' + b * m, simp: a + ':' + b }
}

const mapFormQ = () => {
    var dF = RandomElement(decFrac);
    var m = RandomElement(multipliers.slice(0, 5));
    return { high: m * dF[2] + ':' + m * dF[1], mF: '1:' + dF[0] }
}

const giveNames = (arr) => {
    // don't use with only one name in the array!
    if (arr.length === 2) { return arr.join(' and ') }
    return arr[0] + ', ' + giveNames(arr.slice(1))
}

const keepRatioQ = () => {
    var n = randomNames(3);
    var seq = RandomElement(['012', '021', '120', '102', '210', '201']).split('').map(Number);
    var ratioVals = distinctElementsFrom(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    var m = RandomInt(10) + 2;
    var qFormat = RandomInt(3);
    var q = '', a = '';
    switch (qFormat) {
        case 0: {
            q = giveNames(n) + ' share some money in the ratio ' + ratioVals.join(':')
                + '   ' + n[seq[0]] + ' gets £' + ratioVals[seq[0]] * m
                + '   How much money did they share?';
            a = ratioVals.reduce((a, b) => a + b) * m;
            break
        }
        case 1: {
            q = giveNames([n[0], n[1]]) + ' share some money in the ratio '
                + ratioVals.slice(0, 2).join(':')
                + '   ' + n[0] + ' gets £' + ratioVals[0] * m
                + '   How much does ' + n[1] + ' get?';
            a = ratioVals[1] * m;
            break
        }
        default: {
            q = giveNames(n) + ' share some money in the ratio ' + ratioVals.join(':')
                + '   ' + n[seq[0]] + ' gets £' + ratioVals[seq[0]] * m
                + '   How much does ' + n[seq[1]] + ' get?';
            a = ratioVals[seq[1]] * m;
        }
    }
    return { q, a }
}

const shareQ = () => {
    var n = randomNames(3);
    var askAbout = RandomInt(3);
    var ratioVals = distinctElementsFrom(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    var m = RandomInt(10) + 2;
    var q = giveNames(n) + ' share £' + ratioVals.reduce((a, b) => a + b) * m
        + ' in the ratio ' + ratioVals.join(':')
        + '   How much money did ' + n[askAbout] + ' get?';
    var a = ratioVals[askAbout] * m;
    return { q, a }
}

const givenDiffQ = () => {
    var n = randomNames(3);
    var seq = RandomElement(['012', '021', '120', '102', '210', '201']).split('').map(Number);
    var ratioVals = distinctElementsFrom(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    var m = RandomInt(10) + 2;
    var comparitor = ratioVals[seq[0]] > ratioVals[seq[1]] ? ' more' : ' less';
    var q = giveNames(n) + ' shared some money in the ratio ' + ratioVals.join(':')
        + ' ' +n[seq[0]] + ' got ' + Math.abs((ratioVals[seq[0]] - ratioVals[seq[1]]) * m)
        + comparitor + ' than ' + n[seq[1]]
        + '.   How much money did ' + n[seq[2]] + ' get?';
    var a = ratioVals[seq[2]] * m;
    return { q, a }
}

const RatioQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    var quAndA = { QType: Ratio + '-' + subQType, extraKeys: [':', ':', ':'] }

    switch (subQType) {
        case 'simplify': {
            var qA = simplifyQ();
            quAndA.q = "Simplify " + qA.high;
            quAndA.a = qA.simp;
            quAndA.answerFormat = "string";
            break
        }
        case 'mapForm': {
            qA = mapFormQ();
            quAndA.q = "Express " + qA.high + " in the form 1:n";
            quAndA.a = qA.mF;
            quAndA.answerFormat = "string";
            break
        }
        case 'keepRatio': {
            qA = keepRatioQ();
            quAndA.q = qA.q;
            quAndA.a = qA.a;
            break
        }
        case 'share': {
            qA = shareQ();
            quAndA.q = qA.q;
            quAndA.a = qA.a;
            break
        }
        case 'givenDiff': {
            qA = givenDiffQ();
            quAndA.q = qA.q;
            quAndA.a = qA.a;
            break
        }
        default: { quAndA.q = "Ratio default Q"; quAndA.a = "42" }
    }

    // console.log(quAndA);
    return quAndA
}

export default RatioQ;