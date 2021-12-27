import React from 'react'
import {ButtonContainer} from './ElementsLinkButton'
import {useDispatch} from 'react-redux'
import {OpenPopUp,PopUpContent} from '../../Store/Action/Popup-Action'




function LinkButton({link, text, des}) {
    const dispatch = useDispatch()
    const handlePopup = () => {
        dispatch(OpenPopUp())
        dispatch(PopUpContent(des))
    }
    if(text === 'Overview'){
        return (
            <>
                <ButtonContainer
                href={link}
                target="_blank"
                onClick={handlePopup}
                >
                    {text}
                </ButtonContainer>
            </>
        )
    } else {
        return (
            <ButtonContainer
            href={link}
            target="_blank"
            >
                {text}
            </ButtonContainer>
        )
    }
}

export default LinkButton
