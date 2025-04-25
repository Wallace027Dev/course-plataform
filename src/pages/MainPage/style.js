import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 88rem;
  margin: 2vh auto;

  nav ul {
    display: flex;
    gap: 0.5rem;
  }

  .page-buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 88rem;
  margin: 2vh auto;
`;

export const Greetings = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: left;

  small {
    font-size: clamp(0.6rem, 1.3vw, 1.2rem);
  }

  p {
    margin-bottom: 2vh;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const Subtitle = styled.h2`
  line-height: 130%;
  padding-bottom: 1vh;
  position: relative;
  font-size: clamp(1.4rem, 3vw, 4.5rem);
  background: ${({ theme }) => theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.5s ease;
  animation: gradientAnimation 5s infinite, transformAnimation 5s infinite;
`;
