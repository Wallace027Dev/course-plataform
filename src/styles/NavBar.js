import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
	height: 3rem;
  margin-bottom: 2rem;
  > div {
		background-color: var(--blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    img {
      height: 2rem;
    }
  }
`;
