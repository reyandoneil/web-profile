import React from 'react'
import {
    Container,
    AboutWraper
} from './ElementsAbout'

import Card from '../AboutCard/AboutCard'
import {aboutCards} from '../../data'
function About() {
    console.log(aboutCards ,'ini datanya');
    return (
        <Container id='about'>
            <AboutWraper>
                {aboutCards.map(card => {
                 return <Card
                    key={card.id}
                    src={card.img}
                 >

                 </Card>
                })}
            </AboutWraper>
        </Container>
    )
}

export default About
