import styled from "styled-components";

export const CourseStyle = styled.div`
  gap: 1rem;
  .wrapper {
    background-color: var(--light-gray);
    height: 110vh;
    border-radius: 1rem 1rem 0rem 0rem;
    padding: 1.25rem;
  }
  .course-info {
    text-align: left;
    h2 {
      font-weight: 700;
      font-size: 1.25rem;
    }
    h3 {
      font-weight: 700;
      font-size: 1rem;
    }
    p {
      color: var(--gray);
      font-size: 0.75rem;
      margin-bottom: 1rem;
    }
  }
  .other-courses {
    h3 {
      font-size: 1.5rem;
			font-weight: 500;
			color: var(--gray);
    }
    h4 {
      font-size: 0.9rem;
    }
    img {
      cursor: pointer;
      height: 2.75rem;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1em;
    }
  }
`;
