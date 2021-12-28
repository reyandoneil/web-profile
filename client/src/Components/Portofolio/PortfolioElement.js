import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    max-width: 100vw;
    
    `;

export const ContactWraper = styled.div`
    display: flex;
    margin-left: 80px;
    margin-right: 80px ;
    height: 100%;
    /* width: 100%; */

    @media only screen and (max-width: 600px) {
        margin-left: 20px;
        margin-right: 20px ;
        flex-direction: column;
    }
`;

export const LeftContent = styled.div` 
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
   
    justify-content: center;
    @media only screen and (max-width: 600px) {
       height: 30%;
       width: 100%;
    }
`;

export const Title = styled.div`
    font-size: 5vh;
    border-bottom: 1vh;
    
    
`;

export const RightContent = styled.div` 
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media only screen and (max-width: 600px) {
        height: 80%;
        width: 100%;

        flex-direction: column;  
    }
    
    `;

export const CardPortfolio = styled.div`
    text-decoration: none;
    height:36vh;
    width: 12vw;
    margin: 20px;
    border-radius: 10px;
    transition: all .2s ease-in-out; 
    box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.53);


    &:hover{
        transform: scale(1.1);
    }

    @media only screen and (max-width: 600px) {
        height:50vh;
        width: 45vw;
    }
`;

export const Top = styled.div`
    background-color: #D591D8 ;
    height: 50%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px ;
    border-top-right-radius: 10px ;



`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
`;

export const PortfolioTitle = styled.span`
    font-size: 1.3vw;
    /* color: black; */
    color: #D591D8; 

    text-decoration: none;
`;

export const Img = styled.img`
    height: 30%;

    @media only screen and (max-width: 600px) {
        height: 20%;

    }
    
`;

export const Paragraph = styled.span`
    font-size: 1.2vw;
    color: #707070;
`;
