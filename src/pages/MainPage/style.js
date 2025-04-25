import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 4rem);
  max-width: 88rem;
  margin: 2vh auto;
  padding: 0 2rem;

  nav ul {
    display: flex;
    gap: 0.5rem;
  }

  .page-buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  @media (max-width: 64rem) {
    .page-buttons {
      flex-direction: column;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 4rem);
  max-width: 88rem;
  margin: 2vh auto;
  padding: 0 2rem;
  gap: 2rem;

  @media (max-width: 64rem) {
    flex-direction: column;
  }
`;

export const Greetings = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: left;

  small {
    font-size: clamp(0.8rem, 1vw, 1.1rem);
  }

  p {
    margin-bottom: 2vh;
    font-size: clamp(0.9rem, 1.3vw, 1.4rem);
    color: ${({ theme }) => theme.colors.textColor};
  }

  a {
    font-size: clamp(0.9rem, 1.3vw, 1.4rem);
    font-weight: 700;
    padding: 1.25rem 3.6rem;
  }

  @media (max-width: 64rem) {
    width: 100%;

    a {
      width: calc(100% - 7.4rem);
      text-align: center;
    }
  }
`;

export const Subtitle = styled.h2`
  line-height: 130%;
  padding-bottom: 1vh;
  position: relative;
  font-size: clamp(1.5rem, 3.2vw, 4.5rem);
  background: ${({ theme }) => theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.5s ease;
  animation: gradientAnimation 5s infinite, transformAnimation 5s infinite;
`;

export const RoadmapImage = styled.div`
  img {
    height: 80vh;
  }
`;
