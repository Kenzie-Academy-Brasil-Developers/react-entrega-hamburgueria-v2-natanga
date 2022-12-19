import styled from "styled-components";

export const StyleMain = styled.main`
  margin: 20px auto;
  width: 90vw;
  height: auto;

  @media (min-width: 700px) {
    margin: 20px auto;
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: row;
  }
`;
