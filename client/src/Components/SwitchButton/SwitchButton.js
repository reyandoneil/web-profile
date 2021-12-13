import { useEffect } from 'react'
import {
    CheckBoxWraper,
    CheckBox,
    CheckBoxLabel
} from './SwitchButtonElements'

import { useTranslation } from 'react-i18next'

import ReactTooltip from "react-tooltip";

function SwitchButton({ handleToggle, isOn }) {
    const { i18n } = useTranslation()
    useEffect(() => {
        if (isOn) {
            i18n.changeLanguage('idn')
        } else {
            i18n.changeLanguage('eng')
        }
    }, [i18n, isOn])
    
    return (
        <>
            <CheckBoxWraper data-tip data-for="translate">
                <CheckBox
                    id="checkbox"
                    type="checkbox"
                    onChange={handleToggle}
                    checked={isOn}

                />
                <CheckBoxLabel htmlFor="checkbox" />
                <ReactTooltip
                    id="translate"
                    place="top"
                    effect="solid"
                    backgroundColor="#D591D8"

                >translation
                </ReactTooltip>
            </CheckBoxWraper>
        </>
    )
}

export default SwitchButton
