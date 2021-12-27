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
    Img,
    Paragraph
} from './PortfolioElement'
import {PorfolioLinks} from '../../data'
import LinkButton from '../LinkButton/LinkButton'

function Portfolio() {
    return (
    <>
       <Container id='portfolio'>
           <ContactWraper>
               <LeftContent>
                   <Title>
                       Portfolio
                   </Title>
                   <Paragraph>
                       Enim nisi culpa laboris commodo reprehenderit commodo aute ad commodo laborum consequat ut. Tempor aliqua et tempor consectetur exercitation magna mollit aute velit. 
                   </Paragraph>
               </LeftContent>
               <RightContent>
                   {PorfolioLinks.map(PorfolioLink => {
                       return <CardPortfolio 
                       target="_blank"
                       key={PorfolioLink.id}
                       >
                      <Top>
                        <Img src={PorfolioLink.img}/>
                      </Top>
                      <Bottom>
                        <PortfolioTitle>
                        </PortfolioTitle>
                            <LinkButton 
                            text={'Overview'}
                            link={null}
                            des={PorfolioLink.overview}
                            />
                            <LinkButton 
                            link={PorfolioLink.url}
                            text={'Demo App'}
                            />
                             <LinkButton 
                            link={PorfolioLink.sourceCodeLink}
                            text={'Source Code'}
                            />
                      </Bottom>
                    </CardPortfolio>
                    ;
                })}
               </RightContent>
           </ContactWraper>
       </Container>
    </>
    )
}


export default Portfolio
