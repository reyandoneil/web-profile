import styled  from "styled-components";


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

    @media only screen and (max-width: 600px) {
        padding: 2vh ;
    }
    `;

export const LinkBUtton = styled.a`
    text-decoration:none;
    color: white;
    font-size: 1vw;

    @media only screen and (max-width: 600px) {
        font-size: 3vw;
        
    }

    @media only screen and (max-width: 768px) {
        font-size: 3vw;
        
    }
    
`