import styled from "styled-components";

export const Container = styled.a`
  display: inline-block;
  font-size: clamp(0.8rem, 2vh, 1rem);
  padding: 1rem 1.2rem;
  background: transparent;
  border: 2px solid transparent;
  background: ${({ variant, theme }) =>
    variant === "filled" ? theme.colors.primary : "transparent"};
  border-radius: 0.25rem;
  transition: background 0.2s ease-in;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 400;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    background: ${({ variant, theme }) =>
      variant === "filled" ? "transparent" : theme.colors.primary};
    border-color: ${({ variant, theme }) =>
      variant === "filled" ? theme.colors.primary : "transparent"};
    cursor: pointer;
  }
`;
