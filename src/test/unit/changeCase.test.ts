import { expect } from 'chai';
import { changeCase } from '../../utils/string/changeCase';

const PASCAL_CASE = 'pascalCase';
const CAMEL_CASE = 'camelCase';
const NO_CASE = 'snakeCase';
const KEBAB_CASE = 'kebabCase';

describe('changeCase', () => {
  it('should exist', () => {
    expect(changeCase).exist;
  });
  it('should return Abcd when abcd', () => {
    const result = changeCase('abcd', PASCAL_CASE);
    expect(result).to.equal('Abcd');
  });
  it('should return Abcd when ABCD', () => {
    const result = changeCase('ABCD', PASCAL_CASE);
    expect(result).to.equal('Abcd');
  });
  it('should return AbCd when abCD', () => {
    const result = changeCase('abCD', PASCAL_CASE);
    expect(result).to.equal('AbCd');
  });
  it('should return abcd when ABCD', () => {
    const result = changeCase('ABCD', CAMEL_CASE);
    expect(result).to.equal('abcd');
  });
  it('should return abcd when Abcd', () => {
    const result = changeCase('Abcd', CAMEL_CASE);
    expect(result).to.equal('abcd');
  });
  it('should return abCd when AbCD', () => {
    const result = changeCase('AbCD', CAMEL_CASE);
    expect(result).to.equal('abCd');
  });
  it('should return abcd', () => {
    const result = changeCase('abcd', NO_CASE);
    expect(result).to.equal('abcd');
  });
  it('should return ABCD', () => {
    const result = changeCase('ABCD', NO_CASE);
    expect(result).to.equal('abcd');
  });
  it('should return aBcD', () => {
    const result = changeCase('aBcD', NO_CASE);
    expect(result).to.equal('a_bc_d');
  });
  it('should return AbCd', () => {
    const result = changeCase('AbCd', NO_CASE);
    expect(result).to.equal('ab_cd');
  });
  it('should return d-dee-dda-sde', () => {
    const result = changeCase('dDeeDda sde', KEBAB_CASE);
    expect(result).to.equal('d-dee-dda-sde');
  });
});