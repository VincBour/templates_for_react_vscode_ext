import { expect } from "chai";
import { replaceAllVariablesInString } from "../../utils/string";

describe('replaceAllVariablesInString', () => {
    it('should exist', () => {
        expect(replaceAllVariablesInString).to.exist;
    });
    it('should return MyComponent when <FCName>', () => {
        const target = '<FCName>';
        const result = replaceAllVariablesInString(target, 'FCName', 'MyComponent');

        expect(result).to.equal('MyComponent');
    });
    it('should return myComponent when [FCName]', () => {
        const target = '[FCName]';
        const result = replaceAllVariablesInString(target, 'FCName', 'myComponent');

        expect(result).to.equal('myComponent');
    });
});