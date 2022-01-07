import React,{useState} from 'react'
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
    const initialValue = {
        name:'',
        email:'',
        phoneNumber:'',
        projectName:''
    }
    const [values,setValues] = useState(initialValue)
    const {
        name,
        email,
        phoneNumber,
        projectName
    } = values
    
    const onChange = (e) => {
        const {name, value} = e.target
        setValues({...values,[name]: value})
    }
 
    return (
        <Container id='contact'>
            <ContactWraper>
                <RightContent>
                    <RightContentWraper>    
                        <Title>
                            Say Something
                        </Title>
                        <InputText 
                        text="Name" 
                        type ='text' 
                        name='name'
                        placeholder="reyand oneil"
                        value={name}
                        onChange={onChange}
                        />
                        <InputText 
                        text="Email" 
                        type ='email' 
                        name='email'
                        placeholder="reyand@mail.com"
                        value={email}
                        onChange={onChange}
                        />
                        <InputText 
                        text="Phone Number" 
                        type ='text' 
                        name='phoneNumber'
                        placeholder="081320241318"
                        value={phoneNumber}
                        onChange={onChange}

                        />
                        <InputText 
                        text="Project Name" 
                        type ='text' 
                        name='projectName'
                        placeholder="owsome project"
                        value={projectName}
                        onChange={onChange}
                        />
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
