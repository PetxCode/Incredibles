import React, { createContext } from "react";
import { AppFunction } from "./AppFunction";
import { v4 as uuid } from "uuid";

const initState = {
  users: [
    { id: uuid(), name: "Peter" },
    { id: uuid(), name: "Osas" },
    { id: uuid(), name: "Ola" },
  ],
};

export const GlobalContext = createContext(initState);

export const GlobalProvide = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppFunction, initState);

  //Action for Adding new User

  const addingUsers = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  //Actionn for Removing a User
  const removeUserNow = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  //Actionn for Edit a User
  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        addingUsers,
        removeUserNow,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
