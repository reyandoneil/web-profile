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
import {useTranslation} from 'react-i18next'

function Portfolio() {
    const {t} = useTranslation()
    return (
    <>
       <Container id='portfolio'>
           <ContactWraper>
               <LeftContent>
                   <Title>
                       Portfolio
                   </Title>
                   <Paragraph>
                       {t(`HERO.Some examples of learning using react libraries such as Redux, Styled-component, Reactrouter and others.`)}
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
