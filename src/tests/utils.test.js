import { returnMDY } from '../utils/utils';

describe('Test returnMDY function', () => {

    it('should return an empty string if invalid date string is passed', () => {
        const badString = 'abc';
        const result = returnMDY(badString);
        expect(result).toBe('');
    });

    it('should return falsy if a falsy value is passed', () => {
        const result = returnMDY(false);
        expect(result).toBe(false);
    });

    it('should return a formatted date with valid datestring', () => {
        const date = new Date(Date.parse('2018-05-25T12:38:52Z'));
        const result = returnMDY(date);
        expect(result).toBe('May 25, 2018');
    });
});