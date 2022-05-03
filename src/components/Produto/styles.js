import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  width: 300px;
  min-width: 300px;
  background-color: #ea8c77;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: left;
  justify-content: center;
  border: 6px solid #fed75c;
  border-radius: 16px;

  img {
    background-color: #070707;
    border-radius: 1rem;
    margin: auto;
    width: 225px;
    height: 300px;
  }

  button {
    height: 40px;
    border-radius: 4px;
    background-color: #085e9e;
    color: #fff;
  }
`;
