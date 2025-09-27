import { createContext } from "react";
import App from "../App";

const AppContext = createContext();

export const AppContextProvider = (props) => {
  const value = {

  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
