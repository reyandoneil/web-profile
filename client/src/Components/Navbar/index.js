
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

function Navbar({ toggle }) {
    const [navbarColor, setNavbarColor] = useState(false)

    const chancgeNavbarColor = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 20) {
            setNavbarColor(true)
        } else {
            setNavbarColor(false)
        }
    }
    window.addEventListener('scroll', chancgeNavbarColor)
    return (
        <>
            <Nav >
                <NavbarContainer className={navbarColor ? 'navbar colorChange' : 'navbar'}>
                    <NavLogo to="/">PORTOFOLIO</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavLinks to="/about">About</NavLinks>
                        <NavLinks to="/discover">Discover</NavLinks>
                        <NavLinks to="/service">Services</NavLinks>
                        <NavLinks to="/signUp">Sign Up</NavLinks>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
