import React from 'react'
import {
    Container,
    AboutWraper,
    ReactStack,
    AboutCard
} from './ElementsAbout'

import Card from '../AboutCard/AboutCard'
import {
    aboutCards,
    stackImg
} from '../../data'
import Icons from '../Icons/Icons'
function About() {
    return (
        <Container id='about'>
            <AboutWraper>
                <ReactStack>
                    {stackImg.map(icon => {
                        return <Icons 
                        key={icon.id}
                        img={icon.img}/>
                    })}
                </ReactStack>
                <AboutCard>
                    {aboutCards.map(card => {
                    return <Card
                        key={card.id}
                        src={card.img}
                        title={card.type}
                        date={card.date}
                    >

                    </Card>
                    })}
                </AboutCard>
            </AboutWraper>
        </Container>
    )
}

export default About
