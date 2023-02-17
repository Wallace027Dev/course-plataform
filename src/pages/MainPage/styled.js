import styled from "styled-components";

export const Main = styled.div`
	flex-direction: column;
  p {
    color: var(--gray);
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  section {
    width: 14rem;
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
      margin-bottom: 1rem;
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
