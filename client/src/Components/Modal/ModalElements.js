import styled, { keyframes } from "styled-components";

export const SlideAnimation = keyframes`
  0%   {background-color: white; opacity: 0; }
  100% {background-color: #F3D0A7; opacity: 1; }
`;

export const ModalContainer = styled.div`
    position: fixed;
    margin-left: 85vw;
    margin-top: 70px;
    transition: width 2s;
    
    `

export const ModalWraper = styled.div`
    height: 50px;
    width: 200px;
    background-color: #F3D0A7;
    border-radius: 60px 00px 00px 60px;
    display: flex;
    align-items: center;
    animation-name: ${SlideAnimation};
    animation-duration: 8s;
`

export const CloseButton = styled.img`
    height: 30px;
    width: 30px;
    background-color: white;
    border-radius: 50px;
    margin-left: 10px;
    padding:6px;
    
`;

export const Title = styled.span`
    align-items: center;
    justify-content: center;
    color: #707070;
    margin-left: 10px;
`;