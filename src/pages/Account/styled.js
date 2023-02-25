import styled from "styled-components";

export const Account = styled.div`
  div {
    margin: 0 auto;
    padding: 0 1rem;
    text-align: left;
    h1 {
      font-weight: 700;
      font-size: 2rem;
      color: var(--dark-gray);
    }
    p {
      color: var(--gray);
      font-size: 0.75rem;
    }
  }
  section {
    margin: 2.5rem auto;
    width: 18rem;
    form {
      input {
        width: 15rem;
        height: 3rem;
        border: 1px solid var(--gray);
        border-radius: 1rem;
        margin-bottom: 1.5rem;
        padding: 0 1.5rem;
      }
      .btn {
        width: 18rem;
        font-weight: 500;
        font-size: 1rem;
      }
      label {
        font-size: 0.8rem;
        color: var(--gray);
        display: flex;
        justify-content: flex-start;
      }
    }
    p {
      font-size: 0.75rem;
      margin-top: 1rem;
    }
    .lnk {
      font-weight: 700;
      text-decoration-line: underline;
      color: var(--blue);
    }
  }
  @media (max-width: 425px) {
    h1 {
      max-width: 280px;
      margin: 0 auto;
    }
  }
`;
