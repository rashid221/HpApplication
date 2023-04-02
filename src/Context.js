import React,{createContext} from "react";

const myContext = React.createContext();
export const Provider = myContext.Provider;
export const Consumer = myContext.Consumer;