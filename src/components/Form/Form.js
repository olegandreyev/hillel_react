import React, { useState, useEffect } from 'react'
import useLocalStorage from '../../hook/useLocalStorage'
import { Input, Button } from 'semantic-ui-react'

const Form = () => {
    const [value, setValue] = useState('')

    const [name, setName] = useLocalStorage('name')
    
    const onAddBtnClick = () => {
        setName(value)
        setValue('')
    }
    
    return (
        <>
            <Input
                placeholder='Input name'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button content='ADD' secondary onClick={onAddBtnClick} />
        </>
    )
}

export default Form