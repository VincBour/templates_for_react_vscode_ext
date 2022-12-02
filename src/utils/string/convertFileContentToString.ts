import { getConfiguration } from "../../lib";

export const convertFileContentToString = (content: string[] | string | undefined) => {
    if (!content) {
      return "";
    }
    let result = Array.isArray(content) ? content.join("\n") : content;
    const configurations = getConfiguration<{isReact18: boolean}>("props") || { isReact18: false};
    if (configurations.isReact18) {
       result = result.replace(new RegExp(/import \* as React from 'react';/), ""); 
    }
    return result;
  };