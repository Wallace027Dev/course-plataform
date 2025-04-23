import styled from "styled-components";

export const Course = styled.div`
  margin: 2.5rem auto;
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
        width: auto;
      }
    }
    img {
      height: 3rem;
    }
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
  }
  .wrapper-course-info {
    text-align: left;
    align-items: flex-start;
    line-height: 0.9rem;
    width: 12rem;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    .navigator {
      width: 32rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .navigator {
      width: 48rem;
    }
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
