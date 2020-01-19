export const metricConversion = 'metricConversion';
export const TimeConversion = 'TimeConversion';
export const MultiplyNumbers = 'MultiplyNumbers';
export const PercentOf = 'PercentOf';
export const PercentChange = 'PercentChange'; 
export const Vocab = 'Vocab';
export const Ratio = 'Ratio';
export const Algebra01 = 'Algebra01'

// Aiming for QCodes which the app can parse to produce a new question of the same type
// but with different numbers.

// Format will be a string with format QType-subQType
// 'metricConversion-2', or 'Algebra01-expandBracket'
// whereas: just 'metricConversion' (or 'metricConversion-0') 
// should allow for a random choice of subQType

export const QTypes = [
    metricConversion, TimeConversion, 
    MultiplyNumbers, PercentOf, PercentChange,
    Vocab, 
    Ratio, 
    Algebra01
].sort();