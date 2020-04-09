// define the QType in QTypes, add to list of QTypes that is exported
// and import it into GetNewQs
import { FactorsMultiples } from './QTypes';
import { RandomElement, RandomInt, RandomPrime, random2357, distinctPrimes } from './RandomFuncs';

const subQTypes = [
    null, 'prodOfPrimes', 'findMultiple', 'facOrMul', 'hcf', 'lcm'
];

const findMultipleQ = () => {
    var base = RandomInt(11) + 2;
    var times = RandomInt(8) + 5;
    return {
        q: 'Find the ' + times + 'th multiple of ' + base,
        a: base * times
    }
}

const facOrMulQ = () => {
    var factor = RandomElement([2, 3, 4, 5, 6, 10, 15]);
    var multiplier = RandomElement([2, 3, 4]);
    var multiple = factor * multiplier;
    var t = RandomInt(2);
    return t === 0 ?
        { q: `Is ${factor} a factor or multiple of ${multiple}?`, a: 'factor' } :
        { q: `Is ${multiple} a factor or multiple of ${factor}?`, a: 'multiple' }
}

const prodOfPrimesQ = () => {
    var numOfPrimes = RandomInt(2) + 4;
    var primes = [...Array(numOfPrimes)].map((x, i) => RandomPrime('small')).sort((a, b) => a - b);
    return {
        q: `Express ${primes.reduce((a, b) => a * b, 1)} as a product of primes.`,
        a: primes.join('x')
    }
}

const hcfQ = (level = 3, howMany = 2) => {
    let hcf = random2357(level).value;
    let numbers = distinctPrimes(howMany, 'small').map(x => x * hcf);
    return {
        q: `Find the highest common factor of 
            ${numbers.slice(0, -1).join(', ')} and ${numbers.slice(-1)}`,
        a: hcf
    }
}

const lcmQ = (level = 3) => {
    let hcf = random2357(level).value;
    let numbers = distinctPrimes(2, 'small').map(x => x * hcf);
    return {
        q: `Find the lowest common multiple of 
            ${numbers.join(' and ')}.`,
        a: numbers[0] * numbers[1] / hcf
    }
}

const FactorsMultiplesQ = (subType) => {
    const subQType = 'lcm'//subType || RandomElement(subQTypes.slice(1));
    // define the things which are already decieded whatever the returned question
    // consider extraKeys, answerFormat, furtherInstructions
    var quAndA = { QType: FactorsMultiples + '-' + subQType };
    var qA = {};
    switch (subQType) {
        case 'findMultiple': { qA = findMultipleQ(); break }
        case 'facOrMul': {
            quAndA.answerFormat = 'string';
            qA = facOrMulQ(); break
        }
        case 'prodOfPrimes': {
            quAndA.answerFormat = 'string';
            quAndA.furtherInstructions = 'Give primes in ascending order'
            qA = prodOfPrimesQ(); break
        }
        case 'hcf': {
            qA = hcfQ(2, RandomInt(2) + 2)
            break
        }
        case 'lcm': {
            qA = lcmQ(2);
            break
        }
        default: {
            qA.q = 'default factorsAndMultiples Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

// import into GetnewQs and add to the switch
export default FactorsMultiplesQ;