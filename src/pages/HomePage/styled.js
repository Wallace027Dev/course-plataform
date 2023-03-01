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
    .info-main {
      width: 80%;
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
    .info {
      margin: 2rem auto;
      gap: 1rem;
      .container {
        background-color: var(--light-gray);
        border: var(--light-gray) solid 1rem;
        border-radius: 0.5rem;
        width: 16rem;
        height: 2rem;
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            margin-left: 1rem;
            text-align: left;
            color: var(--dark-gray);
          }
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
    .margin-top {
      margin-top: 2rem;
    }
    .wrapper {
      margin: 2rem 0;
      height: 18rem;
      width: 14rem;
      border-radius: 0.5rem;
      background-color: var(--light-gray);
      > img {
        width: 9rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 0.9rem;
        font-weight: 500;
      }
      h1 {
        font-size: 1.3rem;
        font-weight: 700;
      }
      span {
        color: var(--blue);
      }
      div {
        display: flex;
        align-items: center;
        img {
          height: 1rem;
          margin-right: 0.5rem;
        }
        a {
          font-size: 0.75rem;
          text-decoration: none;
          color: var(--dark-gray);
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .info {
      flex-direction: row;
      .container {
        width: 16rem;
        height: 2rem;
        div {
          p {
            margin-left: 1rem;
            text-align: left;
            color: var(--dark-gray);
          }
        }
      }
    }
  }
`;
