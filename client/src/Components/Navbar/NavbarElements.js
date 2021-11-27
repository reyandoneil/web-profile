import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: transparent ;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;

    @media screen and(max-width: 960px){
        transition:0.8s all ease;
    }
    &:active {
        /* background: #0E2709; */
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    
    `;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    margin-left: 50px;
    
    
    @media screen and (max-width: 768px){
        margin-left: 0px;
        
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 920px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 50%;
    justify-content: center;


    @media screen and (max-width: 920px){
        display: none;
        

    }
`;

export const NavItem = styled.li`
    height: 80px
`;


export const NavLinks = styled(LinkS)`
    letter-spacing: 3px;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        border-bottom: 3px solid #3FB1B5;
    }
    
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 50px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    letter-spacing: 3px;
    border-radius: 50px;
    background: #3FB1B5;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FEFEFE;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }


`;

