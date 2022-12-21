import styled from "styled-components";

export const StyledLoginPage = styled.main`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

    section{
        width: 90%;
        height: 40vh;
    }
    section>div{
        width: 100%;
        display: flex;
flex-direction: column;
        gap: 10px;
    }
    span {
    color: var(--Color-logo);
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    button{
        height: 38px;
        width: 100%;
    }
    a{
        text-decoration: none;
        height: 38px;
        width: 100%;  
        text-align: center;
        background: var(--Color-grey-20);
        border: 2px solid var(--Color-grey-20);
        border-radius: 8px;
        color: var(--Color-grey-50);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a :hover {
        background: var(--Color-grey-50);
        border: 2px solid var(--Color-grey-50);
        border-radius: 8px;
    }
`