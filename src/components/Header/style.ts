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
    color: var(--Color-logo);
  }
  nav{
    width: 100%;
    display: flex;
    align-items: center ;
  }
  nav> div{
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 50px;
    top: 20px;
    width: auto;
    height: auto;
  }
  @media (min-width: 700px) {
    nav> div{
      position: static;
  }

  }
  @media (min-width: 1000px){
        div {
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    nav{
      width: 60%;
    display: flex;
    align-items: center ;
    }
    nav> div{
      position: static;
    width: 15%;
    height: 100%;

  }
  }
  
`;
