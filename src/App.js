import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import AppRoutes from "./Routes";
import Switch from "react-switch";

import MyComponent from "./styles/global";
import "./styles/style.css";
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
            <MyComponent />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
