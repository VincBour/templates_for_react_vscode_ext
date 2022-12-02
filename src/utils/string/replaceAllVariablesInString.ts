import { getReplaceRegexp } from ".";
import { getConfiguration } from "../../lib";

export const replaceAllVariablesInString = (
    target: string,
    value: string,
    replaceValue: string
) => {
    let result = target.replace(getReplaceRegexp(value), replaceValue);
   
    return result;
};