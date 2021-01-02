import { RandomElement } from '../RandomFuncs';

const simpFracs = [
    { numer: 1, denom: [2, 3, 4, 5, 6, 7, 8, 9] },
    { numer: 2, denom: [3, 5, 7, 9] },
    { numer: 3, denom: [4, 5, 7, 8] },
    { numer: 4, denom: [5, 7, 9] },
    { numer: 5, denom: [6, 7, 8, 9] },
    { numer: 6, denom: [7] },
    { numer: 7, denom: [8, 9] },
    { numer: 8, denom: [9]}
];

export const simpFrac = () => {
    let parts = RandomElement(simpFracs);
    let d = RandomElement(parts.denom);
    return [parts.numer, d]
}
