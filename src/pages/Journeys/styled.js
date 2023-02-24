import styled from "styled-components";

export const Course = styled.div`
  .navigator {
    margin: 1rem auto;
    width: 18rem;
    .nav-bar {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    input {
      width: 12.5rem;
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
    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }
    img {
      height: 3rem;
    }
  }
  .wrapper-course {
    margin: 0;
    width: 18rem;
    height: 6rem;
    border-radius: 1rem;
    background-color: var(--light-gray);
    margin: 2rem auto;
    flex-direction: row;
    justify-content: space-around;
    img {
      height: 3rem;
    }
    h2 {
      font-size: 1rem;
    }
    h3 {
      margin: 0.25rem 0;
      color: var(--gray);
    }
    h3,
    p {
      font-size: 0.75rem;
    }
    p {
      width: 3.75rem;
      background-color: var(--dark-gray);
      border-radius: 1rem;
      color: var(--bg-color);
    }
  }
  .wrapper-course-info {
    align-items: flex-start;
  }
`;
