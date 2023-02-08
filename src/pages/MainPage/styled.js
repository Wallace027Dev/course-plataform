import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
	p {
      color: var(--gray);
      font-size: 1rem;
      margin-bottom: 1rem;
    }

  section {
    width: 12rem;
    text-align: center;
    span {
      background-color: var(--dark-gray);
      border: 0.4rem solid var(--dark-gray);
      border-radius: 0.5rem;
    }
    h1 {
      font-weight: 700;
      font-size: 1.35rem;
      margin-bottom: 1.1rem;
    }
    p {
      margin-bottom: 3rem;
    }
  }
  .fgt-pass {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    color: var(--dark-gray);
  }
  .lnk {
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    :hover {
      color: var(--blue);
    }
  }
`;
