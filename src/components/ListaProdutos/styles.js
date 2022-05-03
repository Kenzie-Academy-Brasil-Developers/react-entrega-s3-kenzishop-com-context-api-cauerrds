import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  column-gap: 1rem;
  justify-content: space-evenly;
  overflow: scroll;

  @media (min-width: 1100px) {
    flex-wrap: wrap;
    row-gap: 1rem;
    &::-webkit-scrollbar {
      display: none;
    }
  } ;
`;
