import styled from "styled-components";
import { Link } from 'react-scroll'

export const Container = styled.nav`
    position: fixed;
    background-color: transparant;
    max-width: 100vw;

    ${({ active }) => active && ` 
    background: white; 
    Transition:0.3s all linear;`}

`;
export const NavBarWraper = styled.div`
    height: 80px;
    margin-left: 80px;
    margin-right: 80px;
    display: flex;

    @media only screen and (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
        height: 60px;
            }
`;


export const LeftNav = styled.div`
    height: 100%;
    width: 50vw;
`;

export const RightNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    @media only screen and (max-width: 768px) {
        width: 100vw;
        justify-content: flex-end;

        }
`;

export const NavMenu = styled.div`
    /* position: fixed; */
    display: flex;
    
    justify-content: center;
    align-items: center;
    width:80%;

    @media only screen and (max-width: 768px) {
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
    @media only screen 
        and (min-device-width: 320px) 
        and (max-device-width: 568px)
        and (-webkit-min-device-pixel-ratio: 2)
        and (orientation: portrait) {
        display: none;
    }
    
`;

export const MobileIcon = styled.img`
    height: 20px;
    cursor: pointer;

    `;

export const MobileIconWraper = styled.div` 
    @media screen 
        and (min-device-width: 1200px) 
        and (max-device-width: 1600px) 
        and (-webkit-min-device-pixel-ratio: 1) {
            display :none ;
        }

`;


