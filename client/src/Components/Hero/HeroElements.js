import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
   
`;

export const HeroWraper = styled.div`
    height: 100vh;
    display: grid;
    margin-left    : 80px ;
    margin-right: 80px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 2fr));
    align-items: center;

    @media only screen and (max-width: 600px) {
        margin-left     : 20px ;
        margin-right    : 20px;
    }

    @media only screen and (max-width: 768px) {
        margin-left     : 20px ;
        margin-right    : 20px;
    }

`;

export const HeroLeft = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

  
    
`;



export const Img = styled.img`
    /* margin-top:50px;
    margin-left: 250px; */
    height:80%;
    width: 90%;
    object-fit: cover;
    border-radius: 0px 0px 600px 600px;
   `;

export const ImageWraper = styled.div`
    height: 100vh;
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D591D8;
    margin-top: -10vh;
    border-radius: 0px 0px 600px 600px;
    box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.53);

    @media only screen and (max-width: 600px) {
        height: 50vh;
    }
`;

export const HeroRight = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 45%;
    margin-left: 55px;

    @media only screen and (max-width: 600px) {
        height:40vh;
        min-width: 45%;
        margin-left: 0;
    }

`;
export const Name = styled.span`
    max-width: 40vw;
    font-size: 2vw;
    color: #D288D5;

    @media only screen and (max-width: 600px) {
        font-size: 21px;

    }
`;

export const Title1 = styled.div`
    margin-top: -10px;
    max-width: 40vw;
    font-size: 75px;
    font-weight: bold;

    @media only screen and (max-width: 600px) {
        margin-top: -5px;
        font-size: 35px;
   }

`;

export const Title2 = styled.div`
    margin-top: -20px;
    max-width: 40vw;
    font-size: 75px;
    font-weight: bold;  
    
    @media only screen and (max-width: 600px) {
        font-size: 35px;
        margin-top: -10px;


    }
`;

export const Paragraf = styled.p `
    color: #989898;
    font-size: 1.5vw;

    @media only screen and (max-width: 600px) {
        font-size: 12px;

    }
`;

export const ButtonWraper = styled.div`
    align-self: flex-end;
`;



