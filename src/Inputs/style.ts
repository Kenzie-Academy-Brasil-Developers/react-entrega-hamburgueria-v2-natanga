import styled from "styled-components";

export const StylesInput = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  label{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  input{
    width: 90%;
    padding: 0 5%;
    height: 38px;
    outline: none;
    border: 2px solid var(--Color-grey-20);
    border-radius: 5px;
  }
  input:hover{
    border: 2px solid var(--Color-gray-100);
  }
`
