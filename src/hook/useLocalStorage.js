import { useState, useEffect } from 'react'
import { initialLocalStorage, getItemFromLocalStorage } from '../helper/helper'

const useLocalStorage = (initialKey, initialValue = []) => {
    const [item, setItem] = useState(initialValue)

    useEffect(
        () => {
            initialLocalStorage(initialKey)
        }, [])

    useEffect(
        () => {
            const itemsFromLocalStorage = getItemFromLocalStorage(initialKey)

            if (!Array.isArray(item)) {
                localStorage.setItem(
                    initialKey,
                    JSON.stringify(
                        [...itemsFromLocalStorage, item]
                    ))
                return
            }
            return
        }, [item])

    return [item, setItem]
}

export default useLocalStorage
