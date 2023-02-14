import styled from "styled-components";

export const Carousels = styled.div`
  .car {
    max-width: 57.5vw;
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
    padding: 0.75rem;
    width: 240px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: none;
    .image img {
      width: 10rem;
      object-fit: cover;
      margin: 1rem 0;
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
        padding: 5px;
        border-radius: 10px;
      }
      .title {
        font-size: 1.2rem;
        font-weight: bold;
      }
      .group {
        font-size: 0.8rem;
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
				background-color: var(--light-gray);
			}

      :first-child img {
        transform: rotate(180deg);
      }
    }
  }
`;
