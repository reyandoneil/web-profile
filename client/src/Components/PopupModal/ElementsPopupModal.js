import styled from "styled-components";

export const PopUpContainer = styled.div` 
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color:  rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:999;
    
  
`

export const PopUpWraper = styled.div`
    background-color: white;
    box-shadow: 10px 10px 38px 0px rgba(0,0,0,0.53);
    border-radius: 10px;
    height: 50vh;
    width: 30vw;
    animation: show .3s;
    transform: scale(1);
    @keyframes show {
        from{
            transform: scale(0.7);
            opacity: 0;
        } to {
            transform: scale(1);
            opacity: 1;
        }
    }
    display: flex;
    flex-direction: column;
    padding: 1%;
`;

export const PopupTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;

`;

export const Title = styled.span`
    font-size: 2rem;
`;

export const PopupDes = styled.div`
    height: 70%;
    width: 100%;
`;

export const Des = styled.span`
    
`;

export const PopupButtom = styled.div`
    height: 10%;
    width: 100%;

`;