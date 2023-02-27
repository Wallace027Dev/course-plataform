import styled from "styled-components";

export const HomeMain = styled.div`
  h1,
  h2 {
    color: var(--dark-gray);
  }
  h1 {
    font-weight: 700;
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 0.75rem;
  }
  p {
    color: var(--gray);
    font-size: 0.75rem;
  }
  main {
    input {
      width: 12.5rem;
      height: 2.2rem;
      background-color: var(--blue);
      color: white;
      border-radius: 0.5rem;
      padding-left: 1rem;
      margin: 1.2rem 0;
      ::placeholder {
        color: white;
        font-size: 0.9rem;
      }
    }
    h2 {
      margin-top: 1rem;
    }
    .journeys-link {
      img {
        height: 3rem;
        margin: 2rem 0.5rem;
      }
    }
  }
`;
