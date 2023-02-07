import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 7rem;

  section {
    width: 12rem;
    text-align: center;
    h1 {
      font-weight: 700;
      font-size: 1.35rem;
      margin-bottom: 1.1rem;
    }
    p {
      color: var(--gray);
      font-size: 1rem;
      margin-bottom: 7rem;
    }
  }
`;
