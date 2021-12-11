import React, { useState } from 'react'
import {
    Container,
    LeftNav,
    RightNav,
    NavButton,
    NavMenu,
    SwitchButtonWraper,
    NavBarWraper,
    MobileIcon,
    MobileIconWraper
} from './NavbarElements'
import { links } from '../../data'
import SwitchButton from '../SwitchButton/SwitchButton'
import { useTranslation } from 'react-i18next'
import BurgerIcon from '../../Assets/mobileIcon.svg'
import BurgerIconP from '../../Assets/mobileIcon-p.svg'


function Navbar({ active, toggle }) {
    const { t } = useTranslation()
    const [value, setValue] = useState(false)
    return (

        <Container active={active} >
            <NavBarWraper>
                <LeftNav>
                    ini logo
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
                                offset={-50}
                            >
                                {t(`NAVBAR.${link.text}`)}</NavButton>
                        })}
                    </NavMenu>
                    <SwitchButtonWraper >
                        <SwitchButton
                            isOn={value}
                            handleToggle={() => setValue(!value)}
                        />
                    </SwitchButtonWraper>
                    <MobileIconWraper>
                        {active
                            ?
                            <MobileIcon src={BurgerIconP} onClick={toggle} />
                            :
                            <MobileIcon src={BurgerIcon} onClick={toggle} />
                        }
                    </MobileIconWraper>
                </RightNav>
            </NavBarWraper>
        </Container>

    )

}

export default Navbar
