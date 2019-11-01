import axios from 'axios';

import MetricConversionQ from './MetricConversion';
import TimeConversionQ from './TimeConversion';
import VocabQ from './VocabQ';
import { MultiplyNumberQ } from './NumberOperations';
import { metricConversion, TimeConversion, MultiplyNumbers, Vocab } from './QTypes';
const QTypes = [metricConversion, TimeConversion, MultiplyNumbers, Vocab];

const GetNewQ = (QType, subQType) => {
  //console.log('QType and subQType', QType, subQType)
  var type = QType || QTypes[Math.floor(Math.random() * QTypes.length)];
  var newQ;
  switch (type) {
    case metricConversion: {newQ = MetricConversionQ(subQType); break}
    case MultiplyNumbers: {newQ = MultiplyNumberQ(subQType); break}
    case TimeConversion: {newQ = TimeConversionQ(subQType); break}
    case Vocab: {newQ = VocabQ(); break}
    default: return { q: "How many mathematicians does it take to change a light bulb", a: "1" }
  }

  const toGet = { qType: newQ.QType };
  axios.get('/qratings/get1rating', { params: toGet })
    .then(res => {
      console.log(res.data);
      newQ.QRating = res.data.rating;
      return newQ;
    })
    .catch(err => {
      console.log('getting rating for ', newQ.QType, err);
      newQ.QRating = 1345;
      return newQ;
    });
  
}

export default GetNewQ;
