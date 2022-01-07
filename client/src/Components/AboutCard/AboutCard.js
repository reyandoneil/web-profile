import React from 'react'
import {
    CardWraper,
    ImgCard,
    Description,
    Texts
} from './ElementsAboutCard'

function AboutCard({src,title, date}) {
    
    return (
        <CardWraper>
            <ImgCard src={src}/>
            <Description>
                <Texts>
                    {title}
                </Texts>
                <Texts>
                    {date}
                </Texts>
            </Description>
        </CardWraper>
    )
}

export default AboutCard
