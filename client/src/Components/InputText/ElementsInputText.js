import styled from "styled-components";

export const InputTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    margin:10px 0px 10px 0px;
    color: #707070;

    
`;

export const InputTexts = styled.input`
    margin-right: 18vw;
    border: none;
    background-color: #DBC5DC;
    padding: 10px;
    border-radius: 20px;
    color: black;
    font-size: 1rem;

    @media only screen and (max-width: 600px) {
        margin-right:0vw;
        
    }

`;