import styled from "styled-components";

export const StlyesList = styled.ul`
width: 100%;
  padding: 0;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 25px;
  overflow-x: scroll;
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 25px;
    overflow-x: hidden;
  }
`;
