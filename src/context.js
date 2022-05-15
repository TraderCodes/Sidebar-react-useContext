import React, { useState, useContext } from 'react';
// AppContext and AppProvider

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   return <AppContext.Provider value="Hello">{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
   return useContext(AppContext);
};
export { AppContext, AppProvider };
