
import React from 'react'
import {
    ScrollWraper,
    ScrollButton
} from './ScrollButtonElements'
import UpButton from '../../Assets/up.svg'


function Scroll({orientation}) {
    return (
        <>
            <ScrollWraper
                  to={'home'} 
                  smooth={true} 
                  duration={600} 
                  spy={true} 
                  exact='true' 
                  offset={0}
            >
                {orientation && <ScrollButton src={UpButton} alt='scrollUp' />}
            </ScrollWraper>
        </>
    )
}

export default Scroll
