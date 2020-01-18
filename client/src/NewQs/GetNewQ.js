import axios from 'axios';

import MetricConversionQ from './MetricConversion';
import TimeConversionQ from './TimeConversion';
import VocabQ from './VocabQ';
import RatioQ from './Ratio';
import Algebra01Q from './AlgebraQ';
import { MultiplyNumberQ } from './NumberOperations';
import { 
  metricConversion, TimeConversion, MultiplyNumbers, 
  Vocab, Ratio, Algebra01, 
  QTypes 
} from './QTypes';


export const GetNewQ = (QType, subQType) => {
  //console.log('QType and subQType', QType, subQType)
  var type = QType || QTypes[Math.floor(Math.random() * QTypes.length)];
  var newQ;
  switch (type) {
    case metricConversion: { newQ = MetricConversionQ(subQType); break }
    case MultiplyNumbers: { newQ = MultiplyNumberQ(subQType); break }
    case TimeConversion: { newQ = TimeConversionQ(subQType); break }
    case Vocab: { newQ = VocabQ(); break }
    case Ratio: { newQ = RatioQ(subQType); break}
    case Algebra01: {newQ = Algebra01Q(subQType); break}
    default: return {
      q: "How many mathematicians does it take to change a light bulb?",
      a: "1", QType: 'giveDefault'
    }
  }
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
