import styled from "styled-components";
import {Link} from 'react-scroll'

export const Container = styled.nav`
    display: flex  ;
    position: fixed;
    background-color: transparant;
    width: 100vw;

    ${({ active }) => active && ` 
    background: white; 
    Transition:0.3s all linear;`}

    @media only screen and (max-width: 600px) {
            display: none;
        }

`;
export const NavBarWraper = styled.div`
  margin-left: 80px;
  margin-right: 80px;
`;

export const LeftNav = styled.div`
    height: 100%;
    width: 50%;
`;

export const RightNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 50%;
`;

export const NavMenu = styled.div`
    /* position: fixed; */
    display: flex;
    
    justify-content: center;
    align-items: center;
    width:80%;
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
    
    
`;

