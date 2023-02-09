import styled from "styled-components";

export const HomeMain = styled.div`
  margin: 2rem auto;
  max-width: 20.625rem;
  h1,
  h2 {
    color: var(--dark-gray);
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
  input {
    width: 90%;
    height: 2.2rem;
    background-color: var(--blue);
    color: white;
    border-radius: 0.5rem;
    padding-left: 1rem;
    margin: 1.2rem 0;
    ::placeholder {
      color: var(--gray);
    }
  }
  .prof-img {
    width: 11.25rem;
    border-radius: 1rem;
  }
  main {
    flex-direction: column;
    div {
      margin-bottom: 3rem;
      img {
        margin-right: 0.5rem;
      }
    }
  }
  section {
    gap: 0.9rem;
    width: 20.625rem;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .journey-img {
      width: 10rem;
      border-radius: 1rem;
      margin-top: 1.25rem;
    }
  }
`;
