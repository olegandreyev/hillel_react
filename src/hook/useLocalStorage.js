import { useState, useEffect } from 'react'
import { initialLocalStorage, getItemFromLocalStorage } from '../helper/helper'

const useLocalStorage = (initialKey, initialValue = []) => {
    const [localStorageKey] = useState(initialKey)
    const [items, setItems] = useState(initialValue)

    useEffect(
        () => {
            initialLocalStorage(localStorageKey)
        }, [])

    useEffect(
        () => {
            const itemsFromLocalStorage = getItemFromLocalStorage(localStorageKey)

            if (!Array.isArray(items)) {
                localStorage.setItem(
                    localStorageKey,
                    JSON.stringify(
                        [...itemsFromLocalStorage, items]
                    ))
                return
            }
            return
        }, [items])

    return [items, setItems]
}

export default useLocalStorage
