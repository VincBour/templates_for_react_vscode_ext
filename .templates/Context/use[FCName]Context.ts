import * as React from "react";
import { [FCName] } from "./[FCName]Provider";

export const use[FCName]Context = () => {
  const context = React.useContext([FCName]);

  // Uncomment if your context doesn't have reasonable defaults
  //   if (context === undefined) {
  //     throw new Error(
  //       "use[FCName]Context must be used within a [FCName]Provider"
  //     );
  //   }

  return context;
};