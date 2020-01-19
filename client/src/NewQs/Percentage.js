import { PercentOf, PercentChange, ReversePercentage } from './QTypes';
import { RandomInt, RandomElement } from './RandomFuncs';

const beginners = [50, 25, 10];
const intermediate = [5, 10, 15, 25, 35, 50, 75];

const subTypeList = [null, 'beginner1', 'beginner2', 'intermediate', 'expert'];

// percent to find, and initial amount to work with
const percentAmount = (t) => {
  var percen = 0, amount = 0;
  switch (t) {
    case 'beginner1': {
      percen = RandomElement(beginners);
      amount = (RandomInt(5) + 1) * 20;
      break
    }
    case 'beginner2': {
      percen = RandomElement(beginners);
      amount = (RandomInt(50) + 1) * 4;
      break
    }
    case 'intermediate': {
      percen = RandomElement(intermediate);
      amount = RandomInt(200);
      break
    }
    case 'expert': {
      percen = RandomInt(99) + 1;
      amount = RandomInt(200);
      break
    }
    default: { percen = 0; amount = 0 }
  }
  return [percen, amount]
}

export const PercentOfQ = (subType) => {
  const type = subType || RandomElement(subTypeList.slice(1));
  const quAndA = { QType: PercentOf + '-' + type };
  var [percen, amount] = percentAmount(type);

  if (percen !== 0) {
    quAndA.q = 'Find ' + percen + '% of ' + amount;
    quAndA.a = percen * amount / 100
  } else {
    quAndA.q = 'Default Percentage Q';
    quAndA.a = 42
  }
  return quAndA;
}

export const PercentChangeQ = (subType) => {
  const type = subType || RandomElement(subTypeList.slice(1));
  const quAndA = { QType: PercentChange + '-' + type };
  var [percen, amount] = percentAmount(type);

  if (percen !== 0) {
    if (RandomInt(4) === 0) { // ask user to calculate what the percentage change was
      quAndA.q = 'A shop is having a sale. The price of an item went from £'
        + amount + ' to £' + ((100 - percen) * amount / 100).toFixed(2)
        + '  Find the percentage change';
      quAndA.a = percen;
    } else { // ask user to calculate the new amount
      if (RandomInt(2) === 1) {
        quAndA.q = 'Increase ' + amount + ' by ' + percen + '%';
        quAndA.a = (100 + percen) * amount / 100;
      } else {
        quAndA.q = 'Decrease ' + amount + ' by ' + percen + '%';
        quAndA.a = (100 - percen) * amount / 100;
      }
    }
  } else { //percen was zero
    quAndA.q = 'Default Percentage Q';
    quAndA.a = 42
  }
  return quAndA;
}

export const ReversePercentageQ = () => {
  const percen = RandomElement(intermediate);
  const amount = (RandomInt(30) + 1) * 15;
  const quAndA = {
    QType: ReversePercentage,
    a: amount
  };
  if (RandomInt(2) === 0) {
    quAndA.q = 'A shop is having a ' + percen + '% off sale. The sale price of an item is £'
      + ((100 - percen) * amount / 100).toFixed(2) + '  What was the original price?'
  } else {
    quAndA.q = 'After a '+percen+'% increase, the value of a share in Maths-ELO is now £'
      + ((100 + percen) * amount / 100).toFixed(2) + '  What was the original price?'
  }

  return quAndA;
}