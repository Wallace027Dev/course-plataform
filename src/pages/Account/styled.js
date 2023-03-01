import styled from "styled-components";

export const Account = styled.div`
  margin: 2.5rem auto;
  width: 18rem;
  .info-perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 16rem;
    img {
      margin-top: 1rem;
      width: 5rem;
    }
  }
  div {
    margin: 0 auto;
    text-align: left;
    h1 {
      font-weight: 700;
      font-size: 2rem;
      color: var(--dark-gray);
    }
    p {
      color: var(--gray);
      font-size: 0.75rem;
    }
  }
  section {
    form {
      .btn {
        margin-top: 1rem;
      }
      input {
        width: 15rem;
        height: 3rem;
        border: 1px solid var(--gray);
        border-radius: 1rem;
        padding: 0 1.5rem;
      }
      .btn {
        width: 18rem;
        font-weight: 500;
        font-size: 1rem;
      }
      label {
        margin-top: 1rem;
        margin-bottom: 0.25rem;
        font-size: 0.8rem;
        color: var(--gray);
        display: flex;
        justify-content: flex-start;
      }
    }
    p {
      font-size: 0.75rem;
      margin: 1rem;
    }
    .lnk {
      font-weight: 700;
      text-decoration-line: underline;
      color: var(--blue);
    }
  }
  @media (max-width: 425px) {
    h1 {
      max-width: 280px;
      margin: 0 auto;
    }
  }
	@media screen and (min-width: 768px) {
    margin-top: 5rem;
  }
	@media screen and (min-width: 1024px) {
    margin-top: 10rem;
  }
`;
