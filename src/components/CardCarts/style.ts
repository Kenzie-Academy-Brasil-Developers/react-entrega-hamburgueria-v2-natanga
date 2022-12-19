import styled from "styled-components";

export const StlyesProduct = styled.li`
  list-style: none;
  width: 90%;
  height: 100px;
  background: var(--Color-grey-05);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  figure {
    width: 25%;
    height: 100%;
    border-radius: 5px;
    background-color: var(--Color-grey-20);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure:hover img {
    transition: ease-in 0.5s;
    max-height: 120%;
  }
  img {
    transition: ease-in 0.5s;
    max-height: 90%;
  }
  div {
    color: black;
    width: 55%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  h4 {
    color: var(--Color-grey-50);
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    height: 60px;
    width: 100%;
  }
`;
