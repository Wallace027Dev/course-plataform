import styled from "styled-components";

export const Account = styled.div`
  margin-top: 5.35rem;
  div {
    margin-left: 1.5rem;
    h1 {
      font-weight: 700;
      font-size: 2rem;
    }
    p {
      color: var(--gray);
      font-size: 0.75rem;
    }
  }
  section {
    margin: 2.5rem auto;
    width: 20rem;
    label {
      input {
        width: 20rem;
        height: 3rem;
        border: 1px solid var(--gray);
        border-radius: 1rem;
        margin-bottom: 1.5rem;
      }
      .btn {
        width: 20rem;
				font-weight: 500;
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
        color: var(--gray);
      }
    }
    p {
      font-size: 0.75rem;
      margin-top: 1rem;
    }
    .lnk {
      font-weight: 700;
      text-decoration-line: underline;
    }
  }
`;
