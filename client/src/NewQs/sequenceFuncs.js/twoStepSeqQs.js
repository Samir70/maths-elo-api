import { RandomInt } from '../RandomFuncs';

export const rnd2StepSeq = (n) => {
    let mult = RandomInt(2) + 2;
    let add = RandomInt(5) + 1;
    let start = RandomInt(5) + 1;
    let seq = [start];
    while (seq.length < n) {
        let last = seq[seq.length - 1];
        seq.push((last + add) * mult);
    }
    return seq
}