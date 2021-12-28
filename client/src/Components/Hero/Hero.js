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
import { useTranslation } from 'react-i18next'




function Hero() {
    const { t } = useTranslation()
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
                        <Paragraf>{t(`HERO.I'm a junior software engineer full stack of immersive JavaScript background, I'm always open to new things, have a growth mindset and a hard worker.`)}
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
