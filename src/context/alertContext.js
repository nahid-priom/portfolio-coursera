import React, { createContext, useContext, useState } from "react";

// Creating the alert context
const AlertContext = createContext();

// Creating the provider component
export const AlertProvider = ({ children }) => {
  // State to manage alert status
  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: "success", // Type can be either "success" or "error"
    message: "" // Message to be displayed, can be any string
  });

  // Function to open the alert
  const openAlert = (type, message) => {
    setAlertState({ isOpen: true, type, message });
  };

  // Function to close the alert
  const closeAlert = () => {
    setAlertState({ isOpen: false, type: "", message: "" });
  };

  // Providing state and functions to the context
  const contextValue = {
    ...alertState,
    onOpen: openAlert,
    onClose: closeAlert
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to access the alert context
export const useAlertContext = () => useContext(AlertContext);
