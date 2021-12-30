import styled from "styled-components";

export const Container = styled.div` 
    height: 100vh;
    max-width: 100vw;
`;

export const ReactStack = styled.div`
    height: 15%;
    width: 100%;
    background-color: #DBC5DC;
    display: flex;
    align-items: center;
   
`;

export const AboutCard = styled.div`
    flex-direction: row;
    display: flex;
    height: 70%;
    align-items: center;
    justify-content: space-around;



`;

export const AboutWraper = styled.div`
    display: flex;
    margin-left: 80px;
    margin-right: 80px ;
    flex-direction: column;
    height: 100%;


    @media only screen and (max-width: 600px) {
        margin-left: 20px;
        margin-right: 20px ;
        flex-direction: column;
    }
`;