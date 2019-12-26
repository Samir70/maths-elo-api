import { Brackets1, Expand1, Expand2 } from './ExpandBracket';

describe('brackets1 function', () => {
    it('should return an expression of form number(expression)', () => {
        expect(Brackets1(5, [3, -5], ['a', ''])).toBe('5(3a-5)');
        expect(Brackets1(5, [3, -5], ['', 'a'])).toBe('5(3-5a)');
    })
});

describe('Expand1 function', () => {
    it('should return expression without brackets', () => {
        expect(Expand1(5, [3, -5], ['a', ''])).toBe('15a-25');
    })
});

describe('Expand2 function', () => {
    it('should return addition of two bracket terms', () => {
        expect(Expand2(5, [3, -5], '+', 2, [2, 3], ['a', 'b'])).toBe('19a-19b');
    });
    it('should return subtraction of two bracket terms', () => {
        expect(Expand2(5, [3, -5], '-', 2, [2, -3], ['a', 'b'])).toBe('11a-19b');
    });
    it('should return single term if second is cancelled', () => {
        expect(Expand2(5, [3, -5], '-', 5, [2, -5], ['a', 'b'])).toBe('5a');
    });
    it('should return single term if first is cancelled', () => {
        expect(Expand2(5, [3, -5], '-', 3, [5, -1], ['a', 'b'])).toBe('-22b');
    });
    it('should return zero if both are cancelled', () => {
        expect(Expand2(5, [3, -5], '-', 5, [3, -5], ['a', 'b'])).toBe('0');
    });

})