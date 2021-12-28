import styled from "styled-components";

export const Container = styled.div` 
    height: 100vh;
    max-width: 100vw;
    padding-bottom: 10vh;
`;

export const ContactWraper = styled.div`
    display: flex;
    margin-left: 80px;
    margin-right: 80px ;
    height: 100%;


    @media only screen and (max-width: 600px) {
        margin-left: 20px;
        margin-right: 20px ;
        flex-direction: column;
    }
`;

export const LeftContent = styled.div`
    width: 50%;
    height: 100%;
`;

export const TopLeft = styled.div`
    margin-top: 40px;
`;

export const ButtomLeft = styled.div`
    margin-top: 2vh;
`;

export const Title = styled.div`
    font-size: 5vh;
`;

export const Text = styled.div`
    margin-top: 1vh;
    font-size: 1.2vw;
    color: #707070;
    
`;

export const RightContent = styled.div`
    width: 50%;
    height: 100%;
`;

export const RightContentWraper = styled.div`
    margin-top: 40px;
;
   
`;