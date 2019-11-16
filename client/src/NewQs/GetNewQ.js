import axios from 'axios';

import MetricConversionQ from './MetricConversion';
import TimeConversionQ from './TimeConversion';
import VocabQ from './VocabQ';
import { MultiplyNumberQ } from './NumberOperations';
import { metricConversion, TimeConversion, MultiplyNumbers, Vocab } from './QTypes';
const QTypes = [metricConversion, TimeConversion, MultiplyNumbers, Vocab];

export const GetNewQ = (QType, subQType) => {
  //console.log('QType and subQType', QType, subQType)
  var type = QType || QTypes[Math.floor(Math.random() * QTypes.length)];
  var newQ;
  switch (type) {
    case metricConversion: { newQ = MetricConversionQ(subQType); break }
    case MultiplyNumbers: { newQ = MultiplyNumberQ(subQType); break }
    case TimeConversion: { newQ = TimeConversionQ(subQType); break }
    case Vocab: { newQ = VocabQ(); break }
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
