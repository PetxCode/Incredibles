import React, { createContext, useEffect } from "react";
import { AppFunction } from "./AppFunction";
import { v4 as uuid } from "uuid";

const initState = {
  users: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [],
  // users: [
  //   { id: uuid(), name: "Peter" },
  //   { id: uuid(), name: "Bukky" },
  // ],
};

export const GlobalContext = createContext(initState);

export const GlobalProvide = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppFunction, initState);

  //useEffect for Local Storage

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state.users));
  }, [state]);

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
