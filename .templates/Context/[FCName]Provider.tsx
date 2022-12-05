import * as React from "react";
import { PropsWithChildren } from "react";

export interface [FCName]ContextProps { }

export const [FCName] = React.createContext<[FCName]ContextProps>({});

export const [FCName]Provider = ({ children }: PropsWithChildren<[FCName]ContextProps>) => {
  return <[FCName].Provider value={{}}>{children}</[FCName].Provider>;
};

