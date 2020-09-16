import React from 'react'
import { Button as ButtonPrimary } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const Button = ({ handleButton, data, text }) => {

    const handleBtn = () => {
        handleButton(data)
    }

    return (
        <ButtonPrimary primary onClick={handleBtn}>{text}</ButtonPrimary>
    )
}

Button.propTypes = {
    handleButton: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button