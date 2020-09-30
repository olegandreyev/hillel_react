import React, { useState } from 'react'
import { useLocalStorage } from '../../hook/useLocalStorage'
import { Input, Button } from 'semantic-ui-react'
import { useChangeTitle } from '../../hook/useChangeTitle'

const Form = () => {
    const [value, setValue] = useState('')

    //запись данных в localStorage
    const [name, setName] = useLocalStorage('name', 'Vadim')

    console.log(name)
    //изменение нашего Title
    const [setTitle] = useChangeTitle('Hillel | Task_4')

    const onAddBtnClick = () => {
        setName(value)
        setTitle(value)
        setValue('')

    }

    return (
        <>
            <Input
                placeholder='Input name'
                value={value}
                onChange={
                    (e) => setValue(e.target.value)
                }
            />
            <Button content='ADD' secondary onClick={onAddBtnClick} />
        </>
    )
}

export default Form