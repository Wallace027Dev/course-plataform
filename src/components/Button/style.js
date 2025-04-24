import styled from "styled-components";

export const Container = styled.button`
  font-size: clamp(0.8rem, 2vh, 1rem);
  padding: 1rem 1.2rem;
  background: ${({variant}) => variant === "filled" ? "var(--primary)" : "none"};
  border-radius: 0.25rem;
  transition: background 2s ease-in transform 2s ease-in;

  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    cursor: pointer;
  }
`;