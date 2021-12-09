import React from 'react'
import {ButtonWraper, LinkBUtton} from './ButtonElements'
import {useTranslation} from 'react-i18next'
import cv from '../../Assets/cv.pdf'


function Button({text}) {
    const {t} = useTranslation()
    return (
        <>
            <ButtonWraper>
                <LinkBUtton
                href={cv}
                download='Reyand-Oneil-cv.pdf'
                >
                    {t(`BUTTON.${text}`)}
                </LinkBUtton>
            </ButtonWraper> 
        </>
    )
}

export default Button
