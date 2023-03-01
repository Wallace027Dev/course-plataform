import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: var(--blue);
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  h2 {
    font-size: 0.9rem;
    color: var(--gray);
  }
  h3 {
    font-size: 0.5rem;
    color: var(--gray);
  }
  a {
    background-color: var(--bg-color);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
`;
