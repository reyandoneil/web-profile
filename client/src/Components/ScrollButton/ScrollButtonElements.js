import styled from "styled-components";
import {Link} from 'react-scroll'

export const ScrollWraper =styled(Link)`
    position: fixed;
    margin-top: 85vh;
    margin-left: 90vw;
    @media only screen and (max-width: 600px) {
        
        margin-left:80vw;
    }
    `;


export const ScrollButton =styled.img`
    cursor: pointer;
    height: 40px;
`;