import { expect } from "chai";
import { getReplaceRegexp } from "../../utils/string";

describe('getReplaceRegexp', () => {
    it('should be true', () => {
        const result = getReplaceRegexp('FCName');
        expect(result.test('[FCName]')).true;
    });
    it('should be false', () => {
        const result = getReplaceRegexp('FCName');
        expect(result.test('{FCName}')).false;
    });
});