import React, { useState, useContext } from 'react';
import Modal from './Modal';
// AppContext and AppProvider

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   // set sidebar open and ismodal open
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openSidebar = () => {
      setIsSidebarOpen(true);
   };
   const closeSidebar = () => {
      setIsSidebarOpen(false);
   };
   const openModal = () => {
      setIsModalOpen(true);
   };
   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <AppContext.Provider
         value={{
            isSidebarOpen,
            isModalOpen,
            openSidebar,
            closeSidebar,
            openModal,
            closeModal,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
export const useGlobalContext = () => {
   return useContext(AppContext);
};
export { AppContext, AppProvider };
