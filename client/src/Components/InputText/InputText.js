import React, { useState } from 'react'
import {
    InputTexts,
    InputTextWrapper,
    Label
} from './ElementsInputText'

function InputText({text,type, placeholder,name, onChange, value}) {


 
    return (
        <InputTextWrapper>
            <Label>
                {text}
            </Label>
            <InputTexts 
            type={type} placeholder={placeholder}
            onChange={onChange}
            name={name}
            value={value}
            
            />
        </InputTextWrapper>
    )
}

export default InputText
