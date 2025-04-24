import styled from "styled-components";

export const Container = styled.a`
  font-size: clamp(0.8rem, 2vh, 1rem);
  padding: 1rem 1.2rem;
  background: transparent;
  background: ${({ variant, theme }) => 
    variant === "filled" ? theme.colors.primary : "transparent"};
  border-radius: 0.25rem;
  transition: background 0.2s ease-in;
  color: white;
  font-weight: 400;

  &:hover {
    background: ${({theme}) => theme.colors.primary};
    cursor: pointer;
  }
`;
