import styled from "styled-components";

export const Course = styled.div`
  h1,
  h2 {
    color: var(--dark-gray);
  }
  h1 {
    font-weight: 700;
    font-size: 1.5rem;
  }
  h2 {
    font-weight: 500;
    font-size: 1.1rem;
    text-align: left;
  }
  .navigator {
    text-align: left;
    margin: 1rem auto;
    width: 18rem;
    .nav-bar {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      img {
        height: 2rem;
      }
    }
    input {
      width: 12.5rem;
      height: 2.2rem;
      background-color: var(--blue);
      border-radius: 0.5rem;
      padding-left: 1rem;
      margin: 1.2rem 0;
      ::placeholder {
        color: var(--light-gray);
      }
    }
    img {
      height: 3rem;
    }
  }
  .wrapper-course {
    width: 18rem;
    height: 6.5rem;
    border-radius: 1rem;
    background-color: var(--light-gray);
    margin-top: 2rem;
    padding: 0 0.5rem;
    flex-direction: row;
    justify-content: space-around;
    > div {
      margin: 0 0.5rem;
    }
    img {
      height: 4.5rem;
      width: 7.5rem;
      border-radius: 0.25rem;
    }
    h2 {
      font-size: 0.9rem;
      font-weight: 500;
    }
    h3 {
      margin: 0.25rem 0;
      color: var(--gray);
    }
    h3,
    p {
      font-size: 0.6rem;
    }
    p {
      width: 4.5rem;
      background-color: var(--dark-gray);
      border-radius: 1rem;
      color: var(--bg-color);
    }
  }
  .wrapper-course-info {
    text-align: left;
    align-items: flex-start;
    line-height: 0.9rem;
    width: 12rem;
  }
`;
