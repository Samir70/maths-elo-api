import { Decimal } from './QTypes';
import { RandomInt, RandomElement } from './RandomFuncs';

const subQTypes = [
    null, 'order'
];

const orderQ = () => {
    var hundreds = (RandomInt(9)+1)*100; // a number like 200
    var tens = (RandomInt(9)+1) * 10;
    var smaller = hundreds - RandomInt(50) - 1; // a number like 176
    var tensBigger = hundreds + tens;   // a number like 230
    var aBitOff = tensBigger - RandomInt(9) - 1   // a number like 227
    var order1 = [hundreds, smaller, tensBigger, aBitOff];
    var order2 = [tensBigger, hundreds, smaller, aBitOff];
    var order3 = [aBitOff, tensBigger, hundreds, smaller];
    var listDecimals = [order1, order2, order3][RandomInt(3)].map(x=>x/1000)
    var upOrDown = RandomInt(2);
    var sortDirection = upOrDown === 0 ? 'ascending' : 'descending'
    return {
        q:'Put into '+sortDirection+' order '+listDecimals.join(', '),
        a: listDecimals.sort((a, b) => upOrDown === 0 ? a-b : b-a).join(', ')
    }
}

const DecimalQ = (subType) => {
    const subQType = subType || RandomElement(subQTypes.slice(1));
    var quAndA = { QType: Decimal + '-' + subQType };
    var qA = {};
    switch (subQType) {
        case 'order' : { 
            qA = orderQ(); 
            quAndA.furtherInstructions='give numbers seperated by comma and space';
            quAndA.answerFormat='string'; break }
        default : {  
            qA.q = 'default Decimal Question';
            qA.a = 42
        }
    }
    quAndA.q = qA.q;
    quAndA.a = qA.a;
    return quAndA
}

export default DecimalQ;