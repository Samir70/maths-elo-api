import { combine, SimplifyAddSub } from './SimplifyAddSub';

describe('combine function', () => {
    it('should combine coefficients and variable names', () => {
        expect(combine([6, 7, 3, -9, 4], ['a', 'c', 'b', 'a', 'c']))
            .toBe('6a+7c+3b-9a+4c');
    });

    it('should display just a number if the variable name is an empty string', () => {
        expect(combine([6, 7, 3, -9, 4], ['a', 'c', '', 'a', 'c']))
            .toBe('6a+7c+3-9a+4c');
    })

    it('should not display coefficient if it is one', () => {
        expect(combine([1, 3, -2, -4], ['a', 'b', 'a', 'c']))
            .toBe('a+3b-2a-4c');
    })
    it('should not display coefficient if it is -1', () => {
        expect(combine([7, 3, -2, -1], ['a', 'b', 'a', 'c']))
            .toBe('7a+3b-2a-c');
    })

    it('should return null if variable array is empty', () => {
        expect(combine([7, 6, 4], [])).toBeNull;
    });
    it('should return null if cooefficient array is empty', () => {
        expect(combine([], ['a', 'b', 'a'])).toBeNull;
    });

    it('manage if coefficients and variable arrays are of different lengths', () => {
        expect(combine([5, 2, -5, 1, 5], ['a', 'c', 'b', 'c']))
            .toBe('5a+2c-5b+c');
        expect(combine([5, 2, -5, 1], ['a', 'c', 'b', 'c', 'a']))
            .toBe('5a+2c-5b+c');
    });
});

describe('SimplifyAddSub function', () => {
    it('should simplify a mixtute of positive and negative terms', () => {
        expect(SimplifyAddSub([6, 7, 3, -9, 4], ['a', 'c', 'b', 'a', 'c']))
            .toBe('-3a+3b+11c');
        });
        
        it('should simplify when number value is a term', () => {
            expect(SimplifyAddSub([6, 7, 3, -9, 4], ['a', '', '', 'a', 'c']))
                .toBe('10-3a+4c');
    })
})