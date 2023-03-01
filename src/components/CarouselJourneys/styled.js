import styled from "styled-components";

export const Carousels = styled.div`
  .car {
    max-width: 18rem;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .item {
    background-color: var(--light-gray);
    margin: 0.75rem;
    padding: 1.25rem 0.75rem;
    width: 15rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: none;
    .image img {
      width: 8rem;
      object-fit: cover;
      margin: 0.5rem 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 12rem;
      span {
        display: block;
        text-align: center;
        color: var(--dark-gray);
        padding: 0.1rem;
        border-radius: 0.75rem;
      }
      .title {
        margin-top: 1rem;
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--dark-gray);
      }
      .description {
        font-size: 0.7rem;
        color: var(--gray);
      }
    }
  }

  .btns {
    text-align: center;

    button {
      background-color: transparent;
      margin: auto 1rem;
      border: none;
      cursor: pointer;

      img {
        height: 1rem;
        width: 1rem;
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--blue);
      }

      :first-child img {
        transform: rotate(180deg);
      }
    }
  }
  @media screen and (min-width: 768px) {
    .car {
      max-width: 36rem;
    }
  }
  @media screen and (min-width: 1440px) {
    .car {
      max-width: 72rem;
    }
		.btns {
			display: none;
		}
  }
`;
