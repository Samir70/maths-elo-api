import axios from 'axios';

import MetricConversionQ from './MetricConversion';
import TimeConversionQ from './TimeConversion';
import VocabQ from './VocabQ';
import RatioQ from './Ratio';
import Algebra01Q from './AlgebraQ';
import DataQ from './DataQ';
import DecimalQ from './Decimals';
import { MultiplyNumberQ } from './NumberOperations';
import NegNumQ from './NegNumQ';
import FactorsMultiplesQ from './FactorsMultiples'
import { PercentOfQ, PercentChangeQ, ReversePercentageQ } from './Percentage';
import { 
  metricConversion, TimeConversion, MultiplyNumbers, NegNumbers,
  Decimal, FactorsMultiples,
  PercentOf, PercentChange, ReversePercentage,
  Vocab, Ratio, Algebra01, Data,
  QTypes 
} from './QTypes';


export const GetNewQ = (QType, subQType) => {
  // console.log('QType and subQType', QType, subQType)
  var type = FactorsMultiples//QType || QTypes[Math.floor(Math.random() * QTypes.length)];
  var newQ;
  switch (type) {
    case metricConversion: { newQ = MetricConversionQ(subQType); break }
    case MultiplyNumbers: { newQ = MultiplyNumberQ(subQType); break }
    case NegNumbers : { newQ = NegNumQ(subQType); break }
    case FactorsMultiples : { newQ = FactorsMultiplesQ(subQType); break }
    case Decimal : { newQ = DecimalQ(subQType); break }
    case PercentOf : { newQ = PercentOfQ(subQType); break }
    case PercentChange : { newQ = PercentChangeQ(subQType); break }
    case ReversePercentage : { newQ = ReversePercentageQ(); break }
    case TimeConversion: { newQ = TimeConversionQ(subQType); break }
    case Vocab: { newQ = VocabQ(); break }
    case Ratio: { newQ = RatioQ(subQType); break}
    case Algebra01: {newQ = Algebra01Q(subQType); break}
    case Data: {newQ = DataQ(subQType); break}
    default: return {
      q: "How many mathematicians does it take to change a light bulb?",
      a: "1", QType: 'giveDefault'
    }
  }
  // console.log(newQ)
  return newQ;
}

export const getQRating = async (qType) => {
  const toGet = { qType: qType };
  var qRating = 1234;
  await axios.get('/qratings/get1rating', { params: toGet })
    .then(res => {
      console.log('Axios get 1 rating:', res.data);
      qRating = res.data.rating;
    })
    .catch(err => {
      console.log('Axios Error getting rating for ', qType, err);
      qRating = 1345;
    });
  return qRating;
}
