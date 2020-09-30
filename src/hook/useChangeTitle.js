import { useState } from 'react'

export const useChangeTitle = (initialTitle = 'App') => {

        const [values, setValue] = useState(
                () => {
                        try {
                                document.title = initialTitle
                                return initialTitle
                        } catch (error)  {
                                console.log(error)
                                return initialTitle
                        }
                }
        )

        const setTitle = value => {
                try {
                        const valueToStore =
                                value instanceof Function ? value(values) : value
                        setValue(valueToStore)
                        document.title = value
                } catch (error) {
                        console.log(error)
                }
        }

        return [setTitle]
}