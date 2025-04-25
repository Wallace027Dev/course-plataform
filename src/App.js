import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./styles/NavBar";
import { useState } from "react";
import AppRoutes from "./Routes";
import Switch from "react-switch";

import MyComponent from "./styles/global";
import iconStaart from "./images/icon-staart.png";
import light from "./themes/light";
import dark from "./themes/dark";
import "./styles/style.css";
import Navigation from "./components/NavigationAccount/NavigationAccount";

function App() {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme.name === "dark" ? light : dark);
  };
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* <NavBar>
            <div>
              <a href="https://app.staart.com/">
                {<img src={iconStaart} alt="Logo Staart" />}
              </a>
              <Navigation />
              <Switch
                onChange={onChangeTheme}
                checked={theme.name === "dark"}
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                onHandleColor="#dcdce7"
                offColor="#2F2F42"
                onColor="#858597"
              />
            </div>
          </NavBar> */}
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
