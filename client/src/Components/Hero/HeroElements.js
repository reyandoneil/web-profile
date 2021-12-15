import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    
    
`;

export const HeroWraper = styled.div`
    height: 100vh;
    display: flex;
    margin-left    : 80px ;
    margin-right: 80px;
    align-items: center;

    /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 568px)
        and (-webkit-min-device-pixel-ratio: 2)
        and (orientation: portrait) {
            flex-direction: column;
            margin-left     : 30px ;
            margin-right    : 30px;    
    }
    /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
    @media only screen 
        and (min-device-width: 375px) 
        and (max-device-width: 667px) 
        and (-webkit-min-device-pixel-ratio: 2)
        and (orientation: portrait) { 

        }

`;

export const HeroLeft = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    min-width: 45vw;

   
`;



export const Img = styled.img`
    height:65%;
    object-fit: cover;

    @media only screen and (max-width: 768px) {
        margin-top: 45px;

    }
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

    @media only screen and (max-width: 768px) {
        height: 65vh;
        border-radius: 0px 0px 0px 0px;
        width: 100vw;
        box-shadow: none;

    }
`;

export const HeroRight = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 45%;
    margin-left: 55px;

    @media only screen and (max-width: 768px) {
        margin-top: 15px;
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
    @media only screen 
        and (min-device-width: 375px) 
        and (max-device-width: 667px) 
        and (-webkit-min-device-pixel-ratio: 2)
        and (orientation: portrait) { 
            margin-top: 30px;
        }
    
    /* ----------- iPhone 6+, 7+ and 8+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { 

}
`;




