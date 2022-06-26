import * as React from "react";

export interface [FCName]ContextProps { }

export const [FCName] = React.createContext<[FCName]ContextProps>({});

const [FCName]Provider: React.FC<[FCName]ContextProps> = ({ children }) => {
  return <[FCName].Provider value={{}}>{children}</[FCName].Provider>;
};

export default [FCName]Provider;
