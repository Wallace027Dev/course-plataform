import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`

:root {
  --blue: ${(props) => props.theme.colors.primary};
  --gray: ${(props) => props.theme.colors.secondary};
  --light-gray: ${(props) => props.theme.colors.tertiary};
  --dark-gray: ${(props) => props.theme.colors.textColor};
  --bg-color: ${(props) => props.theme.colors.bgColor};
  --gradient: ${(props) => props.theme.colors.gradient};
}
`;

function MyComponent() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="./style.css" />
      </Helmet>
      <GlobalStyle />
    </>
  );
}

export default MyComponent;
