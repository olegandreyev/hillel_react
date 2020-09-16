import React from 'react'
import {  Button as ButtonPrimary} from 'semantic-ui-react'

const Button = ({changeOptions}) => {
    const handleChange = () => {
        changeOptions()
    }
    return(
        <ButtonPrimary primary onClick={handleChange}>Change options</ButtonPrimary>
    )
}

export default Button