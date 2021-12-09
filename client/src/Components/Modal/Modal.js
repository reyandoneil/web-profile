import React from 'react'
import {
    ModalContainer,
    ModalWraper,
    CloseButton,
    Title
} from './ModalElements'

import errorIcon from '../../Assets/error-icon.svg'

function Modal({text}) {

    return (
       <>
       <ModalContainer>
           <ModalWraper>
                <CloseButton
                    src={errorIcon}
                /> 
                <Title>
                    {text.status}
                </Title>
           </ModalWraper>
       </ModalContainer>
       </>
       
    )
}

export default Modal
