import styled from "styled-components";

export const Main = styled.div`
  flex-direction: column;
  p {
    color: var(--gray);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  section {
    margin-top: 1rem;
    width: 14rem;
    text-align: center;
    h1 {
      font-weight: 700;
      font-size: 1.35rem;
      margin-bottom: 1.1rem;
      color: ${(props) => props.theme.colors.textColor};
      span {
        background-color: #1f1f39;
        border: 0.25rem solid #1f1f39;
        border-radius: 0.5rem;
      }
    }
    p {
      margin-bottom: 1rem;
      letter-spacing: 1px;
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
  .subscribe {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.bgColor};
  }
`;
