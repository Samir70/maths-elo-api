export const metricConversion = 'metricConversion';
export const TimeConversion = 'TimeConversion';
export const MultiplyNumbers = 'MultiplyNumbers';
export const NegNumbers = 'NegNumbers';
export const FactorsMultiples = 'FactorsAndMultiples';
export const PercentOf = 'PercentOf';
export const PercentChange = 'PercentChange';
export const ReversePercentage = 'ReversePercentage';
export const Vocab = 'Vocab';
export const Ratio = 'Ratio';
export const Algebra01 = 'Algebra01';
export const Data = 'Data';
export const Decimal = 'Decimal';

// Aiming for QCodes which the app can parse to produce a new question of the same type
// but with different numbers.

// Format will be a string with format QType-subQType
// 'metricConversion-2', or 'Algebra01-expandBracket'
// whereas: just 'metricConversion' (or 'metricConversion-0') 
// should allow for a random choice of subQType

export const QTypes = [
    { topic: Algebra01, subTopics: ['simplifyAddSub', 'expandBracket', 'expand2Simplify', 'factorise1', 'factorise2', 'substitution'] },
    { topic: Data, subTopics: ['mean', 'meanFindmissing', 'medianOdd', 'medianEven', 'range', 'mode'] },
    { topic: MultiplyNumbers, subTopics: ['sq', 'cube', 'sqEnd5', 'sqEnd1', 'gridWhole'] },
    { topic: NegNumbers, subTopics: ['adding', 'subtract', 'times', 'divide'] },
    { topic: Decimal, subTopics: ['order', 'round'] },
    { topic: metricConversion, subTopics: [1, 2, 3, 4, 5, 6, 7] },
    { topic: TimeConversion, subTopics: ['secMin', 'secMinHr'] },
    { topic: FactorsMultiples, subTopics: ['prodOfPrimes', 'findMultiple', 'facOrMul', 'hcf', 'lcm', 'numFactors'] },
    { topic: PercentOf, subTopics: ['beginner1', 'beginner2', 'intermediate', 'expert'] },
    { topic: PercentChange, subTopics: ['beginner1', 'beginner2', 'intermediate', 'expert'] },
    { topic: ReversePercentage, subTopics: [] },
    { topic: Ratio, subTopics: ['simplify', 'mapForm', 'keepRatio', 'share', 'givenDiff'] },
    { topic: Vocab, subTopics: [] }
];