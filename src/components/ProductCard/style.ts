import styled from "styled-components";

export const StlyesProduct = styled.li`
  list-style: none;
  min-width: 300px;
  height: 350px;
  background: var(--Color-grey-0);
  /* grey-100 */
  border: 2px solid var(--Color-grey-20);
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  :hover {
    border: 2px solid var(--Color-gray-100);
  }
  figure {
    background-color: var(--Color-grey-20);
    width: 100%;
    margin: 0 auto;
    max-height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  figure > img {
    transition: ease-in 0.5s;
    max-height: 90%;
  }
  figure:hover > img {
    transition: ease-out 0.5s;
    max-height: 130%;
  }
  div {
    height: 60%;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  h3 {
    color: var(--Color-primary);
  }
  button {
    height: 48px;
    width: 50%;
  }
`;
