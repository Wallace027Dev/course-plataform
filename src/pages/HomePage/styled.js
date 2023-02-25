import styled from "styled-components";

export const HomeMain = styled.div`
  h1,
  h2 {
    color: ${(props) => props.theme.colors.textColor};
  }
  h1 {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 3.75rem;
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

  .prof-img {
    width: 11.25rem;
    border-radius: 1rem;
  }
  main {
    input {
      width: 12.5rem;
      height: 2.2rem;
      ${(props) => props.theme.colors.primary};
      color: white;
      border-radius: 0.5rem;
      padding-left: 1rem;
      margin: 1.2rem 0;
      ::placeholder {
        ${(props) => props.theme.colors.tertiary};
      }
    }
    h2 {
      margin-top: 1rem;
    }
    .perfil {
      margin-bottom: 2rem;
      img {
        margin-right: 0.5rem;
      }
    }
    .journeys-link {
      img {
        height: 3rem;
        margin: 2rem 0.5rem;
      }
    }
  }
`;
