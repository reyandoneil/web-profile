import styled from "styled-components";
import { Link } from 'react-scroll'

export const Container = styled.nav`
    position: fixed;
    background-color: transparant;
    max-width: 100vw;
    z-index: 99;

    ${({ active }) => active && ` 
    background: white; 
    transition: 0.3s all linear;`}

`;
export const NavBarWraper = styled.div`
    height: 80px;
    margin-left: 80px;
    margin-right: 80px;
    display: flex;

    @media only screen and (max-width: 768px) {
        margin-left: 80px;
        margin-right: 80px;
        }
    @media only screen and (max-width: 608px) {
        margin-left: 25px;
        margin-right: 25px;
        }

`;


export const LeftNav = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    align-items: center;

    `;

export const LogoImg = styled.img` 
    height: 40px;
    width: 100px;
    display: none;
    ${({ active }) => active && ` 
        display :flex;`}
`

export const RightNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    @media only screen and (max-width: 1073px) {
            justify-content: flex-end;
        }
    `;

export const NavMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:80%;

    @media only screen and (max-width: 1073px) {
            display: none;
        }
    
`;

export const NavButton = styled(Link)`
    margin-right: 43px;
    font-size: 18px;
    cursor: pointer;
    padding-bottom: 5px;

    &.active{
        border-bottom: 4px solid #d591d8; 
    }
    
    &:hover{
        color: #d591d8;
    }
   
`;

export const Logo = styled.img`
    height:35px;
`;

export const SwitchButtonWraper = styled.div`
    display: flex;

    @media only screen and (max-width: 1073px) {
            display: none;
        }
    
`;

export const MobileIcon = styled.img`
    height: 20px;
    cursor: pointer;
    `;   

export const MobileIconWraper = styled.div`
    display: none;
    @media only screen and (max-width: 1073px) {
            display: flex;
        }

`;


