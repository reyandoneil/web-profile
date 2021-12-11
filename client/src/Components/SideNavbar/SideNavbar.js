import React, { useState } from 'react'
import {
    SideBarContainer,
    NavMenu,
    TopMenu,
    BottomMenu,
    Text,
    CloseIcon,
    NavButton
} from './SideNavbarElements'
import SwitchButton from '../SwitchButton/SwitchButton'
import CloseBtn from '../../Assets/close.svg'
import { links } from '../../data'
import { useTranslation } from 'react-i18next'




export default function SideNavbar({ toggle, isOpen }) {
    const [value, setValue] = useState()
    console.log(value, 'sidebar');
    const { t } = useTranslation()

    return (
        <SideBarContainer isOpen={isOpen}>
            <NavMenu>
                <TopMenu>
                    <CloseIcon src={CloseBtn} onClick={toggle} />
                    {links.map(link => {
                        return <NavButton
                            to={link.url}
                            key={link.id}
                            smooth={true}
                            duration={600}
                            spy={true}
                            exact='true'
                            offset={-50}
                        >{t(`NAVBAR.${link.text}`)}</NavButton>
                    })}
                </TopMenu>
                <BottomMenu>
                    <SwitchButton
                        isOn={value}
                        handleToggle={() => setValue(!value)}
                    />
                    <Text>ENG</Text>
                </BottomMenu>
            </NavMenu>
        </SideBarContainer>
    )
}
