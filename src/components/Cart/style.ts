import styled from "styled-components";

export const StlyesCart = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px 5px 0 0;
  background: var(--Color-primary);
  border: 2px solid var(--Color-grey-20);
  div {
    width: 85%;
    color: var(--Color-grey-0);
    padding: 22px;
    margin: 0 auto;
  }
  section {
    width: 100%;
    height: 120px;
    padding: 20px 0;
    background-color: var(--Color-grey-05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--Color-gray-100);
  }
  p > span {
    color: var(--Color-grey-50);
  }
  button {
    margin: 0 auto;
    height: 48px;
    width: 90%;
  }
  @media (min-width: 700px) {
    margin: 30px 0;
    width: 30%;
  }
`;
