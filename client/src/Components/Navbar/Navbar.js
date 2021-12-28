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
    MobileIconWraper,
    LogoImg
} from './NavbarElements'
import { links } from '../../data'
import SwitchButton from '../SwitchButton/SwitchButton'
import { useTranslation } from 'react-i18next'
import BurgerIcon from '../../Assets/mobileIcon.svg'
import BurgerIconP from '../../Assets/mobileIcon-p.svg'
import Logo from '../../Assets/ONEIL.svg'


function Navbar({ active, toggle }) {
    const { t } = useTranslation()
    const [value, setValue] = useState(false)
    const handleToggle = () => {
        setValue(!value)
    }
    console.log(active,'active');
    return (

        <Container active={active} >
            <NavBarWraper>
                <LeftNav>
                    <LogoImg src={Logo}  active={active}/>
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
                            handleToggle={handleToggle}
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
