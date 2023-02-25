import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  text-decoration: none;
  border: none;
  margin: 0;
  padding: 0;
}

:root {
  --blue: ${(props) => props.theme.colors.primary};
  --gray: ${(props) => props.theme.colors.secondary};
  --light-gray: ${(props) => props.theme.colors.tertiary};
  --dark-gray: ${(props) => props.theme.colors.textColor};
  --bg-color: ${(props) => props.theme.colors.bgColor};
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--bg-color);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 2rem auto;
  text-align: center;
	width: 18rem;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@keyframes spin {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

@-webkit-keyframes spin {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}

@-moz-keyframes spin {
  from { -moz-transform: rotate(0deg); }
  to { -moz-transform: rotate(360deg); }
}

.spin {
  animation: spin 1s infinite linear;
  -webkit-animation: spin 1s infinite linear;
  -moz-animation: spin 1s infinite linear;
}

@media (max-width: 425px) {
  body {
    max-width: 315px;
  }
}


`;
