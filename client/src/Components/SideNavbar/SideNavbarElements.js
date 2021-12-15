import styled, {css, keyframes} from "styled-components";
import { Link } from 'react-scroll'


const fadeIn = keyframes`
  0% {
    right: -100px;
  }
  100% {
    right: 0px;
  }
`

export const SideBarContainer = styled.nav`
    position: fixed;
    z-index: 999;
    height: 100vh;
    
    width: 100vw;
    background-color: rgba(0,0,0,0.25);
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    ${({isOpen}) => isOpen && css`
        animation: 0.3s ${fadeIn} ease-out ;
    `};
    
    
    `;

export const NavMenu = styled.div`
    height: 100vh;
    width: 60vw;
    background-color: white;
`;

export const TopMenu = styled.div`
    min-height: 80vh;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;

`;

export const BottomMenu = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    max-height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Text = styled.span`

`;

export const CloseIcon  = styled.img` 
    height: 20px;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 20px;
`;

export const NavButton = styled(Link)`
    margin-top: 20px;
    font-size: 18px;
    cursor: pointer;
    &.active{
        border-bottom: 4px solid #d591d8; 
    }
    
    &:hover{
        color: #d591d8;
    }
   
`;