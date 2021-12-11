import styled  from "styled-components";


export const ButtonWraper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D591D8;
    width: 100px;
    padding: 10px;
    color: white;
    border-radius: 50px;
    cursor: pointer;
    :hover{
    background-color: #DBC5DC;

    }

`;

export const LinkBUtton = styled.a`
    text-decoration:none;
    color: white;
    font-size: 1rem;
     /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
     @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 568px)
        and (-webkit-min-device-pixel-ratio: 2)
        and (orientation: portrait) {
            font-size: 0.8rem;
    }
`