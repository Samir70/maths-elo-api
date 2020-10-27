import { metricConversion } from './QTypes';

const conversionPairs = [
  { type: 'zeroQ' },
  { type: 'm/cm', large: ['metres', 'm'], small: ['centimetres', 'cm'], ratio: 100 },
  { type: 'm/mm', large: ['metres', 'm'], small: ['millimetres', 'mm'], ratio: 1000 },
  { type: 'km/m', large: ['kilometres', 'Km'], small: ['metres', 'm'], ratio: 1000 },

  { type: 'g/mg', large: ['grams', 'g'], small: ['milligrams', 'mg'], ratio: 1000 },
  { type: 'kg/g', large: ['kilograms', 'Kg'], small: ['grams', 'g'], ratio: 1000 },

  { type: 'L/cL', large: ['litres', 'L'], small: ['centilitres', 'cL'], ratio: 100 },
  { type: 'L/mL', large: ['litres', 'L'], small: ['millilitres', 'mL'], ratio: 1000 },
]

const MetricConversionQ = (subQType) => {
  var Qtype = conversionPairs.findIndex(cp => cp.type === subQType);
  console.log('index for convFacts Q is', Qtype, 'from parameter', subQType)
  if (Qtype === -1) {
    Qtype = Math.floor(Math.random() * (conversionPairs.length - 1)) + 1;
    console.log('index changed for convFacts Q is', Qtype, 'from parameter', subQType)
  }
  //console.log(metricConversion+'-'+Qtype);
  var convFacts = conversionPairs[Qtype];
  let forward = Math.random() < 0.5 ? true : false,
    extraLarge = Math.random() < 0.25 ? 1 : Math.random() < 0.8 ? 10 : 100;
  let small = Math.floor(Math.random() * convFacts.ratio) * extraLarge,
    large = small / convFacts.ratio;
  return forward ?
    {
      q: "Convert " + small + convFacts.small[1] + " to " + convFacts.large[0],
      a: '' + large, QType: metricConversion + '-' + conversionPairs[Qtype].type
    } :
    {
      q: "Convert " + large + convFacts.large[1] + " to " + convFacts.small[0],
      a: '' + small, QType: metricConversion + '-' + conversionPairs[Qtype].type
    }
}

export default MetricConversionQ;
