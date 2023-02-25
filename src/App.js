import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import { AuthProvider } from "./context/authContext";
import Switch from "react-switch";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import GlobalStyle from "./styles/global";

import light from "./themes/light";
import dark from "./themes/dark";

function App() {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Switch
            onChange={onChangeTheme}
            checked={theme.name === "light"}
            height={20}
            width={40}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={20}
            onHandleColor="#dcdce7"
            offColor="#2F2F42"
            onColor="#3d5cff"
          />
          <ThemeProvider theme={theme}>
            <AppRoutes />
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
