import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    max-width: 100vw;
    /* background-color: lightyellow; */
    
    
    `;

export const HeroWraper = styled.div`
    margin-left: 80px;
    margin-right: 80px;
    display: flex;
    /* background-color: lightsteelblue; */

        /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
        
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        flex-direction: column;
        margin-left: 50px;
        margin-right: 50px;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        flex-direction: column;
        margin-left: 80px;
        margin-right: 80px;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        flex-direction: row;
        margin-left: 80px;
        margin-right: 80px;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        
    }
        
`;

export const HeroLeft = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* background-color: lightslategrey; */
    

    @media only screen and (max-width: 600px) {
        height: 50vh;
        width: 100%;

    }

     /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        height: 50vh;
        width: 100%;
    }
    


    @media only screen and (min-width: 992px) {
        width: 50%;
        height: 100vh;
    }
    `;



export const Img = styled.img`
    height: 80%;
    width: 80%;
 
 `;

export const ImageWraper = styled.div`
    height: 85%;
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #D591D8;
    border-radius: 0px 0px 600px 600px;
    box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.53);


    @media only screen and (max-width: 600px) {
        border-radius: 0px;
        width: 100%;
        height: 100%;

    }

    @media only screen and (min-width: 600px) {
        border-radius: 0px;
        width: 100%;
        height: 100%;

    }

    @media only screen and (min-width: 768px) {
        border-radius: 0px;
        width: 100%;
        height: 100%;

    }

    @media only screen and (min-width: 992px) {
        border-radius: 0px 0px 600px 600px;
        height: 85%;
        width: 75%;
    }

    @media only screen and (min-width: 1200px) {
        border-radius: 0px 0px 600px 600px;
        height: 85%;
        width: 75%;
    }
    `;

export const HeroRight = styled.div`
    padding-top: 120px;
    padding-left: 30px;
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        padding-top: 30px;
        padding-left: 0px;
        width: 100%;

    }

    @media only screen and (max-width: 768px) {
        padding-top: 30px;
        padding-left: 0px;
        width: 100%;

    }

    @media only screen and (max-width: 992px) {
        padding-top: 30px;
        padding-left: 0px;
        width: 100%;

    }
    

    
`;
export const Name = styled.span`
    font-size: 1.5vw;
    color: #D591D8;

    @media only screen and (max-width: 600px) {
        font-size: 6vw;
    }

    @media only screen and (max-width: 768px) {
        font-size: 6vw;
    }

    @media only screen and (max-width: 992px) {
        font-size: 6vw;
    }
`;

export const Title1 = styled.div`
    font-size: 8vw;
    font-weight: bold;
    line-height: 90%;
    
    @media only screen and (max-width: 600px) {
        font-size: 16vw;
    }

    @media only screen and (max-width: 768px) {
        font-size: 16vw;
    }

    @media only screen and (max-width: 992px) {
        font-size: 16vw;

    }
`;


export const Paragraf = styled.p `
    font-size: 1.2vw;
    margin-top: 30px;
    color: #707070;

    @media only screen and (max-width: 600px) {
        font-size: 3vw;
        margin-top: 15px;
    }

    @media only screen and (maX-width: 768px) {
        font-size: 3vw;
    }

    @media only screen and (maX-width: 992px) {
        font-size: 3vw;
    }
`;

export const ButtonWraper = styled.div`
    margin-top: 5vh;
    align-self: flex-end;
    background-color: #D591D8;
    border-radius: 20px;
    font-size: 2vw;

    @media only screen and (max-width: 600px) {
        margin-top: 2.5vh;
    }

    @media only screen and (min-width: 600px) {
        margin-top: 0.5vh;
    }

    
`;




