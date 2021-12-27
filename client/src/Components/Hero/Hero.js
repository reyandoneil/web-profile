import React from 'react'
import {
    Container, 
    HeroLeft, 
    HeroRight,
    HeroWraper,
    Name,
    Title1,
    Paragraf,
    ImageWraper,
    ButtonWraper,
    Img,


} from './HeroElements'

import Ilustration from '../../Assets/oneil-img.svg'


import Button from '../Button/Button'




function Hero() {

    return (
        <>
            <Container id="home">
                <HeroWraper>
                    <HeroLeft>
                        <ImageWraper>
                            <Img src={Ilustration} />
                        </ImageWraper>
                    </HeroLeft>
                    <HeroRight>
                        <Name>Reyand Oneil</Name>
                        <Title1>React Developer</Title1>
                        <Paragraf>LoElit laborum veniam nisi consequat veniam 
                            eu voluptate consectetur pariatur eiusmod nostrud 
                            cillum laborum. Quis nulla excepteur velit sunt ad.
                        </Paragraf>
                        <ButtonWraper>
                            <Button text={'Download CV'}/>  
                        </ButtonWraper>
                    </HeroRight>
                </HeroWraper>
            </Container>
        </>
    )
}

export default Hero
