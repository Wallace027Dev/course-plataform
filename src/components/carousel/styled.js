import styled from "styled-components";

export const Carousels = styled.div`
  max-width: 75vw;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* ::-webkit-scrollbar {
    display: none;
  } */
  .item {
    background-color: white;
    margin: 10px;
    padding: 10px;
    width: 280px;
    .image img {
      width: 10rem;
      object-fit: cover;
    }
    .info {
      height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span {
        display: block;
        text-align: center;
        color: #1e1e1e;
        padding: 5px;
        border-radius: 10px;
      }
      .name {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 10px 0;
      }
      .price {
        font-size: 0.8rem;
        text-decoration: line-through;
        flex-grow: 1;
      }
    }
  }
  .btns {
    text-align: center;
    cursor: pointer;
  }
`;
