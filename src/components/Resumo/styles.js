import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 310px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  color: #fff;
  border-radius: 16px;
  border: 4px solid #fed75c;
  margin: 0 auto;
  margin-bottom: 1rem;
  .resumoBox {
    display: flex;
    justify-content: space-between;
  }
  button {
    width: 250px;
    height: 40px;
    background-color: #085e9e;
    border-radius: 16px;
    border: 4px solid #fed75c;
    font-size: 1rem;
    color: #fff;
    margin: 0 auto;
    &:hover {
      cursor: pointer;
    }
  }
`;
