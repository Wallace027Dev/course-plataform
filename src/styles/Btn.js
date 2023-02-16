import styled from "styled-components";

export const Btn = styled.button`
  height: 3.12rem;
  min-width: 8rem;
  max-width: 19rem;
  background-color: var(--blue);
  color: white;
  border-radius: 0.5rem;
  margin: 0 0.25rem;
  :hover {
    @media (min-width: 425px) {
      border: 1px solid var(--blue);
      background-color: white;
      color: var(--blue);
      cursor: pointer;
    }
  }
`;
