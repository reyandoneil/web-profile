import React from 'react'
import {
    CardWraper,
    ImgCard
} from './ElementsAboutCard'

function AboutCard({src}) {
    console.log(src,'ini gambarnya');
    return (
        <CardWraper>
            <ImgCard src={src}/>
        </CardWraper>
    )
}

export default AboutCard
