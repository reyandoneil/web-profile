import styled from "styled-components";

export const Container = styled.div` 
    height: 100vh;
    max-width: 100vw;
`;

export const AboutWraper = styled.div`
    display: flex;
    margin-left: 80px;
    margin-right: 80px ;
    align-items: center;
    height: 100%;


    @media only screen and (max-width: 600px) {
        margin-left: 20px;
        margin-right: 20px ;
        flex-direction: column;
    }
`;