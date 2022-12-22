import styled from "styled-components";

export const StyledRegisterPage = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    section{
        margin: 0 auto;
        width: 90%;
        height: 80%;
    }
    h2{
        margin-bottom: 10px;
    }
    section>div{
        margin: 0 auto;
        width: 90%;
        height: 100%;
    }
    form{
        width: 100%;
        height: 75%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    form>button{
        width: 100%;
        height: 38px;
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
    @media (min-width: 700px)  {
        section{
        margin: 0 auto;
        width: 30%;
        height: 80%;
    }
    }
`