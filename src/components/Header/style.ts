import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px 0;
  width: 100vw;
  height: 100%;
  background-color: var(--Color-grey-20);
  div {
    margin: 0 auto;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 10px;
  }
  h1 > span {
    color: #1f4e70;
  }
  @media (min-width: 700px) {
    div {
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
