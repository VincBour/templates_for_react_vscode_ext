import { camelCase, paramCase, pascalCase, snakeCase } from 'change-case';

export const changeCase = (value: string, type: string) => {
    const mapping: {[key:string]: string} = {
        'pascalCase': pascalCase(value),
        'camelCase': camelCase(value),
        'snakeCase': snakeCase(value),
        'kebabCase': paramCase(value)
    };
    
    return mapping[type];
};