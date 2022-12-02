import { GuardMeta } from 'xstate';
import { [FCName]Context, [FCName]Event } from '../types';
import { guardExample } from './guardExample';

describe('guardExample', () => {
    it('should be defined', () => {
        expect(guardExample).toBeDefined();
    });
    it('should return true', () => {
        const result = guardExample({ a: 2, b: 1} as [FCName]Context, { type: "EVENT_1"}, {} as GuardMeta<[FCName]Context, [FCName]Event>);
        expect(result).toBeTruthy();
    });
    it('should return false', () => {
        const result = guardExample({ a: 0, b: 1} as [FCName]Context, { type: "EVENT_1"}, {} as GuardMeta<[FCName]Context, [FCName]Event>);
        expect(result).toBeFalsy();
    });
});