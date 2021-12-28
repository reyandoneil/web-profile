import styled from "styled-components";

export const ButtonWraper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D591D8;
    padding: 1.5vh 1.5vw;
    color: white;
    border-radius: 100px;
    cursor: pointer;
    :hover{
        background-color: #DBC5DC;
    }
    margin-right: 30vw;
    margin-top: 5vh;

    @media only screen and (max-width: 600px) {
        padding: 2vh ;
    }
    `;