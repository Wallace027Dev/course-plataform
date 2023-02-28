import styled from "styled-components";

export const HomeMain = styled.main`
  h1,
  h2 {
    color: var(--dark-gray);
  }
  h1 {
    font-weight: 700;
    font-size: 1.4rem;
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
  .info-staart {
    margin-bottom: 2rem;
    text-align: center;
    div {
      width: 16rem;
    }
    h2 {
      color: var(dark-gray);
      font-weight: 500;
      margin-bottom: 0.5rem;
      span {
        color: var(--blue);
      }
    }
    h3 {
      color: var(--gray);
      font-weight: 400;
    }
    .container {
      div {
        display: flex;
        justify-content: space-between;
        background-color: var(--light-gray);
        margin-top: 1rem;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        p {
          width: 75%;
          text-align: left;
          color: var(--dark-gray);
        }
      }
    }
  }
  .main {
    text-align: center;
    h2 {
      width: 16rem;
      color: var(dark-gray);
      font-weight: 500;
      span {
        color: var(--blue);
      }
    }
    .wrapper {
      margin-top: 2rem;
      margin-bottom: 20rem;
      height: 16rem;
      width: 16rem;
      border-radius: 0.5rem;
      background-color: var(--light-gray);
      img {
        width: 7.5rem;
				border-radius: 0.5rem;
      }
    }
  }
`;
