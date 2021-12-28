import React from 'react'
import {
    Container,
    ContactWraper,
    LeftContent,
    RightContent,
    TopLeft,
    ButtomLeft,
    Title,
    Text,
    RightContentWraper
} from './ElementsContactUs'

import InputText from '../InputText/InputText'
import Button  from '../GenerealButton/GeneralButton'

function ContactUs() {
    return (
        <Container id='contact'>
            <ContactWraper>
                <RightContent>
                    <RightContentWraper>    
                        <Title>
                            Say Something
                        </Title>
                        <InputText text="Name" type ='text' placeholder="reyand oneil"/>
                        <InputText text="Email" type ='email' placeholder="reyand@mail.com"/>
                        <InputText text="Phone Number" type ='text' placeholder="081320241318"/>
                        <InputText text="Project Name" type ='text' placeholder="owsome project"/>
                        <Button text="send"/>
                    </RightContentWraper>
                </RightContent>
                <LeftContent>
                    <TopLeft>
                        <Title>
                            Get In Touch
                        </Title>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda consectetur veritatis cum. Fuga ex, eveniet earum, magni obcaecati id est placeat aspernatur nam ipsa perspiciatis debitis quod, odit beatae?
                        </Text>
                    </TopLeft>
                    <ButtomLeft>
                     
                    </ButtomLeft>
                </LeftContent>
                
            </ContactWraper>
        </Container>
    )
}

export default ContactUs
