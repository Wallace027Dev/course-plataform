import styled from "styled-components";

export const HomeMain = styled.div`
  max-width: 20.625rem;
  h1,
  h2 {
    color: var(--dark-gray);
  }
  h1 {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 3.75rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 0.75rem;
  }
  p {
    color: var(--gray);
    font-size: 0.75rem;
  }
  input {
    width: 90%;
    height: 2.2rem;
    background-color: var(--blue);
    color: white;
    border-radius: 0.5rem;
    padding-left: 1rem;
    margin: 1.2rem 0;
    ::placeholder {
      color: var(--light-gray);
    }
  }
  .prof-img {
    width: 11.25rem;
    border-radius: 1rem;
  }
  main {
    flex-direction: column;
		h2 {
			margin-top: 2rem;
		}
    > div {
      margin-bottom: 3rem;
      img {
        margin-right: 0.5rem;
      }
    }
  }
`;
