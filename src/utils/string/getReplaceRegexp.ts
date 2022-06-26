export const getReplaceRegexp = (variableName: string) => {
    const regexp = new RegExp(
      `(?:<|\\[)${variableName}\\s*(?:\\s*(?:\\|)\\s*([A-Za-z\?]+)\\s*?)?(?:>|\\])`,
      "g"
    );
  
    return regexp;
  };