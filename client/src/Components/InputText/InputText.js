import React from 'react'
import {
    InputTexts,
    InputTextWrapper,
    Label
} from './ElementsInputText'

function InputText({text,type, placeholder}) {
    return (
        <InputTextWrapper>
            <Label>
                {text}
            </Label>
            <InputTexts type={type} placeholder={placeholder}/>
        </InputTextWrapper>
    )
}

export default InputText
