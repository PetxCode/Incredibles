import React, { createContext, useReducer, useState } from "react";
import { AppReducer } from "./AppReducer";

const initState = {
  students: [
    { id: 1, name: "Peter" },
    { id: 2, name: "Bukky" },
    { id: 3, name: "Ndidi" },
    { id: 4, name: "Ubani" },
    { id: 5, name: "Ola" },
  ],
};

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <GlobalContext.Provider
      value={{
        mgs: "Hello, welcome to BrighterDays",
        greeting: "You are welcome!",
        std: state.students,
        auth,
        setAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
