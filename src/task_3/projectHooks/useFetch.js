import { useState, useEffect } from 'react'
import { fetchData } from '../helpers/helpers'

export const useFetch = (initialUrl, initialState = [], options = []) => {

    const [item, setItem] = useState(initialState)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)

        fetchData(initialUrl)
            .then(item => {
                setItem(item)
                setIsFetching(false)
            })
    }, [...options, initialUrl])

    return [item, isFetching]
}