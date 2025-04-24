import styled from "styled-components";

export const Container = styled.button`
  font-size: clamp(0.8rem, 2vh, 1rem);
  padding: 1rem 1.2rem;
  background: ${({variant}) => variant === "filled" ? "var(--primary)" : "none"};
  border-radius: 0.25rem;
  transition: background 0.2s ease-in transform 0.2s ease-in;

  &:hover {
    background: ${({theme}) => theme.colors.secondary};
    transform: translateY(-2px);
    cursor: pointer;
  }
`;