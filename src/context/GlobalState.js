import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// init
const initialState = {
  users: [
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" },
    { id: 3, name: "User Three" },
  ],
}

// create
export const GlobalContext = createContext(initialState);

// provider
export const GloabalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeUser = (id) => {
    dispatch({ type: "REMOVE_USER", payload: id });
  };

  return (
    <GlobalContext.Provider value={{ users: state.users, removeUser }}>
      {children}
    </GlobalContext.Provider>
  )
}