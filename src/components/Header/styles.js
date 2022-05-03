import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  border: 6px solid #fed75c;
  border-radius: 16px;
  margin-bottom: 1rem;

  .headerBox {
    padding: 1rem;
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-size: 1.5rem;
    color: #fff;
  }

  .menu {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    button {
      width: 120px;
      background-color: #085e9e;
      color: #fff;
      height: 30px;
      border-radius: 16px;
      border: 4px solid #fed75c;

      font-size: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (min-width: 1100px) {
    h1 {
      font-size: 2rem;
    }
    .menu {
      flex-direction: row;
      column-gap: 16px;
      button {
        height: 40px;
        font-size: 1.5rem;
      }
    }
  }
`;
