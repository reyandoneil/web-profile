import React from 'react'
import {
    Container,
    ContactWraper,
    LeftContent,
    RightContent,
    Title,
    CardPortfolio,
    Top,
    Bottom,
    PortfolioTitle,
    Img
} from './PortfolioElement'




import {PorfolioLinks} from '../../data'

function Portfolio() {
    return (
       <Container id='portfolio'>
           <ContactWraper>
               <LeftContent>
                   <Title>
                       My Portfolio
                   </Title>
               </LeftContent>
               <RightContent>
                   {PorfolioLinks.map(PorfolioLink => {
                    return <CardPortfolio 
                    href={PorfolioLink.url}
                    target="_blank"
                    key={PorfolioLink.id}
                    >
                      <Top>
                        <Img src={PorfolioLink.img}/>
                      </Top>
                      <Bottom>
                        <PortfolioTitle>
                            {PorfolioLink.title}
                        </PortfolioTitle>
                      </Bottom>
                    </CardPortfolio>
                   })}
               </RightContent>
           </ContactWraper>
       </Container>
    )
}


export default Portfolio
