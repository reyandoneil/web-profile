import React,{createRef} from 'react'
import {useDispatch} from 'react-redux'
import {
    PopUpContainer,
    PopUpWraper,
    PopupTop,
    Title,
    PopupDes,
    Des,
    PopupButtom
} from './ElementsPopupModal'

import {useLockBodyScroll} from '../../hooks'
import {ClosePopUp} from '../../Store/Action/Popup-Action'
import { useOnClickOutside} from '../../hooks'
import {useSelector} from 'react-redux'


function PopupModal() {
    const PopupContents = useSelector((state) => state.PopupReducer.des)
    console.log(PopupContents,'ini di modal');
    useLockBodyScroll()
    const wrapperRef = createRef();
    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(ClosePopUp())
    }

    useOnClickOutside(wrapperRef, () => dispatch(ClosePopUp()) )   

    return (
        <PopUpContainer >
                 {PopupContents.map(PopupContent => {
                   return <PopUpWraper ref={wrapperRef}>
                            <PopupTop>
                                <Title>
                                    App Overview
                                </Title>
                            </PopupTop>
                            <PopupDes>
                                <Des>
                                    {PopupContent.description}
                                </Des>
                            </PopupDes>
                            <PopupButtom>
                                <button onClick={closeModal}>close</button>
                            </PopupButtom>
                        
                    </PopUpWraper>
                })}
        </PopUpContainer>
    )
}

export default PopupModal
