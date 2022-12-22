import styled from "styled-components";

interface Ifocus{
  focus:boolean
}

export const StyledSheradItens = styled.form`
  width: 95%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;
  align-items: center;
  background: var(--Color-grey-0);
  border: 2px solid
    ${({ focus }:Ifocus) => (focus ? "var(--Color-gray-100)" : "var(--Color-grey-50)")};
  border-radius: 8px;
  button {
    height: 90%;
  }

  input {
    height: 70%;
    width: 70%;
    background: var(--Color-grey-0);
    outline: none;
    border: transparent;
  }
  @media (min-width: 700px) {
    width: 70%;
  }
`;
