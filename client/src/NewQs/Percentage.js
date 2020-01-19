import { PercentOf, PercentChange } from './QTypes';
import { RandomInt, RandomElement } from './RandomFuncs';

const beginners = [50, 25, 10];
const intermediate = [5, 10, 15, 25, 35, 50, 75];

const subTypeList = [null, 'beginner1', 'beginner2', 'intermediate', 'expert']

export const PercentOfQ = (subType) => {
  const type = subType || RandomElement(subTypeList.slice(1));
  const quAndA = {qType: PercentOf+'-'+type };
  var percen = 0, amount = 0;

  switch (type) {
      case 'beginner1' : { 
        percen = RandomElement(beginners);
        amount = (RandomInt(5) + 1)*20;
        break
      }
      case 'beginner2' : { 
        percen = RandomElement(beginners);
        amount = (RandomInt(50) + 1)*4;
        break
      }
      case 'intermediate' : { 
        percen = RandomElement(intermediate);
        amount = RandomInt(200);
        break
      }
      case 'expert' : { 
        percen = RandomInt(99)+1;
        amount = RandomInt(200);
        break
      }
      default : { 
          quAndA.q = 'Default Percentage Q';
          quAndA.a = 42
      }
  }
  if (percen !== 0) {
      quAndA.q = 'Find '+percen+'% of '+amount;
      quAndA.a = percen*amount/100
  }
  return quAndA;
}
