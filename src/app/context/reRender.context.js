import React, { useState } from "react";
const Context = React.createContext({});
export const ReRenderContextProvider = ({ children }) => {
  const [reRender, setReRender] = useState(false);
  const handleReRender = () => {
    setReRender(!reRender);
  };
  return (
    <Context.Provider value={{ reRender, handleReRender }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
