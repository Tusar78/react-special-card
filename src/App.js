import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Tutorial from "./Components/Tutorial";
import ToggleContext from "./Context/ToggleContext";
import GlobalStyle from "./Styled_Components/GlobalStyle.styles";

const App = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const theme = {
    toggle: toggle,
  };
  return (
    <>
      <GlobalStyle />
      <ToggleContext.Provider value={{ toggle, setToggle }}>
        <ThemeProvider theme={theme}>
          <Tutorial />
        </ThemeProvider>
      </ToggleContext.Provider>
    </>
  );
};

export default App;
