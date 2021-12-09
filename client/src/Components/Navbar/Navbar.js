import React, { useState } from 'react'
import {
    Container,
    LeftNav,
    RightNav,
    NavButton,
    NavMenu,
    SwitchButtonWraper
} from './NavbarElements'
import {links} from '../../data'
import SwitchButton from '../SwitchButton/SwitchButton'
import { useTranslation } from 'react-i18next'

function Navbar({active}) {
    const {t} = useTranslation()
    const [value, setValue] = useState(false)
    return (
       
        <Container active= {active} >
            <LeftNav>
            </LeftNav>
            <RightNav>
                <NavMenu>
                {links.map(link => {
                    return <NavButton 
                    to={link.url} 
                    key={link.id}
                    smooth={true} 
                    duration={600} 
                    spy={true} 
                    exact='true' 
                    offset={-60}
                    >
                    {t(`NAVBAR.${link.text}`)}</NavButton>
                })}
                </NavMenu>
                <SwitchButtonWraper>
                    <SwitchButton
                        isOn={value}
                        handleToggle={() => setValue(!value)}
                    />
                </SwitchButtonWraper>
            </RightNav>
        </Container>
      
    ) 

}

export default Navbar
